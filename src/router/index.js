import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Case from '../views/Case.vue'
import Map from '../views/Map.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/case',
    name: 'Case',
    component: Case
  },
  {
    path: '/map',
    name: 'Map',
    component: Map
  }
  

]

const router = new VueRouter({
  routes
})

export default router
