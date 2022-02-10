import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Instruction',
    component: () => import(/* webpackChunkName: "about" */ '../views/Instruction.vue')
  },
  {
    path: '/list',
    name: 'WatchList',
    component: () => import(/* webpackChunkName: "about" */ '../views/WatchList.vue')
  },
  {
    path: '/token/:id',
    name: 'Token',
    component: () => import('../views/Token.vue')
  },
  {
    path: '/ido',
    name: 'UpcomingIDO',
    component: () => import('../views/UpcomingIDO.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
