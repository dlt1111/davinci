function f() {
  return {
    commonDeps: ['http://localhost:5002/mock/echarts.min.js', 'https://gw.alipayobjects.com/os/lib/antv/g2/4.0.14/dist/g2.min.js'],
    modules: {
      chart1: {
        deps: [],
        config: {
          chartInfo: {
            id: 100,
            name: 'chart1',
            title: '折线图',
            icon: 'icon-chart-line',
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
            icon: 'icon-chart-line',
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
      },
      chart3: {
        deps: ['/mock/data-set.js'],
        config: {
          chartInfo: {
            id: 102,
            name: 'chart3',
            title: '折线图',
            icon: 'icon-chart-line',
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
          const chart = new G2.Chart({
            container: id,
            autoFit: true,
            height: 500,
            padding: [55, 20]
          });
          chart.tooltip({
            showTitle: false,
            showMarkers: false,
            shared: true,
          });
          // 同步度量
          chart.scale({
            longitude: {
              sync: true
            },
            latitude: {
              sync: true
            }
          });
          chart.axis(false);
          chart.legend('trend', {
            position: 'left'
          });
          // 可视化用户数据
          const userData = [
            { name: 'Russia', value: 86.8 },
            { name: 'China', value: 106.3 },
            { name: 'Japan', value: 94.7 },
            { name: 'Mongolia', value: 98 },
            { name: 'Canada', value: 98.4 },
            { name: 'United Kingdom', value: 97.2 },
            { name: 'United States of America', value: 98.3 },
            { name: 'Brazil', value: 96.7 },
            { name: 'Argentina', value: 95.8 },
            { name: 'Algeria', value: 101.3 },
            { name: 'France', value: 94.8 },
            { name: 'Germany', value: 96.6 },
            { name: 'Ukraine', value: 86.3 },
            { name: 'Egypt', value: 102.1 },
            { name: 'South Africa', value: 101.3 },
            { name: 'India', value: 107.6 },
            { name: 'Australia', value: 99.9 },
            { name: 'Saudi Arabia', value: 130.1 },
            { name: 'Afghanistan', value: 106.5 },
            { name: 'Kazakhstan', value: 93.4 },
            { name: 'Indonesia', value: 101.4 }
          ];
          hooks.on('mount', (data) => {
            console.log('mount')
            fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/world.geo.json')
            .then(res => res.json())
            .then(mapData => {
              // 绘制世界地图背景
              const ds = new DataSet();
              const worldMap = ds.createView('back')
                .source(mapData, {
                  type: 'GeoJSON'
                });
              const worldMapView = chart.createView();
              worldMapView.data(worldMap.rows);
              worldMapView.tooltip(false);
              worldMapView.polygon().position('longitude*latitude').style({
                fill: '#fff',
                stroke: '#ccc',
                lineWidth: 1
              });

              const userDv = ds.createView()
                .source(userData)
                .transform({
                  geoDataView: worldMap,
                  field: 'name',
                  type: 'geo.region',
                  as: ['longitude', 'latitude']
                })
                .transform({
                  type: 'map',
                  callback: obj => {
                    obj.trend = (obj.value > 100) ? '男性更多' : '女性更多';
                    return obj;
                  }
                });
              const userView = chart.createView();
              userView.data(userDv.rows);
              userView.scale({
                trend: {
                  alias: '每100位女性对应的男性数量'
                }
              });
              userView.polygon()
                .position('longitude*latitude')
                .color('trend', ['#F51D27', '#0A61D7'])
                .tooltip('name*trend')
                .style({
                  fillOpacity: 0.85
                })
                .animate({
                  leave: {
                    animation: 'fade-out'
                  }
                });
              userView.interaction('element-active');
              chart.render();
            });
          })

          hooks.on('update', (newData) => {
            console.log('update')
            chart.render();
          })

          hooks.on('unmount', () => {
            console.log('unmount')
          })
        }
      }
    }
  }
}
