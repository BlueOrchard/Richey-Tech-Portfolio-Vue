import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/routecomponents/home'
import Contact from '@/components/routecomponents/contact'
import Browse from '@/components/routecomponents/browse'
import Post from '@/components/routecomponents/post'

Vue.use(Router)

const routes = [
    { path: '/',        component: Home},
    { path: '/contact', component: Contact},
    { path: '/browse',  component: Browse},
    { path: '/post',    component: Post}
]

export default new Router({
    routes,
    mode: 'history'
})