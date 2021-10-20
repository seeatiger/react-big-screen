import echarts from 'echarts/lib/echarts';
import 'echarts/map/js/china';
import dianxinImage from "../../../assets/images/fs1.png";

//  地图数据
const mapData = {
  citys1: [
    {
      name: '企业1',
      value: [118.796877, 32.160255, 2],
      // type: 'image',
      // symbol:'../../../assets/images/fs.png',
      symbolSize: 12,
    },
    {
      name: '企业1',
      value: [118.996877, 32.460255, 2],
      // type: 'image',
      // symbol:'../../../assets/images/fs.png',
      symbolSize: 12,
    },
    {
      name: '企业1',
      value: [118.996877, 31.860255, 2],
      // type: 'image',
      // symbol:'../../../assets/images/fs.png',
      symbolSize: 12,
    },
     {
      name: '企业1',
      value: [118.496877, 32.060255, 2],
      // type: 'image',
      // symbol:'../../../assets/images/fs.png',
      symbolSize: 12,
    },
     {
      name: '企业1',
      value: [118.896877, 31.960255, 2],
      // type: 'image',
      // symbol:'../../../assets/images/fs.png',
      symbolSize: 12,
    },
    {
      name: '企业1',
      value: [118.956877, 31.560255, 2],
      // type: 'image',
      // symbol:'../../../assets/images/fs.png',
      symbolSize: 12,
    },
  ],
  citys: [
    {
      name: '企业1',
      value: [118.796877, 32.060255, 2],
      // type: 'image',
      // symbol:'../../../assets/images/fs.png',
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    
    {
      name: '企业2',
      value: [118.760232, 32.401707, 17],
      
      // symbol:dianxinImage,
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
    
     {
      name: '企业3',
      value: [119.03232, 32.041707, 17],
      
      // symbol:dianxinImage,
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
     {
      name: '企业4',
      value: [118.453232, 32.07707, 17],
      // symbol:dianxinImage,
      symbolSize: 12,

      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
     {
      name: '企业5',
      value: [118.965232, 31.32707, 17],
      // symbol:dianxinImage,
      symbolSize: 12,
      itemStyle: {
        normal: {
          color: '#F58158',
        },
      },
    },
  ]
};

export const mapOptions = (params) => ({

  mapData:mapData.citys,

  title: {
    show: false,
    text: '',
    left: 'center',
    textStyle: {
      color: '#fff',
    },
  },
  legend: {
    show: false,
  },
  tooltip: {
      show: true,
      backgroundColor:'transparent',
      textStyle:{
        color:'#fff',
        fontSize:10,
        height:25,
        lineHeight:25
      },
      formatter: function (obj) {
        return `<div style="background: rgba(7,36,101,.9);width:210px;height:100px;padding:0px 0px;">
                    <div style="background: #F58158;width:210px;height:30px;padding-left:10px;padding-top:1px;padding-bottom:1px">
                        ${obj.name}
                    </div>
                    <div style="width:100px;height:20px;padding-left:10px">
                        2021年8点30分XX源出现异常。
                    </div>
                </div>`
                
        }
  },
  geo: {
    nameMap: {
      China: '中国',
      Nanjing : '南京'
    },
    map: '南京',
    
    label: {
      normal:{
        show: true,
        color:"#FFFFFF",
      },
      emphasis: {
        show: true,
        color:"#FFFFFF",
      },
    },
    zoom: 1.2,
    itemStyle: {
      normal: {
        // borderColor: 'rgba(255,209,163, .5)', //区域边框颜色
        borderColor: 'rgba(27,247,250,.5)',
        //areaColor: 'rgba(73,86,166,.1)', //区域颜色
        areaColor: 'rgba(7,36,101,.5)', 
        borderWidth: 1, //区域边框宽度
        shadowBlur: 5,
        shadowColor: 'rgba(7,36,101,.7)',
        // areaColor: "#013C62",
        // shadowColor:"#01273F",
        shadowOffsetX:1,
        shadowOffsetY:2
      },
      emphasis: {
        borderColor: '#FFD1A3',
        areaColor: 'rgba(102,105,240,.3)',
        borderWidth: 1,
        shadowBlur: 5,
        shadowColor: 'rgba(135,138,255,.5)',
      },
    },
    regions: [      //对不同的区块进行着色
				            {
				              name: '鼓楼区', //区块名称
				              itemStyle: {
				                  normal: {
				                      areaColor: '#281fe1'
				                  }
				              }
				            },{
				              name: '建邺区', //区块名称
				              itemStyle: {
				                  normal: {
				                      areaColor: '#193094'
				                  }
				              }
				            },{
				              name: '六合区', //区块名称
				              itemStyle: {
				                  normal: {
				                      areaColor: '#4210c2'
				                  }
				              }
				            },{
				              name: '秦淮区', //区块名称
				              itemStyle: {
				                  normal: {
				                      areaColor: '#4210c2'
				                  }
				              }
				            },{
				              name: '江宁区', //区块名称
				              itemStyle: {
				                  normal: {
				                      areaColor: '#009900'
				                  }
				              }
				            },{
				              name: '溧水区', //区块名称
				              itemStyle: {
				                  normal: {
				                      areaColor: '#1f95e1'
				                  }
				              }
				            },{
				            name: '高淳区',
				            itemStyle: {
				                normal: {
				                    areaColor: '#1042c2'
				                }
				            }
                  },{
				            name: '栖霞区',
				            itemStyle: {
				                normal: {
				                    areaColor: '#1f95e1'
				                }
				            }
				        },{
				            name: '玄武区',
				            itemStyle: {
				                normal: {
				                    areaColor: '#1042c2'
				                }
				            }
				        },{
				            name: '雨花台区',
				            itemStyle: {
				                normal: {
				                    areaColor: '#1f95e1'
				                }
				            }
				        },{
				            name: '浦口区',
				            itemStyle: {
				                normal: {
				                    areaColor: '#1042c2'
				                }
				            }
				        }
              
              ]
  },
  series: [
    
    {
      name: '地点',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      // rippleEffect: {
      //   brushType: 'stroke',
      // },
      label: {
        emphasis: {
          show: true,
          position: 'right',
          formatter: '{b}',
        },
      },
      symbolSize: 10,
      showEffectOn: 'render',
      itemStyle: {
        normal: {
          // image: '../../assets/images/fs.png',
          color: '#46bee9',
        },
      },
    

      data: mapData.citys,
    },
    {
      name: '地点',
      type: 'custom',
      coordinateSystem: 'geo',
      zlevel: 2,
      // rippleEffect: {
      //   brushType: 'stroke',
      // },
      label: {
        emphasis: {
          show: true,
          position: 'right',
          formatter: '{b}',
        },
      },
      symbolSize: 10,
      showEffectOn: 'render',
      itemStyle: {
        normal: {
          // image: '../../assets/images/fs.png',
          color: '#46bee9',
        },
      },
      renderItem: function(params,api) {
        console.error("params")
        return  {
          type: 'image',
          // coordinateSystem: "geo",
          style: {
            image: dianxinImage,
            x: api.coord([
                mapData.citys1[params.dataIndex].value[0], mapData.citys1[params.dataIndex].value[1]
            ])[0],
            y: api.coord([
                mapData.citys1[params.dataIndex].value[0], mapData.citys1[params.dataIndex].value[1]
            ])[1],
            width: 20,
            height: 19,
          }
        }
      },
      
      // markPoint: { //图表标注。
      //               label: {
      //                   normal: {
      //                       show: true,
      //                   },
      //                   emphasis: {
      //                       show: true,
      //                   }
      //               },
      //               itemStyle: {
      //                   normal: {
      //                       color: 'rgba(72,150,128,1)'
      //                   }
      //               },
      //             },
      data: mapData.citys1,
    },
  ],
});
