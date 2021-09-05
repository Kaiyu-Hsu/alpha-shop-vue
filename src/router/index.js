import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    redirect: '/step1',
    children: [
      {
        path: 'step1', //url = /step1
        name: 'step1',
        component: () => import('../components/FormStep1.vue'),
      },
      {
        path: 'step2',
        name: 'step2',
        component: () => import('../components/FormStep2.vue'),
      },
      {
        path: 'step3',
        name: 'step3',
        component: () => import('../components/FormStep3.vue'),
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
