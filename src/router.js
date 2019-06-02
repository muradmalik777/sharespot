import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import About from '@/pages/About'
import store from './store'




function guard(to, from, next){
    if (store.state.user) {
        next();
    } else {
        next('/login');
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

    ]
})