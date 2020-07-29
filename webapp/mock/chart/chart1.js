(hooks, id) => {
  const iChart = echarts.init(document.getElementById(id))

  hooks.on('mount', (data) => {
    console.log('mount')
    const xData = data.map((item) => item['存货分类'])
    const yData = data.map((item) => item['sum(订单金额)'])
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
          data: yData,
          type: 'line'
        }
      ]
    }
    iChart.setOption(option)
  })

  hooks.on('update', (newData) => {
    console.log('update')
    const xData = newData.map((item) => item['存货分类'])
    const yData = newData.map((item) => item['sum(订单金额)'])
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
          data: yData,
          type: 'line'
        }
      ]
    }
    iChart.setOption(option)
  })

  hooks.on('unmount', () => {
    console.log('unmount')
    iChart.dispose()
  })
}
