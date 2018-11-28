<template>
	<section>
		<ul>
			<img v-for="(item, i) in photoGallerySize" :key="i" :src="srcPhotoSmall + i + '.jpg'" @click="index = i">
		</ul>
		<gallery :images="images" :index="index" :options="{youTubeVideoIdProperty: 'youtube', youTubePlayerVars: undefined, youTubeClickToPlay: true}" @close="index = null"></gallery>
<!-- 		<ul>
			<img v-for="(item, i) in videoGallerySize" :key="i" :src="srcVideoSmall + i + '.jpg'">
		</ul> -->
	</section>
</template>

<script>

	import VueGallery from 'vue-gallery'

	export default {
		components: {'gallery': VueGallery},
		props: {
			mainType: {type: String, required: true},
			currentService: {type: String, required: true},
			currentSubService: {type: String, required: true},
		},
		data() {
			return {
				images: [],
				index: null,
			videoLinks: {
			child: {birthday:['ZSMfXx4NgPI','L5SRklmWzqM','jHyENX4JhI4','OD1Q8_fAUVw','dm6JgqeYUcA', 'iz89B3-2C-s', 'ciwaUVCik8k','i3jrNyiCouM', 'zRE5JUG35FE'],newyear:['6voeBx5Zp1E'],graduation:['6_CalPzu55Y'],matinee:['jkh2QBoc0UA','6voeBx5Zp1E'],calendar:['6VkWT1TRNwk'],childbirth:['b_k70YyS1Mg'],party:['6VkWT1TRNwk', 'dp75Jk2ZLCs'],quest:['OoJezgdT1DE'],cryoShow:['b1SaDsRpyWw'],bubbleShow:['nFfhQHFtcAg']},
			adult: {childbirth:['b_k70YyS1Mg'],presentation:['xfi84q1hK-k'],business:['xfi84q1hK-k'],wedding:['Gk7d2gaxdqU','TauZT36fFmY','Twgd0f3SpdE','y5PyxRI5X1E'],cryoShow:['b1SaDsRpyWw'],flower:['8T5T5znl9Ek'],bubbleShow:['nFfhQHFtcAg']}}
			}
		},
		mounted() {
			installGallery: {
				this.installGallery()
			}
		},
		computed: {
			galleryType() {
				return this.currentSubService !== '' ? this.currentSubService : this.currentService
			},
			srcPhoto() {
				return 'img/gallery/' + this.$route.name + '-photo/' + this.mainType + '-' + this.galleryType + '-'
			},
			srcPhotoSmall() {
				return 'img/gallery/' + this.$route.name + '-photo/small/' + this.mainType + '-' + this.galleryType + '-'
			},
			srcVideo() {
				return this.videoLinks[this.$route.name][this.galleryType]
			},
			srcVideoSmall() {
				return 'img/gallery/' + this.$route.name + '-video/' + this.mainType + '-' + this.galleryType + '-'
			},
			videoGallerySize() {
				if (this.videoLinks[this.$route.name][this.galleryType] !== undefined)
				return this.videoLinks[this.$route.name][this.galleryType].length
			},
			photoGallerySize() {
				if (this.$route.name === 'adult') {
					switch (this.galleryType) {
						case 'birthday': return 6
						case 'newyear': return 7
						case 'graduation': return 6
						case 'corporative': return 10
						case 'calendar': return 4
						case 'childbirth': return 35
						case 'party': return 8
						case 'presentation': return 6
						case 'business': return 6
						case 'romantic': return 10
						case 'wedding': return 61
						case 'congratulations': return 1
						case 'decorating': return 24
						case 'aquagrim': return 8
						case 'acrobaticShow': return 6
						case 'paperShow': return 7
						case 'girl': return 1
						case 'monuments': return 6
						case 'cryoShow': return 9
						case 'laserShow': return 6
						case 'lasertag': return 6
						case 'bomberball': return 3
						case 'mims': return 8
						case 'scientificShow': return 5
						case 'neonShow': return 5
						case 'fireShow': return 8
						case 'sandShow': return 5
						case 'portrets': return 4
						case 'sandPainting': return 5
						case 'lightPictures': return 5
						case 'danceGroups': return 7
						case 'musicalGroups': return 7
						case 'teslaShow': return 5
						case 'magician': return 6
						case 'stilts': return 5
						case 'flower': return 0
						case 'springMan': return 6
						case 'bubbleShow': return 5
						case 'candybar': return 17
						case 'catering': return 13
						case 'popcorn': return 3
						case 'lady': return 7
						case 'champagne': return 6
						case 'cottonCandy': return 5
						case 'chokoFountain': return 8
						case 'juiceFountain': return 5
						case 'cakes': return 25
						case 'cupcakes': return 21
						case 'icecream': return 5
						case 'apples': return 6
						case 'fruits': return 10
						case 'bouquets': return 13
						case 'caramel': return 6
						case 'cones': return 6
						case 'special_effects': return 8
						case 'light_and_sound': return 6
						case 'shooting': return 9
						case 'pyrotechnics': return 9
					}
				} else {
					switch (this.galleryType) {
						case 'birthday': return 73
						case 'newyear': return 43
						case 'graduation': return 11
						case 'matinee': return 16
						case 'calendar': return 6
						case 'childbirth': return 35
						case 'party': return 13
						case 'quest': return 5
						case 'master_class': return 29
						case 'decorating': return 15
						case 'suit': return 36
						case 'aquagrim': return 13
						case 'trampoline': return 5
						case 'animals': return 10
						case 'special_effects': return 15
						case 'light_and_sound': return 4
						case 'shooting': return 5
						case 'pyrotechnics': return 6
						case 'acrobaticShow': return 6
						case 'paperShow': return 7
						case 'monuments': return 6
						case 'cryoShow': return 6
						case 'laserShow': return 6
						case 'lasertag': return 11
						case 'bomberball': return 6
						case 'mims': return 8
						case 'scientificShow': return 6
						case 'neonShow': return 5
						case 'fireShow': return 8
						case 'sandShow': return 5
						case 'portrets': return 6
						case 'sandPainting': return 7
						case 'lightPictures': return 5
						case 'danceGroups': return 7
						case 'teslaShow': return 5
						case 'magician': return 6
						case 'stilts': return 6
						case 'springMan': return 6
						case 'bubbleShow': return 5
						case 'candybar': return 32
						case 'catering': return 8
						case 'popcorn': return 5
						case 'cottonCandy': return 6
						case 'chokoFountain': return 6
						case 'juiceFountain': return 5
						case 'cakes': return 26
						case 'cupcakes': return 24
						case 'icecream': return 5
						case 'apples': return 6
						case 'fruits': return 6
						case 'bouquets': return 8
						case 'caramel': return 6
						case 'cones': return 6
					}
				}
			}
		},
		methods: {
			installGallery() {
				for (let i = 0; i < this.photoGallerySize; i++) {
					let href = this.srcPhoto + i + '.jpg';
					let type = 'image/jpeg';
					this.images.push({ href, type });
				};
				if (this.mainType === 'service') {
					for (let i = 0; i < this.videoGallerySize; i++) {
			        	let type = 'text/html';
			        	let youtube = this.srcVideo[i];
			        	let poster = 'https://img.youtube.com/vi/' + this.srcVideo[i] + '/maxresdefault.jpg';
						this.images.push({ type, youtube, poster });
			        }
			    }
			}
		},
		watch: {
			currentSubService() {
				this.images = [];
				this.installGallery();
			}
		}
	}

</script>

<style lang="scss" scoped>

	section {
		display: flex;
		justify-content: space-around;
		&>ul {
			display: flex;
			justify-content: center;
		}
	}

	img {
		cursor: pointer;
		position: absolute;
		opacity: 0
	}
	img:last-child {
		opacity: 1
	}

</style>