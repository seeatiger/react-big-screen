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
      value: [118.760232, 32.001707, 17],
      
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
      value: [118.83232, 32.041707, 17],
      
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
      value: [118.765232, 32.02707, 17],
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

    zoom: 1.3,
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
        shadowOffsetY:2,
        labelColor:"#013C62",
      },
      emphasis: {
        borderColor: '#FFD1A3',
        areaColor: 'rgba(102,105,240,.3)',
        borderWidth: 1,
        shadowBlur: 5,
        shadowColor: 'rgba(135,138,255,.5)',
      },
    },
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
    // {
    //   name: '地点',
    //   type: 'custom',
    //   coordinateSystem: 'geo',
    //   zlevel: 2,
    //   // rippleEffect: {
    //   //   brushType: 'stroke',
    //   // },
    //   label: {
    //     emphasis: {
    //       show: true,
    //       position: 'right',
    //       formatter: '{b}',
    //     },
    //   },
    //   symbolSize: 10,
    //   showEffectOn: 'render',
    //   itemStyle: {
    //     normal: {
    //       // image: '../../assets/images/fs.png',
    //       color: '#46bee9',
    //     },
    //   },
    //   renderItem: function(params,api) {
    //     console.error("params")
    //     return  {
    //       type: 'image',
    //       // coordinateSystem: "geo",
    //       style: {
    //         image: dianxinImage,
    //         x: api.coord([
    //             mapData.citys1[params.dataIndex].value[0], mapData.citys1[params.dataIndex].value[1]
    //         ])[0],
    //         y: api.coord([
    //             mapData.citys1[params.dataIndex].value[0], mapData.citys1[params.dataIndex].value[1]
    //         ])[1],
    //         width: 20,
    //         height: 19,
    //       }
    //     }
    //   },
    //   data: mapData.citys1,
    // },
  ],
});
