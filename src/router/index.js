import Vue from 'vue'
import Router from 'vue-router'
import block from "@/components/block";
import HelloWorld from "@/components/HelloWorld";
import blockInfo from "@/components/blockInfo";
import kline from "@/components/kline";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/block',
      name: 'block',
      component: block
    },
    {
      path: '/blockInfo',
      name: 'blockInfo',
      component: blockInfo
    },
    {
      path: '/kline',
      name: 'kline',
      component: kline
    },
  ]
})
