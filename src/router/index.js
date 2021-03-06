import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SubmissionSuccess from '../components/SubmissionSuccess'
import SubmissionFail from '../components/SubmissionFail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/Portfolio.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/contact-me',
    redirect: '/contact'
  },
  {
    path: '/portfolio/:id',
    name: 'project',
    component: () => import('../views/Project.vue')
  },
  {
    path: '/success',
    name: 'success',
    component: SubmissionSuccess
  },
  {
    path: '/404',
    name: '404',
    component: SubmissionFail
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
