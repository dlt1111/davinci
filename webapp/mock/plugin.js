function f() {
  return {
    commonDeps: [
      'http://localhost:5002/mock/deps/echarts.min.js',
      'https://gw.alipayobjects.com/os/lib/antv/g2/4.0.14/dist/g2.min.js',
      'https://d3js.org/d3.v5.min.js',
      '//at.alicdn.com/t/font_206948_3v8641dvkri.css'
    ],
    modules: {
      chart1: {
        deps: [],
        config: {
          chartInfo: {
            id: 100,
            name: 'chart1',
            title: '折线图',
            icon: 'icon-hdfs1',
            coordinate: 'cartesian',
            rules: [
              {
                dimension: 1,
                metric: [1, 9999]
              }
            ],
            dimetionAxis: 'col',
            data: {
              cols: {
                title: '列',
                type: 'category'
              },
              rows: {
                title: '行',
                type: 'category'
              },
              metrics: {
                title: '指标',
                type: 'value'
              },
              filters: {
                title: '筛选',
                type: 'all'
              },
              color: {
                title: '颜色',
                type: 'category'
              },
              tip: {
                title: '提示信息',
                type: 'value'
              }
            },
            style: {
              spec: {
                smooth: false,
                step: false
              },
              label: {
                showLabel: false,
                labelPosition: 'top',
                labelFontFamily: 'PingFang SC',
                labelFontSize: '12',
                labelColor: '#666'
              },
              xAxis: {
                showLine: true,
                lineStyle: 'solid',
                lineSize: '1',
                lineColor: '#D9D9D9',
                showLabel: true,
                labelFontFamily: 'PingFang SC',
                labelFontSize: '12',
                labelColor: '#666',
                showInterval: false,
                xAxisInterval: 0,
                xAxisRotate: 0
              },
              yAxis: {
                showLine: true,
                lineStyle: 'solid',
                lineSize: '1',
                lineColor: '#D9D9D9',
                showLabel: true,
                labelFontFamily: 'PingFang SC',
                labelFontSize: '12',
                labelColor: '#666',
                showTitleAndUnit: true,
                titleFontFamily: 'PingFang SC',
                titleFontSize: '12',
                titleColor: '#666',
                nameLocation: 'middle',
                nameRotate: 90,
                nameGap: 40,
                min: null,
                max: null
              },
              splitLine: {
                showHorizontalLine: true,
                horizontalLineStyle: 'dashed',
                horizontalLineSize: '1',
                horizontalLineColor: '#D9D9D9',
                showVerticalLine: false,
                verticalLineStyle: 'dashed',
                verticalLineSize: '1',
                verticalLineColor: '#D9D9D9'
              },
              legend: {
                showLegend: true,
                legendPosition: 'right',
                selectAll: true,
                fontFamily: 'PingFang SC',
                fontSize: '12',
                color: '#666'
              }
            }
          },
          dimetionsCount: 1,
          metricsCount: 1
        },
        render: '/mock/chart/chart1.js'
      },
      chart2: {
        deps: [],
        config: {
          chartInfo: {
            id: 101,
            name: 'chart2',
            title: '折线图',
            icon: 'icon-sstransfer',
            coordinate: 'cartesian',
            rules: [
              {
                dimension: 1,
                metric: [1, 9999]
              }
            ],
            dimetionAxis: 'col',
            data: {
              cols: {
                title: '列',
                type: 'category'
              },
              rows: {
                title: '行',
                type: 'category'
              },
              metrics: {
                title: '指标',
                type: 'value'
              },
              filters: {
                title: '筛选',
                type: 'all'
              },
              color: {
                title: '颜色',
                type: 'category'
              },
              tip: {
                title: '提示信息',
                type: 'value'
              }
            },
            style: {
              spec: {
                smooth: false,
                step: false
              },
              label: {
                showLabel: false,
                labelPosition: 'top',
                labelFontFamily: 'PingFang SC',
                labelFontSize: '12',
                labelColor: '#666'
              },
              xAxis: {
                showLine: true,
                lineStyle: 'solid',
                lineSize: '1',
                lineColor: '#D9D9D9',
                showLabel: true,
                labelFontFamily: 'PingFang SC',
                labelFontSize: '12',
                labelColor: '#666',
                showInterval: false,
                xAxisInterval: 0,
                xAxisRotate: 0
              },
              yAxis: {
                showLine: true,
                lineStyle: 'solid',
                lineSize: '1',
                lineColor: '#D9D9D9',
                showLabel: true,
                labelFontFamily: 'PingFang SC',
                labelFontSize: '12',
                labelColor: '#666',
                showTitleAndUnit: true,
                titleFontFamily: 'PingFang SC',
                titleFontSize: '12',
                titleColor: '#666',
                nameLocation: 'middle',
                nameRotate: 90,
                nameGap: 40,
                min: null,
                max: null
              },
              splitLine: {
                showHorizontalLine: true,
                horizontalLineStyle: 'dashed',
                horizontalLineSize: '1',
                horizontalLineColor: '#D9D9D9',
                showVerticalLine: false,
                verticalLineStyle: 'dashed',
                verticalLineSize: '1',
                verticalLineColor: '#D9D9D9'
              },
              legend: {
                showLegend: true,
                legendPosition: 'right',
                selectAll: true,
                fontFamily: 'PingFang SC',
                fontSize: '12',
                color: '#666'
              }
            }
          },
          dimetionsCount: 1,
          metricsCount: 1
        },
        render: (hooks, id) => {
          const iChart = echarts.init(document.getElementById(id))

          hooks.on('mount', (data, style) => {
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

          hooks.on('update', (newData, newStyle) => {
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
      },
      chart3: {
        deps: ['/mock/deps/data-set.js'],
        config: {
          chartInfo: {
            id: 102,
            name: 'chart3',
            title: '折线图',
            icon: 'icon-icos',
            coordinate: 'cartesian',
            rules: [
              {
                dimension: 1,
                metric: [1, 9999]
              }
            ],
            dimetionAxis: 'col',
            data: {
              cols: {
                title: '列',
                type: 'category'
              },
              rows: {
                title: '行',
                type: 'category'
              },
              metrics: {
                title: '指标',
                type: 'value'
              },
              filters: {
                title: '筛选',
                type: 'all'
              },
              color: {
                title: '颜色',
                type: 'category'
              },
              tip: {
                title: '提示信息',
                type: 'value'
              }
            },
            style: {
              spec: {
                smooth: false,
                step: false
              },
              label: {
                showLabel: false,
                labelPosition: 'top',
                labelFontFamily: 'PingFang SC',
                labelFontSize: '12',
                labelColor: '#666'
              },
              xAxis: {
                showLine: true,
                lineStyle: 'solid',
                lineSize: '1',
                lineColor: '#D9D9D9',
                showLabel: true,
                labelFontFamily: 'PingFang SC',
                labelFontSize: '12',
                labelColor: '#666',
                showInterval: false,
                xAxisInterval: 0,
                xAxisRotate: 0
              },
              yAxis: {
                showLine: true,
                lineStyle: 'solid',
                lineSize: '1',
                lineColor: '#D9D9D9',
                showLabel: true,
                labelFontFamily: 'PingFang SC',
                labelFontSize: '12',
                labelColor: '#666',
                showTitleAndUnit: true,
                titleFontFamily: 'PingFang SC',
                titleFontSize: '12',
                titleColor: '#666',
                nameLocation: 'middle',
                nameRotate: 90,
                nameGap: 40,
                min: null,
                max: null
              },
              splitLine: {
                showHorizontalLine: true,
                horizontalLineStyle: 'dashed',
                horizontalLineSize: '1',
                horizontalLineColor: '#D9D9D9',
                showVerticalLine: false,
                verticalLineStyle: 'dashed',
                verticalLineSize: '1',
                verticalLineColor: '#D9D9D9'
              },
              legend: {
                showLegend: true,
                legendPosition: 'right',
                selectAll: true,
                fontFamily: 'PingFang SC',
                fontSize: '12',
                color: '#666'
              }
            }
          },
          dimetionsCount: 1,
          metricsCount: 1
        },
        render: '/mock/chart/chart3.js'
      },
      chart4: {
        deps: [],
        config: {
          chartInfo: {
            id: 103,
            name: 'chart4',
            title: '折线图',
            icon: 'icon-flow',
            coordinate: 'cartesian',
            rules: [
              {
                dimension: 1,
                metric: [1, 9999]
              }
            ],
            dimetionAxis: 'col',
            data: {
              cols: {
                title: '列',
                type: 'category'
              },
              rows: {
                title: '行',
                type: 'category'
              },
              metrics: {
                title: '指标',
                type: 'value'
              },
              filters: {
                title: '筛选',
                type: 'all'
              },
              color: {
                title: '颜色',
                type: 'category'
              },
              tip: {
                title: '提示信息',
                type: 'value'
              }
            },
            style: {
              spec: {
                smooth: false,
                step: false
              },
              label: {
                showLabel: false,
                labelPosition: 'top',
                labelFontFamily: 'PingFang SC',
                labelFontSize: '12',
                labelColor: '#666'
              },
              xAxis: {
                showLine: true,
                lineStyle: 'solid',
                lineSize: '1',
                lineColor: '#D9D9D9',
                showLabel: true,
                labelFontFamily: 'PingFang SC',
                labelFontSize: '12',
                labelColor: '#666',
                showInterval: false,
                xAxisInterval: 0,
                xAxisRotate: 0
              },
              yAxis: {
                showLine: true,
                lineStyle: 'solid',
                lineSize: '1',
                lineColor: '#D9D9D9',
                showLabel: true,
                labelFontFamily: 'PingFang SC',
                labelFontSize: '12',
                labelColor: '#666',
                showTitleAndUnit: true,
                titleFontFamily: 'PingFang SC',
                titleFontSize: '12',
                titleColor: '#666',
                nameLocation: 'middle',
                nameRotate: 90,
                nameGap: 40,
                min: null,
                max: null
              },
              splitLine: {
                showHorizontalLine: true,
                horizontalLineStyle: 'dashed',
                horizontalLineSize: '1',
                horizontalLineColor: '#D9D9D9',
                showVerticalLine: false,
                verticalLineStyle: 'dashed',
                verticalLineSize: '1',
                verticalLineColor: '#D9D9D9'
              },
              legend: {
                showLegend: true,
                legendPosition: 'right',
                selectAll: true,
                fontFamily: 'PingFang SC',
                fontSize: '12',
                color: '#666'
              }
            }
          },
          dimetionsCount: 1,
          metricsCount: 1
        },
        render: (hooks, id) => {
          var margin = { top: 10, right: 40, bottom: 30, left: 30 },
            width = 450 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom

          // append the svg object to the body of the page
          var svG = d3
            .select('#' + id)
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr(
              'transform',
              'translate(' + margin.left + ',' + margin.top + ')'
            )

          // Create data
          var data = [
            { x: 10, y: 20 },
            { x: 40, y: 90 },
            { x: 80, y: 50 }
          ]

          // X scale and Axis
          var x = d3
            .scaleLinear()
            .domain([0, 100]) // This is the min and the max of the data: 0 to 100 if percentages
            .range([0, width]) // This is the corresponding value I want in Pixel
          svG
            .append('g')
            .attr('transform', 'translate(0,' + height + ')')
            .call(d3.axisBottom(x))

          // X scale and Axis
          var y = d3
            .scaleLinear()
            .domain([0, 100]) // This is the min and the max of the data: 0 to 100 if percentages
            .range([height, 0]) // This is the corresponding value I want in Pixel
          svG.append('g').call(d3.axisLeft(y))

          // Add 3 dots for 0, 50 and 100%
          svG
            .selectAll('whatever')
            .data(data)
            .enter()
            .append('circle')
            .attr('cx', function (d) {
              return x(d.x)
            })
            .attr('cy', function (d) {
              return y(d.y)
            })
            .attr('r', 7)

          hooks.on('mount', (data, style) => {})
          hooks.on('update', (newData, newStyle) => {})
          hooks.on('unmount', () => {})
        }
      },
      chart5: {
        deps: ['/mock/chart/chart5.css'],
        config: {
          chartInfo: {
            id: 104,
            name: 'chart5',
            title: '折线图',
            icon: 'icon-topic',
            coordinate: 'cartesian',
            rules: [
              {
                dimension: 1,
                metric: [1, 9999]
              }
            ],
            dimetionAxis: 'col',
            data: {
              cols: {
                title: '列',
                type: 'category'
              },
              rows: {
                title: '行',
                type: 'category'
              },
              metrics: {
                title: '指标',
                type: 'value'
              },
              filters: {
                title: '筛选',
                type: 'all'
              },
              color: {
                title: '颜色',
                type: 'category'
              },
              tip: {
                title: '提示信息',
                type: 'value'
              }
            },
            style: {
              spec: {
                smooth: false,
                step: false
              },
              label: {
                showLabel: false,
                labelPosition: 'top',
                labelFontFamily: 'PingFang SC',
                labelFontSize: '12',
                labelColor: '#666'
              },
              xAxis: {
                showLine: true,
                lineStyle: 'solid',
                lineSize: '1',
                lineColor: '#D9D9D9',
                showLabel: true,
                labelFontFamily: 'PingFang SC',
                labelFontSize: '12',
                labelColor: '#666',
                showInterval: false,
                xAxisInterval: 0,
                xAxisRotate: 0
              },
              yAxis: {
                showLine: true,
                lineStyle: 'solid',
                lineSize: '1',
                lineColor: '#D9D9D9',
                showLabel: true,
                labelFontFamily: 'PingFang SC',
                labelFontSize: '12',
                labelColor: '#666',
                showTitleAndUnit: true,
                titleFontFamily: 'PingFang SC',
                titleFontSize: '12',
                titleColor: '#666',
                nameLocation: 'middle',
                nameRotate: 90,
                nameGap: 40,
                min: null,
                max: null
              },
              splitLine: {
                showHorizontalLine: true,
                horizontalLineStyle: 'dashed',
                horizontalLineSize: '1',
                horizontalLineColor: '#D9D9D9',
                showVerticalLine: false,
                verticalLineStyle: 'dashed',
                verticalLineSize: '1',
                verticalLineColor: '#D9D9D9'
              },
              legend: {
                showLegend: true,
                legendPosition: 'right',
                selectAll: true,
                fontFamily: 'PingFang SC',
                fontSize: '12',
                color: '#666'
              }
            }
          },
          dimetionsCount: 1,
          metricsCount: 1
        },
        render: (hooks, id) => {
          const tdData = [1, 2, 3, 4, 5]
          const trNum = 5
          let trs = ''
          let thtr = ''
          for (let i = 0; i < trNum; i++) {
            let tds = ''
            let thds = ''
            tdData.forEach((v) => {
              tds += `<td>${v}</td>`
              thds += `<th>head${v}</th>`
            })
            trs += `<tr>${tds}</tr>`
            thtr = `<tr>${thds}</tr>`
          }
          const temp = `
            <table class="chart5-table">
              <thead>${thtr}</thead>
              <tbody>${trs}</tbody>
            </table>
          `
          hooks.on('mount', (data, style) => {
            const container = document.getElementById(id)
            container.innerHTML = temp
          })
          hooks.on('update', (newData, newStyle) => {
            console.log('f -> newData', newData)
            console.log('f -> newStyle', newStyle)
          })
          hooks.on('unmount', () => {})
        }
      }
    }
  }
}
