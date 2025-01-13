import { createRouter, createWebHistory } from 'vue-router'
import QuizzView from '../views/QuizzView.vue'
import GalleryViewVue from '@/views/GalleryView.vue'
import TaskManagerViewVue from '@/views/TaskManagerView.vue'

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
        },
        {
            path: '/task-manager',
            name: 'task-manager',
            component: TaskManagerViewVue
        }
    ],
})

export default router
