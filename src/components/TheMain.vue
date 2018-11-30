<template>
	<div class="container">
		<header>
			<div id="logo"></div>
			<nav>
				<router-link v-for="item in $parent.menu"
							:id="item.route"
							:key="item.route" 
							:to="{name: item.route}"
							active-class="pink"
							tag="h4"
							>
					{{ item.title }}
				</router-link>
			</nav>
			<div>
				<h5>8 (962) 808-84-79</h5>
				<h5>8 (3852) 58-45-35</h5>
			</div>
		</header>
		<app-order-form></app-order-form>
		<animated-fade-in>
			<router-view></router-view>
		</animated-fade-in>
	</div>
</template>

<script>

	import appOrderForm from './orderForm';

	export default {
		components: {appOrderForm},
		data() {
			return {
				menu: [
					{
						route: 'adult',
						title: 'Взрослые праздники'
					},
					{
						route: 'child',
						title: 'Детские праздники'
					}
				]
			}
		},
		mounted() {
			form: {
				this.form_open();
			}
		},
		updated() {
			form: {
				this.form_open();
			}
		},
		methods: {
			form_open() {
				$('.btn-order').on('click', function(){
					$('form').animate({top:100},500);
				});
			}
		}
	};

</script>

<style lang="scss">

	@import '../styles/variables.scss';

	html {min-width: $main_width}

	body {overflow: auto}

	.container {
		display: flex;
		flex-direction: column;
		min-width: $main_width;
	}

	header {
		display: flex;
		justify-content: center;	
		#logo {
			background: url(/img/main/logo-sm.png) center no-repeat;
			background-size: contain;
			flex-basis: 20%;
		}
		nav {
			flex-basis: 700px;
			display: flex;
			align-items: center;
			justify-content: space-around;
		}
		h4 {
			cursor: pointer;
			border-top: 2px solid white;
			border-bottom: 2px solid white;
		}
		h4:hover {
			border-top: 2px solid $pink1;
			border-bottom: 2px solid $pink1;
		}
	}
	.slick-dots {
	    position: absolute;
	    bottom: 0;
	    list-style: none;
	    text-align: center;
	    li {
		    position: relative;
		    display: inline-block;
		}
		button {
		    font-size: 0;
		    cursor: pointer;
		    border: 0;
		    background: transparent;
		}
		button:before {
		    font-size: 30px;
		    content: '•';
		    opacity: .25;
		    color: black;
		}
		.slick-active button:before {
	    	opacity: .75;
	    	color: black;
	    }
	}

	.blueimp-gallery-display {
		display: none;
	}

	body:last-child .blueimp-gallery>.slides>.slide>.video-content:not(.video-loading)>a {
		background: url(/dist/video-play.png) center no-repeat
	}

</style>