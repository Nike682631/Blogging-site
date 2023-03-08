import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
     { path: '/', redirect: '/login' },
     { path: 'login', component: () => import('src/pages/LoginPage.vue') },
     { path: 'register', component: () => import('src/pages/RegisterPage.vue') },
    ],
    meta: { auth: false}
   },
   {
    path: '/app',
    component: () => import('layouts/MainLayout.vue'),
    children: [
     { path: '', component: () => import('pages/IndexPage.vue') },
     { path: 'createblog', component: () => import('pages/CreateBlog.vue') },
     {
      path: 'blog/:id',
      name: 'Blog',
      component: () => import('pages/BlogDetails.vue'),
      props: true,
    },
     {
      path: 'blog/edit/:id',
      name: 'BlogEdit',
      component: () => import('pages/BlogEdit.vue'),
      props: true,
    },
    ],
    meta: { auth: true }
   },
   {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
   }
];

export default routes;
