import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Nav from './views/Nav.vue'
import Carousel from './views/Carousel.vue'
import Index from './views/Index.vue'
import Footer from './views/Footer.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/',component: Home1}, 
        {path: '/Nav',component: Nav}, 
        {path: '/Carousel',component: Carousel}, 
        {path: '/Index',component: Index},
        {path: '/Footer',component: Footer},
        
        
    ]
})