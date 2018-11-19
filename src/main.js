import Vue from 'vue'
import App from './App.vue'

import jquery from 'jquery'
import 'magnific-popup'
import 'magnific-popup/dist/magnific-popup.css'
import 'owl.carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import AnimatedVue from 'animated-vue'
import 'animate.css/animate.css'
Vue.use(AnimatedVue)
import html5shiv from 'html5shiv'
import router from './routes'

import './styles/normalize.css'
import './styles/main.scss'

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})