import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import TheStart from './components/TheStart';
import TheMain from './components/TheMain';
import TheChild from './components/TheChild';
import TheAdult from './components/TheAdult';

const routes = [
	{
		name: 'home',
		path: '',
		redirect: '/start'
	},
	{
		name: 'start',
		path: '/start',
		component: TheStart
	},
	{
		name: 'main',
		path: '/',
		component: TheMain,
		children: [
			{
				name: 'child',
				path: 'child',
				component: TheChild
			},
			{
				name: 'adult',
				path: 'adult',
				component: TheAdult
			},
		]
	},
	{
		path: '*',
		redirect: '/start'
	}
];

export default new VueRouter({
	mode: 'history',
	routes
});