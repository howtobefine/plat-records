import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/FrontEnd/FrontView.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/FrontEnd/HomeView.vue'),
        },
        {
          path: 'products',
          name: 'products',
          component: () => import('../views/FrontEnd/ProductsView.vue'),
        },
        {
          path: 'product/:id',
          name: 'product',
          component: () => import('../views/FrontEnd/ProductView.vue'),
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('../views/FrontEnd/CartView.vue'),
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/FrontEnd/AboutView.vue'),
        },
        {
          path: 'articles',
          name: 'articles',
          component: () => import('../views/FrontEnd/ArticlesView.vue'),
        },
        {
          path: 'article/:id',
          name: 'article',
          component: () => import('../views/FrontEnd/ArticleView.vue'),
        },
        {
          path: 'favorite',
          name: 'favorite',
          component: () => import('../views/FrontEnd/FavoriteView.vue'),
        },
        {
          path: 'order',
          name: 'order',
          component: () => import('../views/FrontEnd/OrderView.vue'),
        },
        {
          path: "pay/:id",
          name: "pay",
          component: () => import('../views/FrontEnd/PayView.vue'),
        },
        {
          path: "completed/:id",
          name: "completed",
          component: () => import('../views/FrontEnd/CompletedView.vue'),
        }
      ]
    },
    {
      path: '/login',
      component: () => import('../views/FrontEnd/LoginView.vue')

    },
    {
      path: '/admin',
      component: () => import('../views/DashBoard/DashBoard.vue'),
      children: [
        {
          path: 'products',
          component: () => import('../views/DashBoard/AdminProducts.vue')
        },
        {
          path: 'orders',
          component: () => import('../views/DashBoard/AdminOrders.vue')
        },
        {
          path: 'articles',
          component: () => import('../views/DashBoard/AdminArticles.vue')
        },
        {
          path: 'upload',
          component: () => import('../views/DashBoard/AdminUpload.vue')
        }
      ]
    },
    {
      path: "/:pathMath(.*)*",
      component: () => import("../views/FrontEnd/NotFound.vue"),
    },
  ]
})

export default router