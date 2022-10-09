import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: '/',
        component: () => import('../views/Layout'),
        children: [
            { path: '/', name: 'home', component: () => import('../views/pages/Home.vue') },
            { path: 'jobs-and-career', name: 'jobs-and-career', component: () => import('../views/pages/JobsAndCareer.vue') },
            { path: 'book-store', name: 'book-store', component: () => import('../views/pages/BookStore.vue') }, 
            { path: 'islamic', name: 'islamic', component: () => import('../views/pages/Islamic.vue') },
            { path: 'free-learn', name: 'free-learn', component: () => import('../views/pages/FreeLearn.vue') },
            { path: 'skills-development', name: 'skills-development', component: () => import('../views/pages/SkillsDevelopment.vue') },
            { path: 'services', name: 'services', component: () => import('../views/pages/Services.vue') },
            { path: 'login', name: 'login', component: () => import('../views/Auth/Login.vue') },
            { path: 'registration', name: 'registration', component: () => import('../views/Auth/Registration.vue') },
        ]

    },


]

const router = createRouter({
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    history: createWebHistory(),
    base: process.env.BASE_URL,
    routes
});

export default router;