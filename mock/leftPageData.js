// 左侧界面数据
module.exports = {
  'GET /api/leftPageData': {
    accessFrequency: 1500,
    peakFlow: 300,
    trafficSitua: {
      timeList: ['17日','18日', '19日', '20日', '21日', '22日', '23日'],
      inData: [4,6, 4, 3, 7, 1, 2],
    },
    userSitua: {
      header: ['放射源', '时间', '状态'],
      data: [
        ['源1', '2021-09-01 12:00:00', '在线'],
        ['源2', '2021-09-01 12:00:00', '离线'],
        ['源3', '2021-09-01 12:00:00', '在线'],
        ['源4', '2021-09-01 12:00:00', '在线'],
        ['源5', '2021-09-01 12:00:00', '在线'],
        ['源6', '2021-09-01 12:00:00', '离线'],
        ['源7', '2021-09-01 12:00:00', '在线'],
        ['源8', '2021-09-01 12:00:00', '在线'],
        ['源9', '2021-09-01 12:00:00', '离线'],
        ['源11', '2021-09-01 12:00:00', '离线'],
        ['源12', '2021-09-01 12:00:00', '离线'],
        ['源13', '2021-09-01 12:00:00', '离线'],
      ],
    },
  },
};
