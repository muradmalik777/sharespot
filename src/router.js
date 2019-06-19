import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Space from '@/pages/Space'
import Dashboard from '@/pages/Dashboard'
import ShareSpace from '@/pages/ShareSpace'
import Contact from '@/pages/Contact'
import Support from '@/pages/Support'
import Explore from '@/pages/Explore'
import GeneralInfoForm from '@/components/GeneralInfoForm'
import DetailsForm from '@/components/DetailsForm'
import PhotosForm from '@/components/DetailsForm'

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
        { path: '/support', component: Support },
        { path: '/contact', component: Contact },
        { path: '/explore', component: Explore },
        { path: '/space/:slug?', component: Space },
        { path: '/dashboard', component: Dashboard, beforeEnter: guard },
        { path: '/share', component: ShareSpace, beforeEnter: guard,
            children: [
                { path: 'info', component: GeneralInfoForm },
                { path: 'details', component: DetailsForm },
                { path: 'photos', component: PhotosForm },
            ]
        },
    ]
})