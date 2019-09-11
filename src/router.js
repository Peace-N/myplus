import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Videos from './views/Videos'
import Prep from './views/Prep'
import Roadmap from './views/Roadmap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/videos',
      name: 'videos',
      component: Videos
    },
    {
      path: '/know-your-prep',
      name: 'know-your-prep',
      component: Prep
    },
    {
      path: '/she-conquers-roadmaps',
      name: 'she-conquers-roadmaps',
      component: Roadmap
    }
  ]
})
