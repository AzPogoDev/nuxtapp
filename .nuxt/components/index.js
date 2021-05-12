import { wrapFunctional } from './utils'

export { default as Header } from '../..\\components\\Header.vue'
export { default as HomeHero } from '../..\\components\\HomeHero.vue'
export { default as RecentsProjects } from '../..\\components\\RecentsProjects.vue'
export { default as SearchBar } from '../..\\components\\SearchBar.vue'
export { default as HomeFilterSideBar } from '../..\\components\\home\\FilterSideBar.vue'
export { default as HomeSingleProject } from '../..\\components\\home\\HomeSingleProject.vue'
export { default as HomeNavSideBar } from '../..\\components\\home\\NavSideBar.vue'

export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeHero = import('../..\\components\\HomeHero.vue' /* webpackChunkName: "components/home-hero" */).then(c => wrapFunctional(c.default || c))
export const LazyRecentsProjects = import('../..\\components\\RecentsProjects.vue' /* webpackChunkName: "components/recents-projects" */).then(c => wrapFunctional(c.default || c))
export const LazySearchBar = import('../..\\components\\SearchBar.vue' /* webpackChunkName: "components/search-bar" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeFilterSideBar = import('../..\\components\\home\\FilterSideBar.vue' /* webpackChunkName: "components/home-filter-side-bar" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeSingleProject = import('../..\\components\\home\\HomeSingleProject.vue' /* webpackChunkName: "components/home-single-project" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeNavSideBar = import('../..\\components\\home\\NavSideBar.vue' /* webpackChunkName: "components/home-nav-side-bar" */).then(c => wrapFunctional(c.default || c))
