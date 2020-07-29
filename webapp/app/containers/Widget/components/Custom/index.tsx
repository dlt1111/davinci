import React, { useEffect, useRef } from 'react'
import { IWidgetWrapperProps } from '../Widget'
import { loadScript } from 'app/utils/util'
import request from 'app/utils/request'

type THooksEventField = 'mount' | 'update' | 'unmount'
type THooksMount = (data) => any
type THooksUpdate = (newData) => any
type THooksUnmount = () => any
interface IHooksEventCallbacks {
  mount: THooksMount
  update: THooksUpdate
  unmount: THooksUnmount
}

type TPluginRenderFunc = (hook: CustomPluginHooks, id: string) => any

const style = {
  width: '100%',
  height: '100%'
}

export class CustomPluginHooks {
  public events: IHooksEventCallbacks
  constructor() {
    this.events = {
      mount: null,
      update: null,
      unmount: null
    }
  }

  public on (event: THooksEventField, callback: IHooksEventCallbacks) {
    this.events[event] = callback as any
  }

  public off (event: THooksEventField) {
    this.events[event] = null
  }

  public clear () {
    this.events = {
      mount: null,
      update: null,
      unmount: null
    }
  }
}


const hooks = new CustomPluginHooks()
const CUSTOM_PLUGIN_CONTAINER_ID = '_customPluginContainer'
/**
 * Custom Chart Component
 * @param props
 */
const CustomContainer: React.FC<IWidgetWrapperProps> = (props) => {

  const { customModuleSelected, data, onEditCustomPlugin } = props

  useEffect(() => {
    (async () => {
      try {
        if (!customModuleSelected.isLoaded) {
          const loadDeps = customModuleSelected.deps.map((url) => loadScript(url))
          await Promise.all(loadDeps)
          onEditCustomPlugin(['modules', customModuleSelected.config.chartInfo.name], 'isLoaded', true)
        }
        let renderFunc: TPluginRenderFunc | string = customModuleSelected.render
        if (typeof renderFunc === 'string') {
          renderFunc = await loadRenderFunc(renderFunc)
          onEditCustomPlugin(['modules', customModuleSelected.config.chartInfo.name], 'render', renderFunc)
        }
        renderFunc(hooks, CUSTOM_PLUGIN_CONTAINER_ID)
      } catch (error) {
        console.error('plugin render: ' + error)
      }
      try {
        hooks.events?.mount?.(data)
      } catch (error) {
        console.error('plugin mount: ' + error)
      }
    })()
    return () => {
      try {
        hooks.events?.unmount?.()
        hooks.clear()
      } catch (error) {
        console.error('plugin unmount: ' + error)
      }
    }
  }, [])

  useEffect(() => {
    const { data } = props
    try {
      hooks.events?.update?.(data)
    } catch (error) {
      console.error('plugin update: ' + error)
    }
  }, [data])

  return <div style={style} id={CUSTOM_PLUGIN_CONTAINER_ID} />
}

const loadRenderFunc = (url: string) => {
  return new Promise<TPluginRenderFunc>((resolve, reject) => {
    request(url).then((fnStr) => {
      const renderFunc: TPluginRenderFunc = eval(`(${fnStr})`)
      resolve(renderFunc)
    })
  })
}

export default CustomContainer
