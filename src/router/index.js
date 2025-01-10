import { createRouter, createWebHistory } from 'vue-router'
import QuizzView from '../views/QuizzView.vue'
import GalleryViewVue from '@/views/GalleryView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: QuizzView,
        },
        {
            path: '/gallery',
            name: 'gallery',
            component: GalleryViewVue
        }
    ],
})

export default router
