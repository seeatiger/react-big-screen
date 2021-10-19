// 右侧界面数据
module.exports = {
  'GET /api/rightPageData': {
    detailsList: [
      {
        title: '用源企业',
        number: 260,
        unit: '个',
      },
      {
        title: '放射源',
        number: 330,
        unit: '个',
      },
      
    ],
    browseCategories: {
      data: [782, 621.2, 322.1, 525.3, 265, 224],
      indicator: [
        {
          name: '食物',
          max: 1000,
        },
        {
          name: '娱乐',
          max: 1000,
        },
        {
          name: '运动',
          max: 1000,
        },
        {
          name: '家居',
          max: 1000,
        },
        {
          name: '机械',
          max: 1000,
        },
        {
          name: '学习',
          max: 1000,
        },
      ],
    },
    userIdentityCategory: {
      data: [
        {
          name: 'XX企业1',
          value: 100,
        },
        {
          name: 'XX企业2',
          value: 96,
        },
        {
          name: 'XX企业3',
          value: 95,
        },
        {
          name: 'XX企业4',
          value: 93,
        },
        {
          name: 'XX企业5',
          value: 80,
        },
      ],
    },
    offline: {
      feedback: [
        {
          title: '在线率',
          number: 100,
        },
        {
          title: '正常率',
          number: 90,
        },
        {
          title: '在库率',
          number: 95,
        },
      ],
      offlinePortalData: {
        data1: [80, 152, 101, 134, 90, 130],
        data2: [120, 182, 191, 210, 170, 110],
        data3: [110, 132, 201, 154, 150, 80],
        data4: [90, 142, 161, 114, 190, 170],
        xData: ['9:00', '12:00', '15:00', '18:00', '21:00', '00:00'],
        barData: [32.2, 60.0, 32.6, 36.4, 53.3, 35.0],
      },
    },
  },
};
