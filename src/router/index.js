import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'الرئيسيه',
    component: HomeView
  },
  {
    path: '/AboutMe',
    name: 'AboutMe', 
    component: () => import('../views/AboutMe.vue')
  },
  {
    path :'/ProjectPage',
    name:'ProjectPage' ,
    component: () => import('../views/ProjectPage.vue')

  },
  {
    path :'/SkilsPage',
    name:'SkilsPage' ,
    component: () => import('../views/SkilsPage.vue')

  },
  {
    path :'/ContactPage',
    name:'ContactPage' ,
    component: () => import('../views/ContactPage.vue')

  }
  ,
  {
    path :'/ContactPage',
    name:' ContactPage' ,
    component: () => import('../views/ContactPage.vue')

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
