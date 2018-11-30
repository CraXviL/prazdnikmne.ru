<template>
	<div>
		<app-services></app-services>
		<section class="order" :class="$route.name">
			<h5>8 (962) 808-84-79, 8 (3852) 58-45-35</h5>
			<button class="btn-order">Оставьте заявку</button>
			<h5>Мы вам обязательно перезвоним</h5>
		</section>
		<div id="block-animators">
			<h2>Аниматоры</h2>
			<app-animator-gallery></app-animator-gallery>
			<div class="text">
				<p>Профессиональный аниматор – это тот, кто сможет организовать вполне законный Праздник Непослушания:</p>
				<ul>
					<li>будучи взрослым, он сойдет за «своего»;</li>
					<li>угадает все желания ребенка;</li>
					<li>и реализует их (не вызвав при этом локальный апокалипсис).</li>
				</ul>
				<p>Мы и «в город Изумрудный пойдем дорогой трудной», и «звездами континентов» станем, и даже в школу для волшебниц и волшебников вступим. Наши возможности ограничены только нашей фантазией. А кто сказал, что у фантазии есть границы?</p>
			</div>
			<img src="img/main/child-ingridients.png" alt="child-ingridients.png">
		</div>
		<app-ingridients></app-ingridients>
		<section id="block-order" class="order" :class="$route.name">
			<h5>8 (962) 808-84-79, 8 (3852) 58-45-35</h5>
			<button class="btn-order">Оставьте заявку</button>
			<h5>Мы вам обязательно перезвоним</h5>
		</section>
		<app-reviews></app-reviews>
		<div id="block-crew">
			<h2>Команда волшебников</h2>
			<ul>
				<li><img src="img/photo/crew-boss.jpg" alt="boss"><p>Основатель<br>компании:<br>Баженова Анастасия</p></li>
				<li><img src="img/photo/crew-comdir.jpg" alt="comdir"><p>Коммерческий<br>директов:<br>Привалов Олег</p></li>
				<li><img src="img/photo/crew-art.jpg" alt="art"><p>АРТ-Менеджер:<br>Липовая Анастасия</p></li>
				<li><img src="img/photo/crew-adm.jpg" alt="adm"><p>Офисный<br>администратор:<br>Кустова Анна</p></li>
				<li><img src="img/photo/crew-anim.jpg" alt="anim"><p>Весёлые<br>аниматоры</p></li>
			</ul>
		</div>
		<div id="block-bottom">
			<p><span>М</span>ы - это веселая, задорная команда,<br>
				"Корпорация праздников Анастасии Баженовой".<br>
				Агентство по производству незабываемых торжеств!<br>
				Можем организовать "праздник под ключ",<br>
				от написания сценария до его воплощения.<br>
				<span>Если мы берёмся за дело у нас всегда<br>
				выходит отличный результат!<br>
				Гарантия качественного праздника 100%<br>
				или мы готовы вернуть вам деньги!</span></p>
		</div>
		<img id="bottom-img" src="img/main/child-bottom.png" alt="child-bottom.png">
	</div>
</template>

<script>
	
	import appServices from './services';
	import appIngridients from './ingridients';
	import appAnimatorGallery from './AnimatorGallery';
	import appReviews from './TheReviews';

	export default {
		components: {appServices, appIngridients, appAnimatorGallery, appReviews}
	};

</script>

<style lang="scss" scoped>

	@import '../styles/variables.scss';
	
	#block-animators {
		color: white;
		display: flex;
		flex-direction: column;
		background-color: $red1;
		&>img {
			width: 100%;
			margin-top: -50px;
		}
		.text {
			width: 820px;
			margin: 0 auto;
			text-align: center;
		}
		&>div>ul {
			flex-direction: column;
			padding-left: 100px;
			text-align: left;
		}
		&>div>ul>li {
			list-style-type: disc
		}
	}

	.order {
		display: flex;
		align-items: center;
		justify-content: center;
		color: $red1;
		background-color: $green2;
		h5 {
			margin: 30px
		}
		button {
			width: 270px;
			height: 40px;
			font-size: 1.4em;
		}
	}

	#block-order {
		flex-direction: column;
		background: url("/img/main/child-order.png") no-repeat center;
		background-size: cover;
		h5 {
			margin: 10px auto;
			font-size: 1em;
		}
	}

	#block-crew {background-color: #4FBFD8}

	#block-crew {
		li {
			margin: 2%;
			color: white;
			text-align: center;
		}
		img {
			height: 150px;
			border-radius: 50%;
		}
	}

	#block-bottom {
		background: url("/img/main/child-photo-main.jpg") no-repeat left;
		background-size: contain;
	}

	#block-bottom p {
		height: 500px;
		padding: 1%;
		text-align: right
	}

	#bottom-img {
		width: 100%;
		margin-top: -200px;
	}
	
</style>