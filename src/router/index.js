import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Layout from '../components/Layout.vue'
import CategoriesView from '../views/CategoriesView.vue'
import CitiesView from '../views/CitiesView.vue'
import CommunesView from '../views/CommunesView.vue'
import DirectionsView from '../views/DirectionsView.vue'
import ImagesView from '../views/ImagesView.vue'
import ProductsView from '../views/ProductsView.vue'
import RegionsView from '../views/RegionsView.vue'
import RolesView from '../views/RolesView.vue'
import ShopsView from '../views/ShopsView.vue'
import StatesView from '../views/StatesView.vue'
import UsersView from '../views/UsersView.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path:'/home',
    name: 'Home',
    component: Layout
  },  
  {
    path:'/categories',
    name:'Categories',
    component: CategoriesView
  },
  {
    path:'/cities',
    name:'Cities',
    component: CitiesView
  },
  {
    path:'/communes',
    name:'Communes',
    component: CommunesView
  },
  {
    path:'/directions',
    name:'Directions',
    component: DirectionsView
  },
  {
    path:'/images',
    name:'Images',
    component: ImagesView
  },
  {
    path:'/products',
    name:'Products',
    component: ProductsView
  },
  {
    path:'/regions',
    name:'Regions',
    component: RegionsView
  },
  {
    path:'/roles',
    name:'Roles',
    component: RolesView
  },
  {
    path:'/shops',
    name:'Shops',
    component: ShopsView
  },
  {
    path:'/states',
    name:'States',
    component: RolesView
  },
  {
    path:'/users',
    name:'Users',
    component: UsersView
  }, 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
