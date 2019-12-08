import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/sandbox',
    name: 'sandbox',
    component: () => import(/* webpackChunkName: "sandbox" */ '../views/Sandbox.vue'),
  },
  {
    path: '/wireframe',
    name: 'wireframe',
    component: () => import(/* webpackChunkName: "wireframe" */ '../views/wireframes/ConfirmName.vue'),
  },
  {
    path: '/page-1',
    name: 'page-1',
    component: () => import(/* webpackChunkName: "pages" */ '../views/wireframes/ConfirmName.vue'),
  },
  {
    path: '/page-2',
    name: 'page-2',
    component: () => import(/* webpackChunkName: "pages" */ '../views/wireframes/Passcode.vue'),
  },
  {
    path: '/page-3',
    name: 'page-3',
    component: () => import(/* webpackChunkName: "pages" */ '../views/wireframes/WelcomeAI.vue'),
  },
  {
    path: '/page-4',
    name: 'page-4',
    component: () => import(/* webpackChunkName: "pages" */ '../views/wireframes/FormContainer.vue'),
  },
  {
    path: '/page-5',
    name: 'page-5',
    component: () => import(/* webpackChunkName: "pages" */ '../views/wireframes/ChooseAction.vue'),
  },
  {
    path: '*',
    redirect: 'page-1',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
