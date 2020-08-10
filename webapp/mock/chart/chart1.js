(hooks, id) => {
  const iChart = echarts.init(document.getElementById(id))

  const resizeHandler = () => { iChart.resize() }

  const formatData = data => {
    const xData = data.map((item) => item['存货分类'])
    const yData1 = data.map((item) => item['sum(订单金额)'])
    const yData2 = data.map((item) => item['sum(利润)'])
    const option = {
      xAxis: {
        type: 'category',
        data: xData
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'sum(订单金额)',
          data: yData1,
          type: 'line'
        },
        {
          name: 'sum(利润)',
          data: yData2,
          type: 'line'
        }
      ]
    }
    return option
  }

  hooks.on('mount', (data, style) => {
    console.log('mount')
    const option = formatData(data)
    iChart.setOption(option)
    window.addEventListener('resize', resizeHandler)
  })

  hooks.on('update', (newData, newStyle) => {
    console.log('update')
    const option = formatData(newData)
    iChart.setOption(option)
  })

  hooks.on('unmount', () => {
    console.log('unmount')
    window.removeEventListener('resize', resizeHandler)
    iChart.dispose()
  })
}
