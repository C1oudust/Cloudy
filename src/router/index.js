import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '*', // 404 页面
  //   component: () => import('./notFind') // 或者使用component也可以的
  // },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/Search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/UserDetail/:id?',
    name: 'UserDetail',
    component: () => import('../views/UserDetail.vue')
  },
  {
    path: '/UserDetailMore',
    name: 'UserDetailMore',
    component: () => import('../views/UserDetailMore.vue')
  },
  {
    path: '/Request',
    name: 'Request',
    component: () => import('../views/Request.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
