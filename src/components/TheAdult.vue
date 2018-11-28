<template>
	<div>
		<app-services></app-services>
		<section class="order" :class="$route.name">
			<h5>8 (962) 808-84-79, 8 (3852) 58-45-35</h5>
			<button class="btn-order">Оставьте заявку</button>
			<h5>Мы вам обязательно перезвоним</h5>
		</section>
		<section id="block-MCs">
			<h2>Ведущая Анастасия Баженова</h2>
			<ul class="MCs-gallery">
				<img v-for="(image, i) in 6" :key="i" :src="'img/MCs/MC-'+i+'.jpg'" @click="index = i">
	  			<gallery :images="images" :index="index" @close="index = null"></gallery>
			</ul>
			<p>Ведущий – самое заметное (после виновника торжества, конечно же) лицо на празднике. Поэтому при выборе ведущего важно заранее понять, приятен ли он/она Вам как человек, вызывает ли симпатию его манера речи. Поэтому Ведущая Анастасия Баженова всегда охотно встречаются с заказчиками, что Вы могли убедиться: да, этот человек сможет провести незабываемый праздник.<br><br>
			Анастасии под силу организовать и провести праздник любой сложности! В том числе:<br>
			- Корпоратив;<br>
			- Свадьбу;<br>
			- Деловое мероприятие;<br>
			- Выпускной;<br>
			- Открытие магазина;<br>
			- Юбилей и день рождения.
			<br><br>
			Факты в цифрах:<br>
			- Опыт работы 10 лет;<br>
			- 107 сценариев;<br>
			- Более 150 костюмов;<br>
			- Проведено и организовано более 534 мероприятий.<br>
			ОСТАВЬТЕ ЗАЯВКУ ПРЯМО СЕЙЧАС!</p>
			<img src="img/main/adult-ingridients.png">
		</section>
		<app-ingridients></app-ingridients>
		<section id="block-order" class="order" :class="$route.name">
			<h5>8 (962) 808-84-79, 8 (3852) 58-45-35</h5>
			<button class="btn-order">Оставьте заявку</button>
			<p>Мы вам обязательно перезвоним</p>
		</section>
		<app-reviews></app-reviews>
		<section id="block-crew">
			<h2>Команда волшебников</h2>
			<ul>
				<li><img src="img/photo/crew-boss.jpg"><p>Основатель<br>компании:<br>Баженова Анастасия</p></li>
				<li><img src="img/photo/crew-comdir.jpg" alt="photo"><p>Коммерческий<br>директов:<br>Привалов Олег</p></li>
				<li><img src="img/photo/crew-art.jpg" alt="photo"><p>АРТ-Менеджер:<br>Липовая Анастасия</p></li>
				<li><img src="img/photo/crew-adm.jpg" alt="photo"><p>Офисный<br>администратор:<br>Кустова Анна</p></li>
				<li><img src="img/photo/crew-anim.jpg" alt="photo"><p>Весёлые<br>аниматоры</p></li>
			</ul>
		</section>
		<section id="block-bottom">
			<p><span>Д</span>рузья, мы готовы предложить Вам Полный пакет услуг по организации
				<br>торжеств-мероприятий-праздников-девичников-и-прочее.
				<br><br><span>В</span>аш креатив приветствуется! Чем сложнее задача – тем интереснее. 
				<br><br><span>В</span>ечеринка для друзей-геймеров? - Легко. 
				<br><br><span>С</span>тильная свадьба для творческих влюбленных? - С удовольствием!
				<br><br><span>Х</span>отим то, не знаем что, но чтобы было шикарно? – Сложно, но вполне реализуемо. 
				<br><br><span>Мы креативим для Вас!</span>
			</p>
			<img id="bottom-img" src="img/main/adult-bottom.png">
		</section>
	</div>
</template>

<script>

	import appServices from './services'
	import appIngridients from './ingridients'
	import appReviews from './TheReviews'
	import VueGallery from 'vue-gallery'

	export default {
		components: {'gallery': VueGallery, appServices, appIngridients, appReviews},
		data() {
			return {
				images: [],
				index: null
			}
		},
		mounted() {
			installGallery: {
				for (let i = 0; i < 6; i++) {
					this.images.push('img/gallery/MCs/MC-'+i+'.jpg')
				}
			}
		}
	}

</script>

<style lang="scss" scoped>

	@import '../styles/variables.scss';

	#block-MCs {
		background: url("/img/main/bg1.jpg") top;
		background-color: #FDEEE9;
		h2 {
			color: #E5097F;
		}
		ul {
			width: $main-width;
			margin: 0 auto;
			img {
				cursor: pointer;
				margin: 10px;
			}
			p {color: #3E687E}
		}
		&>img {
			width: 100%;
			margin: -80px 0 -20px;
		}
		&>p {
			width: 900px;
			margin: 0 auto;
			color: #E5097F;
			text-align: center;
		}
	}

	.order {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #FFEA9C;
		background-color: #56698F;
		h5 {
			margin: 30px;
			color: #FFEA9C;
		}
		button {
			width: 270px;
			height: 40px;
			font-size: 1.4em;
		}
	}

	#block-order {
		flex-direction: column;
		background: url("/img/main/adult-order.png") no-repeat center;
		background-color: #FFEA9C;
		background-size: cover;
		h5 {
			margin: 10px auto;
			font-size: 1em;
		}
	}

	#block-crew {
		background: url("/img/main/bg2.jpg") top;
		background-color: #FFCD8C;
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
		background: url("/img/main/adult-photo-main.jpg") no-repeat top;
		background-size: cover;
		p {
		height: 400px;
		margin-left: 250px;
		}
	}

	#bottom-img {
		width: 100%;
		margin-top: -400px;
	}

</style>