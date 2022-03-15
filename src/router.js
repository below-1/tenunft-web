import { createRouter, createWebHashHistory } from 'vue-router'
import MainLayout from '@components/main.layout.vue'
import LandingPage from '@components/landing.page.vue'
import ItemBid from '@components/item-bid.vue'

export const routes = [
  { path: '/', component: MainLayout, children: [
    { path: '', component: LandingPage },
    { path: 'items/:id/bid', component: ItemBid, props: true }
  ]}
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
