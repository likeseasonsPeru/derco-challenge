import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d4c8027a = () => interopDefault(import('../pages/cotizar.vue' /* webpackChunkName: "pages/cotizar" */))
const _7e8c1202 = () => interopDefault(import('../pages/catalogo/_modelo/_page.vue' /* webpackChunkName: "pages/catalogo/_modelo/_page" */))
const _c7011daa = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cotizar",
    component: _d4c8027a,
    name: "cotizar"
  }, {
    path: "/catalogo/:modelo?/:page?",
    component: _7e8c1202,
    name: "catalogo-modelo-page"
  }, {
    path: "/",
    component: _c7011daa,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
