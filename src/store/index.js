import Vue from 'vue';
import Vuex from 'vuex';

// import state from './state';
// import mutations from './mutations';
// import actions from './actions';
import data from '../common/js/data';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    me: 1,
    userData: {},
    userArr: []
  },
  mutations: {
    searchUser(state, e) {
      let arr = data.users();
      let exp = eval('/' + e + '/g');
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].name.search(e) != -1 || arr[i].email.search(e) != -1) {
          this.commit('isFriend', arr[i]);
          arr[i].imgUrl = 'static/img/' + arr[i].imgUrl;
          arr[i].name = arr[i].name.replace(
            exp,
            "<span style='color:#4AAAFF;'>" + e + '</span>'
          );
          arr[i].email = arr[i].email.replace(
            exp,
            "<span style='color:#4AAAFF;'>" + e + '</span>'
          );

          state.userArr.push(arr[i]);
        }
      }
    },
    isFriend(state, e) {
      let isFriend = 0;
      let friend = data.friends();
      friend.forEach(item => {
        if (item.friend == e.id) isFriend = 1;
      });
      e.isFriend = isFriend;
    },
    getUserData(state, e) {
      if (e == data.me().id) {
        state.userData = data.me();
      }
    },
    empty(state) {
      state.userArr = [];
    }
  },
  actions: {},
  modules: {}
});
