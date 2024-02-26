import { redirectIfAuthenticated } from '@/router/guards';

export default {
    path: '/',
    component: () => import('@/layouts/blank/BlankLayout.vue'),
    beforeEnter: redirectIfAuthenticated,
    children: [
        {
            name: 'login',
            path: '/login',
            component: () => import('@/views/auth/Login.vue')
        },
        {
            name: 'register',
            path: '/register',
            component: () => import('@/views/auth/Register.vue')
        },
    ]
};

