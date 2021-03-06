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
import rzxx from '../views/rzxx.vue'
import grxx from '../views/grxx.vue'
import jyjy from '../views/jyjy.vue'
import gzjy from '../views/gzjy.vue'
import xgzz from '../views/xgzz.vue'
import grzx from '../views/grzx.vue'
import ytd from '../views/ytd.vue'
import tzxx from '../views/tzxx.vue'
import tzxx_xq from '../views/tzxx_xq.vue'
import ygyw from '../views/ygyw.vue'
import gzt from '../views/gzt.vue'
import gzkxx_tj from '../views/gzkxx_tj.vue'
import sssq from '../views/sssq.vue'
import lzsq from '../views/lzsq.vue'
import lzsq_qr from '../views/lzsq_qr.vue'
import fqgd from '../views/fqgd.vue'
import fqgd_xq from '../views/fqgd_xq.vue'
import hfcl from '../views/hfcl.vue'


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
  { path: '/rzxx', component: rzxx },
  { path: '/grxx', component: grxx },
  { path: '/jyjy', component: jyjy },
  { path: '/gzjy', component: gzjy },
  { path: '/xgzz', component: xgzz },
  { path: '/grzx', component: grzx },
  { path: '/ytd', component: ytd },
  { path: '/tzxx', component: tzxx },
  { path: '/tzxx_xq', component: tzxx_xq },
  { path: '/ygyw', component: ygyw },
  { path: '/gzt', component: gzt },
  { path: '/gzkxx_tj', component: gzkxx_tj },
  { path: '/sssq', component: sssq },
  { path: '/lzsq', component: lzsq },
  { path: '/lzsq_qr', component: lzsq_qr },
  { path: '/fqgd', component: fqgd },
  { path: '/fqgd_xq', component: fqgd_xq },
  { path: '/hfcl', component: hfcl },
]

const router = new VueRouter({
  routes
})

export default router
