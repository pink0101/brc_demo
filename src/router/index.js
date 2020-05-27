import Vue from 'vue'
import VueRouter from 'vue-router'
import zixun from '../views/zixun.vue'
import newsxq from '../views/newsxq.vue'
import gsjs from '../views/gsjs.vue'
import ywhz from '../views/ywhz.vue'
import ywhz_xq from '../views/ywhz_xq.vue'
import sdjczp from '../views/sdjczp.vue'
import sdjczp_xq from '../views/sdjczp_xq.vue'
import txjl from '../views/txjl.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // redirect: '/zixun'
  },
  { path: '/zixun', component: zixun },
  { path: '/newsxq', component: newsxq },
  { path: '/gsjs', component: gsjs },
  { path: '/ywhz', component: ywhz },
  { path: '/ywhz_xq', component: ywhz_xq },
  { path: '/sdjczp', component: sdjczp },
  { path: '/sdjczp_xq', component: sdjczp_xq },
  { path: '/txjl', component: txjl },
]

const router = new VueRouter({
  routes
})

export default router
