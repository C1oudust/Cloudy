export default {
  formatDataTime(date) {
    let old = new Date(date);
    let now = new Date();
    // let d = old.getTime();
    let h = old.getHours();
    let m = old.getMinutes();
    let Y = old.getFullYear();
    let M = old.getMonth();
    let D = old.getDate();

    // let nd = now.getTime();
    // let nh = now.getHours();
    // let nm = now.getMinutes();
    let nY = now.getFullYear();
    let nM = now.getMonth();
    let nD = now.getDate();

    // 当天时间
    if (D === nD && Y === nY && M === nM) {
      if (h < 10) {
        h = '0' + h;
      }
      if (m < 10) {
        m = '0' + m;
      }
      return h + ':' + m;
    }

    // 昨天时间
    if (D + 1 === nD && Y === nY && M === nM) {
      if (h < 10) {
        h = '0' + h;
      }
      if (m < 10) {
        m = '0' + m;
      }
      return '昨天' + h + ':' + m;
    }

    //昨天之前
    else {
      return Y + '/' + parseInt(M + 1) + '/' + D;
    }
  },
};
