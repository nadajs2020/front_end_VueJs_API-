import { createRouter, createWebHistory } from '@ionic/vue-router';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeUser.vue')
  },
  {
    path: '/AddUser',
    name: 'AddUser',
    component: () => import('../views/AddUser.vue')
  },
  {
    path: '/MyProduct',
    name: 'My Product',
    component: () => import('../views/MyProduct.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
