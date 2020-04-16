export default {
  // 个人信息表
  me: function() {
    let me = {
      id: 1,
      nick: '云尘',
      imgUrl: 'one.jpg',
      remark: '云尘',
      sign: '我是云尘，一个热爱生活的文艺青年。初次见面，请多关照！'
    };

    return me;
  },
  // 全部用户表
  users: function() {
    let friendArr = [
      {
        id: 1,
        imgUrl: 'six.jpg',
        tip: 2,
        name: '小明',
        email: 'xiaoming@cloudy.com',
        time: new Date(),
        content: '今天天气不错啊'
      },
      {
        id: 2,
        imgUrl: 'four.jpg',
        tip: 1,
        name: '小刚',
        email: 'xiaogang@cloudy.com',
        time: new Date(),
        content: '出来玩吗？'
      },
      {
        id: 3,
        imgUrl: 'two.jpg',
        tip: 9,
        name: '小红',
        email: 'xiaohong@cloudy.com',
        time: new Date(),
        content: '要不要去看电影？'
      },
      {
        id: 4,
        imgUrl: 'three.jpg',
        tip: 1,
        name: '小娇',
        email: 'xiaojiao@cloudy.com',
        time: new Date(),
        content: '今天你有约了嘛？'
      },
      {
        id: 5,
        imgUrl: 'five.jpg',
        tip: 3,
        name: '小玉',
        email: 'xiaoyu@cloudy.com',
        time: new Date(),
        content: '门口新开了家奶茶店，很不错哦！'
      }
    ];
    return friendArr;
  },

  // 好友表
  friends: function() {
    let isFriend = [
      {
        user: 1,
        friend: 2
      },
      {
        user: 1,
        friend: 4
      },
      {
        user: 1,
        friend: 5
      }
    ];
    return isFriend;
  }
};
