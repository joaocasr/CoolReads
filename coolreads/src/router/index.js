import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookshelfView from '../views/BookshelfView.vue'
import BookDetailView from '../views/BookDetailView.vue'
import BooksMenuView from '../views/BooksMenuView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bookshelf',
      name: 'bookshelf',
      component: BookshelfView
    },
    {
      path: '/bookmenu',
      name: 'booksmenu',
      component: BooksMenuView
    },
    {
      path: '/books/:id',
      name: 'bookdetail',
      component: BookDetailView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
