import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/Dashboard'
import Icons from '@/views/Icons'
import User from '@/views/User'
import Maps from '@/views/Maps'
import Notifications from '@/views/Notifications'
import Typography from '@/views/Typography'
import Table from '@/views/Table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/user',
      name: 'user profile',
      component: User
    },
    {
      path: '/table',
      name: 'table list',
      component: Table
    },
    {
      path: '/typography',
      name: 'typography',
      component: Typography
    },
    {
      path: '/icons',
      name: 'icons',
      component: Icons
    },
    {
      path: '/maps',
      name: 'maps',
      component: Maps
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: Notifications
    }
  ]
})
