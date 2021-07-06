import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/members',
    name: 'Members',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Members" */ '../views/Members.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Projects" */ '../views/Projects.vue')
  },
  {
    path: '/forum',
    name: 'Forum',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Forum" */ '../views/Forum.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
