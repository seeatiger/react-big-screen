import request from '../utils/request';

// 获取左侧界面数据请求
export const getLeftPageData = async () => {
  // return request('/api/leftPageData').then(response => {
  //   return response.data;
  // });
  let data = {
    accessFrequency: 1500,
    peakFlow: 300,
    trafficSitua: {
      timeList: ['17日','18日', '19日', '20日', '21日', '22日', '23日'],
      inData: [4,6, 4, 3, 7, 1, 2],
    },
    userSitua1: {
      //header: ['放射源', '时间', '状态'],
      data: [
        ['源1', '2021-09-01 12:00:00', '离线'],
        ['源2', '2021-09-01 12:00:00', '离线'],
        ['源3', '2021-09-01 12:00:00', '离线'],
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
    userSitua: {
      // header: ['放射源', '时间', '状态'],
      data: [
        ['<span style="color:red;">源1</span>', '<span style="color:red;">2021-09-01 12:00:00</span>', '<span style="color:red;">离线</span>'],
        ['<span style="color:red;">源2</span>', '<span style="color:red;">2021-09-01 12:00:00</span>', '<span style="color:red;">离线</span>'],
        ['源3', '2021-09-01 12:00:00', '在线'],
        ['源4', '2021-09-01 12:00:00', '在线'],
        ['源5', '2021-09-01 12:00:00', '在线'],
        ['源6', '2021-09-01 12:00:00', '在线'],
        ['源7', '2021-09-01 12:00:00', '在线'],
        ['源8', '2021-09-01 12:00:00', '在线'],
        ['源9', '2021-09-01 12:00:00', '在线'],
        ['源10', '2021-09-01 12:00:00', '在线'],
        ['<span style="color:red;">源1</span>', '<span style="color:red;">2021-09-01 12:00:00</span>', '<span style="color:red;">离线</span>'],
        ['<span style="color:red;">源2</span>', '<span style="color:red;">2021-09-01 12:00:00</span>', '<span style="color:red;">离线</span>'],
        ['源11', '2021-09-01 12:00:00', '在线'],
        ['源12', '2021-09-01 12:00:00', '在线'],
        ['源13', '2021-09-01 12:00:00', '在线'],
        ['源14', '2021-09-01 12:00:00', '在线'],
        ['源15', '2021-09-01 12:00:00', '在线'],
        ['源16', '2021-09-01 12:00:00', '在线'],
        ['源17', '2021-09-01 12:00:00', '在线'],
        ['源18', '2021-09-01 12:00:00', '在线'],
      ],
      rowNum:3
    },
  };
  return data;
};

// 获取中间界面数据请求
export const getCenterPageData = async () => {
  // return request('/api/centerPageData').then(response => {
  //   return response.data;
  // });
  let data = {
    detailsList: [
      {
        title: '图像转化流量',
        number: 260,
        unit: '点击/张',
      },
      {
        title: '视频转化流量',
        number: 330,
        unit: '点击/个',
      },
      {
        title: '公众号流量',
        number: 62356,
        unit: '点击/篇',
      },
      {
        title: '安全服务流量',
        number: 5453,
        unit: '攻击/小时',
      },
      {
        title: '金融流量',
        number: 4.65,
        unit: ' 万/小时 ',
      },
      {
        title: '通信流量',
        number: 1250,
        unit: 'M /分',
      },
    ],
    mapData: {
      moveLines: [
        
      ],
      points:[

      ]
    },
  }
  return data;
};

// 获取右侧界面数据请求
export const getRightPageData = async () => {
  // return request('/api/rightPageData').then(response => {
  //   return response.data;
  // });
  let data = {
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
  }
  return data
};
