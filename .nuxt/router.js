import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _482b1ea6 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _0debc75b = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _a0752726 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _a57a54a6 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _e7501ec2 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _3c5c44e9 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _d7e5ce0c = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _482b1ea6,
    children: [{
      path: "/",
      component: _0debc75b,
      name: "home"
    }, {
      path: "/login",
      component: _a0752726,
      name: "login"
    }, {
      path: "/register",
      component: _a0752726,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _a57a54a6,
      name: "profile"
    }, {
      path: "/settings",
      component: _e7501ec2,
      name: "settings"
    }, {
      path: "/editor/:slug?",
      component: _3c5c44e9,
      name: "editor"
    }, {
      path: "/article/:slug?",
      component: _d7e5ce0c,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
