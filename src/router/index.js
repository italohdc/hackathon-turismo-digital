import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: 'home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "pages" */ '../views/wireframes/Homescreen.vue'),
  },
  {
    path: '/sandbox',
    name: 'sandbox',
    component: () => import(/* webpackChunkName: "sandbox" */ '../views/Sandbox.vue'),
  },
  {
    path: '/confirm-name',
    name: 'confirm-name',
    component: () => import(/* webpackChunkName: "pages" */ '../views/wireframes/ConfirmName.vue'),
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import(/* webpackChunkName: "pages" */ '../views/wireframes/WelcomeAI.vue'),
  },
  {
    path: '/questions',
    name: 'questions',
    component: () => import(/* webpackChunkName: "pages" */ '../views/wireframes/FormContainer.vue'),
  },
  {
    path: '/normal-chat',
    name: 'normal-chat',
    component: () => import(/* webpackChunkName: "pages" */ '../views/wireframes/NormalChat.vue'),
  },
  {
    path: '/promo-chat',
    name: 'promo-chat',
    component: () => import(/* webpackChunkName: "pages" */ '../views/wireframes/PromoChat.vue'),
  },
  {
    path: '*',
    redirect: 'home',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
