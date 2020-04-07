export default {
  friends: function() {
    let friendArr = [
      {
        id: 1,
        imgUrl: 'six.jpg',
        tip: 2,
        name: '小明',
        time: new Date(),
        content: '今天天气不错啊',
      },
      {
        id: 2,
        imgUrl: 'four.jpg',
        tip: 1,
        name: '小刚',
        time: new Date(),
        content: '出来玩吗？',
      },
      {
        id: 3,
        imgUrl: 'two.jpg',
        tip: 9,
        name: '小红',
        time: new Date(),
        content: '要不要去看电影？',
      },
      {
        id: 4,
        imgUrl: 'three.jpg',
        tip: 1,
        name: '小娇',
        time: new Date(),
        content: '今天你有约了嘛？',
      },
      {
        id: 5,
        imgUrl: 'five.jpg',
        tip: 3,
        name: '小玉',
        time: new Date(),
        content: '门口新开了家奶茶店，很不错哦！',
      },
    ];
    return friendArr;
  },
};
