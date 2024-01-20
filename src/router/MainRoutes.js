export default [
    {
        path: '/main',
        component: () => import('@/layouts/full/FullLayout.vue'),
        children: [
            {
                name: 'Dashboard',
                path: '/',
                component: () => import('@/views/dashboard/index.vue')
            },
        ]
    }
];