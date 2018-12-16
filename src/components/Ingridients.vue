<template>
	<section>
		<div id="block-ingridients" :class="$route.name">
			<ul>
				<li :id="item.name" :class="$route.name" v-for="(item, i) in ingridientContent" :key="i" @click="onClick($event)">
					<a> {{ item.title }} </a>
				</li>
			</ul>
		</div>
		<animated-group-fade-in tag="div">
		<div id="block-ingridients-desc" :class="$route.name" :key="ingridientContent[currentIngridient].title">
			<div><img :src="srcIcon + ingridientContent[currentIngridient].name + '-photo.png'"></div>
			<div>
				<h3> {{ ingridientContent[currentIngridient].title }} </h3>
				<p v-html="ingridientContent[currentIngridient].content"></p>
				<app-photo-gallery :mainType="'ingridient'" :currentService="currentIngridient" :currentSubService="''"></app-photo-gallery>
			</div>
		</div>
		</animated-group-fade-in>
	</section>
</template>

<script>

	import appPhotoGallery from './PhotoGallery';
		
	export default {
		components: {appPhotoGallery},
		data() {
			return {
				currentIngridient: 'special_effects',
				srcIcon: 'img/' + this.$route.name + '/ingridient-',
				ingridientContentAdult: {
					special_effects:{
						name: 'special_effects',
						title: 'Спецэффекты',
						content: 'Спецэффекты – этакая «вишенка на торте». Конечно, они не смогут полностью, сами по себе, «сделать» атмосферу праздника. Однако спецэффекты способны украсить любое торжество, оформить картину праздника в эффектную рамку.'
					},
					light_and_sound:{
						name: 'light_and_sound',
						title: 'Свет и звук',
						content: 'Качественные световое и звуковое оборудование – залог стильной, яркой, интересной вечеринки.<br><br>Гости будут счастливы потанцевать и от души «зажечь» на крутом танцполе, в который при помощи нашего оборудования легко превратится даже небольшое свободное пространство в ресторане или кафе.<br><br>Атмосфера модного клуба – на Ваше мероприятие.'
					},
					shooting:{
						name: 'shooting',
						title: 'Фото и видеосъемка',
						content: 'Наша команда снимет  для Вас замечательный фото- или видео-репортаж.<br><br>Такой, который приятно будет листать и через много лет.<br><br>Такой, чтобы радостно было показать друзьям и знакомым.<br><br>И главное – такой, чтобы Вы себе в нем нравились.'
					},
					pyrotechnics:{
						name: 'pyrotechnics',
						title: 'Пиротехника',
						content: 'Мы разрабатываем уникальный индивидуальный сценарий пиротехнического шоу для каждого клиента, исходя из пожеланий и бюджета мероприятия. Мы гарантируем, что на Вашем торжестве будет только качественная пиротехника, а значит, никакие неприятности не омрачат волшебного праздничного фейерверка.'
					},
				},
				ingridientContentChild: {
					aquagrim:{
						name: 'aquagrim',
						title: 'Аквагрим',
						content: 'Стать феей, Человеко-Пауком или зайчиком за несколько минут? С нашей командой волшебников – легко! Наши художники с удовольствием раскрасят лица всех присутствующих на празднике, и ваш ребенок (вместе с родителями, если захочется) с легкостью перевоплотится в волшебное существо. Яркие фотографии и детский восторг обеспечены!<br><br>Аквагрим не вызывает аллергических реакций, не причиняет вреда для детской кожи.'
					},
					trampoline:{
						name: 'trampoline',
						title: 'Батуты',
						content: 'Загадка: что это такое, большое, воздушное, на него падаешь – вверх подлетаешь? И  еще все дети это любят.<br><br>Да-да, это батут!<br><br>Батут не подвластен времени и переменам. И мы в детстве обожали его, и нынешние дети  обожают. Представьте, какую радость вызовет появление этого огромного позитивного спортивного снаряда на детском празднике?<br><br>Предупреждение: могут расстроиться взрослые, которым уже нельзя попрыгать на батуте.'
					},
					animals:{
						name: 'animals',
						title: 'Животные на выезд',
						content: 'Ваше чадо настолько любит животных,  что если бы ребенок мог, он жил бы в зоопарке? Тогда мы точно знаем, каким будет лучший подарок ему на праздник. К нему приедет настоящий маленький зоопарк! И животные там – не в клетках, и не злые. Они добрые, хорошо идут на контакт, и их можно гладить!<br><br>Вы можете не беспокоиться о безопасности своего ребенка. Все животные чистые, имеют ветеринарные справки. За животными присматривает квалифицированный работник.'
					},
					special_effects:{
						name: 'special_effects',
						title: 'Спецэффекты',
						content: 'В арсенале волшебников много волшебных штук!<br><br>Например, пушки. Они отличаются от обычных тем, что заряжаются они радостью и позитивом. А стреляют – пеной!<br><br>А еще мы умеем летом делать снег, и запускать огромные облака мыльных пузырей.<br><br>У маленьких (да и у больших) детей обязательно загорятся глаза при виде наших машин для спецэффектов.'
					},
					light_and_sound:{
						name: 'light_and_sound',
						title: 'Свет и звук',
						content: 'С нашим профессиональным оборудованием музыка на Вашем празднике будет звучать чисто, громко и бодро, а яркие световые эффекты будут радовать гостей и создавать праздничную атмосферу на протяжении всего торжества.<br><br>Устройте своему ребенку настоящую дискотеку или таинственное волшебное приключение.<br><br>Убедитесь сами в качестве нашего светового и музыкального оборудования!'
					},
					shooting:{
						name: 'shooting',
						title: 'Фото и видеосъемка',
						content: 'Мы  - команда волшебников, и нам многое по плечу!<br><br>И даже – запечатлеть радостные моменты, чтобы вы могли пережить их снова.<br><br>В нашей команде работают профессионалы фото- и видеоискусства.  Мы сделаем Вам отличные фотографии и/или фильм о Вашем торжестве. Мы подходим к каждому заказу с душой, поэтому снимки получаются разнообразными, яркими и оригинальными.'
					},
					pyrotechnics:{
						name: 'pyrotechnics',
						title: 'Пиротехника',
						content: 'Помните, как в «Смещариках» Пину объясняли, что такое фейерверк: это чувственный фонтан брызг,  как метеоритный дождь, должно быть красиво!  Как замечательно сказано.<br><br>В любом возрасте люди с восхищением глядят в темное небо на праздничные салюты.<br><br>Вы можете подарить Вашему ребенку эти вдохновенные огоньки, брызги торжества.<br><br>Мы организуем это для Вас - <b>безопасно и невероятно красиво.'
					}
				},
			};
		},
		computed: {
			ingridientContent() {
				return this.$route.name==='adult' ? this.ingridientContentAdult : this.ingridientContentChild;
			}
		},
		methods: {
			onClick(e) {
				this.currentIngridient = e.currentTarget.getAttribute('id');
			}
		}
	};

</script>

<style lang="scss" scoped>

	@import '../styles/variables.scss';

	#block-ingridients {
		height: 40px;
		padding: 20px;
		text-align: center;
		&.adult {
			background-color: #F57A93;
			li, a {
				margin-right: 1%;
				color: #FDEEE9;
			}
		}
		&.child {
			background-color: $green2;
			li, a {
				margin-right: 1%;
				color: $red1;
			}
		}
	}

	#block-ingridients-desc {
		display: flex;
		justify-content: center;
		&>div {
			width: 50%;
			max-width: 600px;
		}
		&>div>img {width: 100%}
		&.adult {
			background-color: #56698F;
			h3 {
				color: #FDEEE9;
				background-color: #F57A93;
			}
		}
		&.child {
			background-color: $green1;
			h3 {
				color: #0B622F;
				background-color: $green2;
			}
		}
		a, p {color: white}
		p {font-size: 0.8em}
	}

</style>