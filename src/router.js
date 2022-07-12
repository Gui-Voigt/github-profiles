import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Repos from './views/Repos.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/repos',
        name: 'repos',
        component: Repos
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router