import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import { authReq } from '../api/authRequest';
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/write',
    name: 'Write',
    component: () => import(/* webpackChunkName: "about" */ '../views/Write.vue'),
    beforeEnter: function (to, from, next) {
      authReq('/post/write',()=>{
        next();
      },()=>{
        alert('로그인이 필요합니다.')
      });
      
    }
  },
  {
    name: "catch-all",
    path: "*",
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
