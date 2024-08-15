import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import Cabinet from '@/views/CabinetView.vue'
import AccountComp from '@/components/Cabinet/AccountComp.vue'
import AddressComp from '@/components/Cabinet/AddressComp.vue'
import ExpectedParcelsComp from '@/components/Cabinet/ExpectedParcelsComp.vue'
import ParcelsInWarehouseComp from '@/components/Cabinet/ParcelsInWarehouseComp.vue'
import ParcelsInPackingComp from '@/components/Cabinet/ParcelsInPackingComp.vue'
import SentParcelsComp from '@/components/Cabinet/SentParcelsComp.vue'
import PurchaseAssistanceComp from '@/components/Cabinet/PurchaseAssistanceComp.vue'
import AdditionalServicesComp from '@/components/Cabinet/AdditionalServicesComp.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/cabinet',
      name: 'cabinet',
      component: Cabinet,
      meta: { requiresAuth: true }, 
      children: [
        { path: '', redirect: 'cabinet/account' },
        { path: 'account', component: AccountComp },
        { path: 'address', component: AddressComp },
        { path: 'expected', component: ExpectedParcelsComp },
        { path: 'warehouse', component: ParcelsInWarehouseComp },
        { path: 'packing', component: ParcelsInPackingComp },
        { path: 'sent', component: SentParcelsComp },
        { path: 'assistance', component: PurchaseAssistanceComp },
        { path: 'services', component: AdditionalServicesComp },
      ]
    },
  ]
})

// Navigation guard to check for authentication
router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem('username');  // Check if the user is logged in

  if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
    next({ name: 'login' });  // Redirect to the login page if the user is not authenticated
  } else {
    next();  // Proceed to the route
  }
})

export default router
