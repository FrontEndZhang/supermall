import Vue from 'vue'
import Router from 'vue-router'

// const Home = () => {import(/* webpackChunkName: "Home" */'views/home/Home.vue')}
// const Category = () => {import(/* webpackChunkName: "Category" */'views/category/Category')}
// const Cart = () => {import(/* webpackChunkName: "Cart" */'views/cart/Cart')}
// const Profile = () => {import(/* webpackChunkName: "Profile" */'views/profile/Profile')}
import Home from 'views/home/Home'
import Category from 'views/category/Category'
import Cart from 'views/cart/Cart'
import Profile from 'views/profile/Profile'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path:'/',
      redirect : '/home'
    },
    {
      path : '/home',
      component : Home
    },
    {
      path : '/category',
      component : Category
    },
    {
      path : '/cart',
      component : Cart
    },
    {
      path : '/profile',
      component : Profile
    }
  ],
  mode : 'history'
})
