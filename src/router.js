import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import CarList from './pages/CarList.vue';
import SingleCar from './pages/SingleCar.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/car',
            name: 'car',
            component: CarList
        },
        {
            path: '/car/:id',
            name: 'single-car',
            component: SingleCar
        },
        /*{
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        }*/
    ]
})

export {router};