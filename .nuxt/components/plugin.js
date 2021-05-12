import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Header: () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  HomeHero: () => import('../..\\components\\HomeHero.vue' /* webpackChunkName: "components/home-hero" */).then(c => wrapFunctional(c.default || c)),
  RecentsProjects: () => import('../..\\components\\RecentsProjects.vue' /* webpackChunkName: "components/recents-projects" */).then(c => wrapFunctional(c.default || c)),
  SearchBar: () => import('../..\\components\\SearchBar.vue' /* webpackChunkName: "components/search-bar" */).then(c => wrapFunctional(c.default || c)),
  HomeFilterSideBar: () => import('../..\\components\\home\\FilterSideBar.vue' /* webpackChunkName: "components/home-filter-side-bar" */).then(c => wrapFunctional(c.default || c)),
  HomeSingleProject: () => import('../..\\components\\home\\HomeSingleProject.vue' /* webpackChunkName: "components/home-single-project" */).then(c => wrapFunctional(c.default || c)),
  HomeNavSideBar: () => import('../..\\components\\home\\NavSideBar.vue' /* webpackChunkName: "components/home-nav-side-bar" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
