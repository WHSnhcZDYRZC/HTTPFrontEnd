import Layout from '@/components/Layout/Layout.vue'

const routes = [
    {
        path: '/',
        name: 'index',
        redirect: '/cross-domain',
        component: Layout,
        children: [
            {
                label: '跨域',
                name: 'cross-domain',
                path: '/cross-domain',
                component: () => import('@/pages/CrossDomain/CrossDomain.vue')
            },
            // {
            //     label: '鉴权',
            //     name: 'authentication',
            //     path: '/authentication',
            //     component: () => import('@/pages/Authentication/Authentication.vue')
            // },
            {
                label: '常见格式传输',
                name: 'format',
                path: '/format',
                component: () => import('@/pages/Format/Format.vue')
            },
            {
                label: '长连接',
                name: 'long-connection',
                path: '/long-connection',
                component: () => import('@/pages/LongConnection/LongConnection.vue')
            },
            {
                label: 'HTTP2',
                name: 'HTTP2',
                path: '/HTTP2',
                component: () => import('@/pages/HTTP2/HTTP2.vue')
            },
        ]
    },
    {
        path: "/:pathMatch(.*)*",
        name: "error",
        component: () => import("@/pages/Error/404.vue"),
    },
];

export default routes