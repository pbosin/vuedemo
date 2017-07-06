import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Accounts from './components/Accounts'
import AccountDetail from './components/AccountDetail.vue'
import Invoices from './components/Invoices.vue'
import InvoiceDetail from './components/InvoiceDetail.vue'

Vue.use(VueRouter);

const routes = [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/accounts',
      component: Accounts
    },
    {
      path: '/accounts/:id',
      component: AccountDetail,
      props: true
    },
    {
      path: '/accounts/:id/invoices',
      component: Invoices,
      props: true
    },
    {
      path: '/accounts/:id/invoices/:invid',
      component: InvoiceDetail,
      props: true
    }
];

const router = new VueRouter({
  routes
});

export default router
