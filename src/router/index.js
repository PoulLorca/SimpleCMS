import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Layout from '../components/Layout.vue'

import CategoriesView from '../views/Categories/CategoriesView.vue'
import NewCategory from '../views/Categories/NewCategory.vue'
import EditCategory from '../views/Categories/EditCategory.vue'

import CitiesView from '../views/Cities/CitiesView.vue'
import NewCity from '../views/Cities/NewCity.vue'
import EditCity from '../views/Cities/EditCity.vue'

import CommunesView from '../views/Communes/CommunesView.vue'
import NewCommune from '../views/Communes/NewCommune.vue'
import EditCommune from '../views/Communes/EditCommune.vue'

import DirectionsView from '../views/Directions/DirectionsView.vue'
import NewDirection from '../views/Directions/NewDirection.vue'
import EditDirection from '../views/Directions/EditDirection.vue'

import ImagesView from '../views/Images/ImagesView.vue'
import NewImage from '../views/Images/NewImage.vue'
import EditImage from '../views/Images/EditImage.vue'

import ProductsView from '../views/Products/ProductsView.vue'
import NewProduct from '../views/Products/NewProduct.vue'
import EditProduct from '../views/Products/EditProduct.vue'

import RegionsView from '../views/Regions/RegionsView.vue'
import NewRegion from '../views/Regions/NewRegion.vue'
import EditRegion from '../views/Regions/EditRegion.vue'

import RolesView from '../views/Roles/RolesView.vue'
import NewRole from '../views/Roles/NewRole.vue'
import EditRole from '../views/Roles/EditRole.vue'

import ShopsView from '../views/Shops/ShopsView.vue'
import NewShop from '../views/Shops/NewShop.vue'
import EditShop from '../views/Shops/EditShop.vue'

import StatesView from '../views/States/StatesView.vue'
import NewState from '../views/States/NewState.vue'
import EditState from '../views/States/EditState.vue'

import UsersView from '../views/Users/UsersView.vue';
import NewUser from '../views/Users/NewUser.vue'
import EditUser from '../views/Users/EditUser.vue'

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
    path:'/newcategory',
    name:'NewCategory',
    component: NewCategory
  },
  {
    path:'/editcategory/:id',
    name:'EditCategory',
    component: EditCategory
  },
  {
    path:'/cities',
    name:'Cities',
    component: CitiesView
  },
  {
    path:'/newcity',
    name:'NewCity',
    component: NewCity
  },
  {
    path:'/editcity/:id',
    name:'EditCity',
    component: EditCity
  },
  {
    path:'/communes',
    name:'Communes',
    component: CommunesView
  },
  {
    path:'/newcommune',
    name:'NewCommune',
    component: NewCommune
  },
  {
    path:'/editcommune/:id',
    name:'EditCommune',
    component: EditCommune
  },
  {
    path:'/directions',
    name:'Directions',
    component: DirectionsView
  },
  {
    path:'/newdirection',
    name:'NewDirection',
    component: NewDirection
  },
  {
    path:'/editdirection/:id',
    name:'EditDirection',
    component: EditDirection
  },
  {
    path:'/images',
    name:'Images',
    component: ImagesView
  },
  {
    path:'/newimage',
    name:'NewImage',
    component: NewImage
  },
  {
    path:'/editimage/:id',
    name:'EditImage',
    component: EditImage
  },
  {
    path:'/products',
    name:'Products',
    component: ProductsView
  },
  {
    path:'/newproduct',
    name:'NewProduct',
    component: NewProduct
  },
  {
    path:'/editproduct/:id',
    name:'EditProduct',
    component: EditProduct
  },
  {
    path:'/regions',
    name:'Regions',
    component: RegionsView
  },
  {
    path:'/newregion',
    name:'NewRegion',
    component: NewRegion
  },
  {
    path:'/editregion/:id',
    name:'EditRegion',
    component: EditRegion
  },
  {
    path:'/roles',
    name:'Roles',
    component: RolesView
  },
  {
    path:'/newrole',
    name:'NewRole',
    component: NewRole
  },
  {
    path:'/editrole/:id',
    name:'EditRole',
    component: EditRole
  },
  {
    path:'/shops',
    name:'Shops',
    component: ShopsView
  },
  {
    path:'/newshop',
    name:'NewShop',
    component: NewShop
  },
  {
    path:'/editshop/:id',
    name:'EditShop',
    component: EditShop
  },
  {
    path:'/states',
    name:'States',
    component: StatesView
  },
  {
    path:'/newstate',
    name:'NewState',
    component: NewState
  },
  {
    path:'/editstate/:id',
    name:'EditState',
    component: EditState
  },
  {
    path:'/users',
    name:'Users',
    component: UsersView
  }, 
  {
    path:'/newuser',
    name:'NewUser',
    component: NewUser
  },
  {
    path:'/editUser/:id',
    name:'EditUser',
    component: EditUser
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
