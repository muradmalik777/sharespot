import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Space from '@/pages/Space'
import Dashboard from '@/pages/Dashboard'
import ShareSpace from '@/pages/ShareSpace'
import store from './store'


function guard(to, from, next) {
    if (store.state.user) {
        next();
    } else {
        next('/');
    }
}



Vue.use(Router);
export default new Router({
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/space/:slug?', component: Space },
        { path: '/dashboard', component: Dashboard, beforeEnter: guard },
        { path: '/share', component: ShareSpace, beforeEnter: guard },
    ]
})