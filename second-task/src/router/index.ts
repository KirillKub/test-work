import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Value from '../views/Value.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Value',
    component: Value,
  },
  {
    path: '/exchanger',
    name: 'Exchanger',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Exchanger.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
