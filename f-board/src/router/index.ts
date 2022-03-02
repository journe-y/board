import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Read from '../views/Read.vue'
import { authReq } from '../api/authRequest';
import { PostDetail } from '@/api/type'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Main',
    component: Main
    //component: () => import('../views/Main.vue'),
  },
  {
    path: '/write',
    name: 'Write',
    component: () => import('../views/Write.vue'),
    beforeEnter: function (to, from, next) {
      authReq('/post/write', () => {
        next();
      }, () => {
        alert('로그인이 필요합니다.')
      });

    }
  },
  {
    path: '/modify/:id',
    name: 'Modify',
    props: true,
    component: () => import('../views/Write.vue'),
    beforeEnter: function (to, from, next) {
      authReq(`/post${to.path}`, ({ data }) => {
        to.params.data = data.post;
        next();
      }, () => {
        alert('본인의 글만 수정 가능합니다.')
      })
    }
  },
  {
    path: `/read/:id`,
    name: 'Read',
    component: Read,
    props: true
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
