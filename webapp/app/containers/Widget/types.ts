import { CustomPluginHooks } from './components/Custom/index';
/*
 * <<
 * Davinci
 * ==
 * Copyright (C) 2016 - 2017 EDP
 * ==
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * >>
 */

import { IWidgetConfig } from './components/Widget'
import { IChartInfo } from 'app/containers/Widget/components/Widget'

export interface IWidgetBase {
  id: number
  name: string
  description: string
  publish: boolean
  type: number
  viewId: number
  projectId: number
}

export interface IWidgetRaw extends IWidgetBase {
  config: string
}

export interface IWidgetFormed extends IWidgetBase {
  config: IWidgetConfig
  dataToken?: string
}

export interface ICustomModule {
  deps: string[]
  config: {
    chartInfo: IChartInfo
    dimetionsCount: number
    metricsCount: number
  },
  isLoaded?: boolean,
  /**
   * Render field must be a function or string. If it is string, it means a link to the render function in other file
   */
  render: (hooks: CustomPluginHooks, id: string) => any | string
}
export interface ICustomPlugin {
  commonDeps?: string[]
  modules?: {
    [moduleName: string]: ICustomModule
  },
  isLoaded?: boolean
}

export interface IWidgetState {
  widgets: IWidgetFormed[]
  currentWidget: IWidgetRaw
  loading: boolean
  dataLoading: boolean
  columnValueLoading: boolean
  distinctColumnValues: any[]
  customPlugin: ICustomPlugin
}
