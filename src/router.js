import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('./views/CreateResume.vue')
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('./views/DownloadResume.vue')
    },
    // //简历路由
    {
      path: '/cool',
      name: 'cool',
      component: () => import('./resumes/cool.vue')
    },
    {
      path: '/creative',
      name: 'creative',
      component: () => import('./resumes/creative.vue')
    },
    {
      path: '/material-dark',
      name: 'material-dark',
      component: () => import('./resumes/material-dark.vue')
    },
    {
      path: '/left-right',
      name: 'left-right',
      component: () => import('./resumes/left-right.vue')
    },
    {
      path: '/left-right-rtl',
      name: 'left-right-rtl',
      component: () => import('./resumes/left-right-rtl.vue')
    },
    {
      path: '/side-bar',
      name: 'side-bar',
      component: () => import('./resumes/side-bar.vue')
    },
    {
      path: '/side-bar-rtl',
      name: 'side-bar-rtl',
      component: () => import('./resumes/side-bar-rtl.vue')
    },
    {
      path: '/oblique',
      name: 'oblique',
      component: () => import('./resumes/oblique.vue')
    }
    
   
  ]
})
