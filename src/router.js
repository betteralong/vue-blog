import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about/about.vue')
    }, {
      path: '/article',
      name: 'article',
      component: () => import('@/views/article/article.vue')
    }, {
      path: '/articledetail',
      name: 'articledetail',
      component: () => import('@/views/article/articleDetail.vue')
    }, {
      path: '/production',
      name: 'production',
      component: () => import('@/views/production/production.vue')
    }, {
      path: '/timeline',
      name: 'timeline',
      component: () => import('@/views/timeline/timeline.vue')
    }, {
      path: '/link',
      name: 'link',
      component: () => import('@/views/link/link.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
