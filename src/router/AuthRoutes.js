const AuthRoutes = {
    path: '/auth',
    component: () => import('@/layouts/blank/BlankLayout.vue'),
    meta: {
        requiresAuth: false
    },
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

export default AuthRoutes;
