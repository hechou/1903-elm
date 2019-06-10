import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Goods from './views/goods/index.vue'
import {
	Button,
	Switch,
	GoodsAction,
	GoodsActionIcon,
	GoodsActionButton,
	Search,
	TreeSelect
} from 'vant'


Vue.use(Router)
	.use(Button)
	.use(Switch)
	.use(GoodsAction)
	.use(GoodsActionIcon)
	.use(GoodsActionButton)
	.use(Search)
	.use(TreeSelect);
	
export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: '/home',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			component: About
		},
		{
			path: '/goods',
			name: 'goods',
			component: Goods
		},
		{
			path: '*',
			name: 'all',
			redirect: './home'
		}
		// {
		// path: '/about',
		// name: 'about',
		//   // route level code-splitting
		//   //this generates a separate chunk (about.[hash].js) for this route
		//   //which is lazy-loaded when the route is visited.
		// component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
		// }
	]
})
