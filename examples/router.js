import Vue from 'vue'
import Router from 'vue-router'
import Install from './pages/install'
import Chart from './pages/chart'
import Eventer from './pages/eventer'
import Toggle from './pages/toggle'
import Test from './pages/test'
import Bmap from './pages/bmap.vue'
import LineMini from './pages/lineMini.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: '安装', component: Install },
    { path: '/chart/:type', name: '测试图表', component: Chart },
    { path: '/eventer', name: '事件监听', component: Eventer },
    { path: '/toggle', name: '图表切换', component: Toggle },
    { path: '/test', name: '测试', component: Test },
    { path: '/bmap', name: '百度地图', component: Bmap },
    { path: '/linemini', name: 'line-mini', component: LineMini }
  ]
})
