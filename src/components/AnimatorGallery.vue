<template>
	<div>
	<ul class="owl-carousel animators-carousel">
	    <li v-for="(item, i) in 73" :key="i">
	       	<img :src="'img/animators/animator-'+i+'.jpg'" @click="indexAnimator = i">
	       	<p> {{ animators[i] }} </p>
	       	<button class="btn-order">ЗАКАЗАТЬ</button>
	    </li>
	</ul>
	<gallery :images="images" :index="indexAnimator" @close="indexAnimator = null"></gallery>
	</div>
</template>

<script>

	import VueGallery from 'vue-gallery';

	export default {
		components: {'gallery': VueGallery},
		data() {
			return {
				animators: ['Тролли Роза и Цветан','Свинка Пеппа','Эльза и Анна холодное сердце','Фиксики Нолик, Симка и Мася','Ковбой','Алиса в стране чудес','Алиса и Чеширский кот','Анна','Василиса Прекрасная','Веселые Гавайцы','Губка Боб','Ковбойка Кэтрин','Кот, Тигра, Пчелка','Лего Человек','Маша и Медведь','Машенька','Медведь','Миньон','Отважные пираты','Пират Джек','Пират Томас','Пиратка Грейс','Пчелка','Русалочка Ариэль','Суперполицейский','Тигра','Тролль Роза','Тролль Цветан','Фея Блум','Фея Динь-Динь','Фиксик Мася','Фиксик Нолик','Фиксик Симка','Фиксики Нолик и Симка','Фиксики Симка и Нолик','Храбрые Ковбои','Чеширский кот 1','Чеширский кот 2','Эльза','Пони Искорка и Радуга','Супер Герои','Лунтяш,Кузя и Мила','Фея Winx Блум','Миньон','Фея Winx Флора','Холодное сердцем Анна и Эльза','Храбрая сердцем Мерида','Человек Паук','Монстр Хай Клаудия Вульф и Драку Лаура', 'Железный человек. Тони Старк','Супермен','Шерлок Холмс','Мини и Мики Маусы','Бамболби','Хелоу Кити','Индейцы','Белоснежка','Шляпник и Алиса','Черепашка Ниндзя Донателло','Черепашка Ниндзя Леонардо','Черепашка Ниндзя Рафаель','Черепашка Ниндзя Микеланджело','Барбоскины Роза и Дружок','Рапунцель','Клоун Ляля','Клоун Пряник','Пираты Криветка и Джек','Лунтяш','Мила','Кузя','Лёва Ростовая кукла','Настенька','Фиксики Симка и Нолик'],
				images: [],
				indexAnimator: null
			};
		},
		methods: {
			installOwlCarousel() { 
			    $('.animators-carousel').owlCarousel({ 
					loop:true,
					mouseDrag:true,
					touchDrag:true,
					autoplay:true,
					autoplayTimeout:2000,
					autoplayHoverPause:true,
					items:8,
					margin:20
				});
			}
		},
		mounted() {
			installGallery: {
				for (let i = 0; i < 73; i++) {
					this.images.push('img/gallery/animators/animator-'+i+'.jpg');
				}
			}
			owlCarousel: {
				this.installOwlCarousel();
			}
		}
	};

</script>

<style lang="scss">

	@import '../styles/variables.scss';

	#block-animators .owl-carousel {
		width: $main_width;
		margin: 0 auto;
		li {width: 150px}
		img {cursor: pointer}
		p {height: 40px}
		button {
			width: 100px;
			height: 25px;
			font-weight: 700;
			font-size: 0.8em;
		}
	}

</style>