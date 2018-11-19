<template>
	<div>
	<ul :class="$route.name + currentService + '-' + currentSubService + '-photoGallery'">
		<li v-for="(item, i) in photoGallerySize" :key="i" :href="srcPhoto + i + '.jpg'">
			<img :src="srcPhotoSmall + i + '.jpg'">
		</li>
	</ul>
	<ul :class="$route.name + currentService + '-' + currentSubService + '-videoGallery'">
		<li v-for="(item, i) in videoGallerySize" :key="i" :href="srcVideo[i]">
			<img :src="srcVideoSmall + i + '.jpg'">
		</li>
	</ul>
	</div>
</template>

<script>

	export default {
		props: {
			mainType: {type: String, required: true},
			currentService: {type: String, required: true},
			currentSubService: {type: String, required: true},
		},
		data() {
			return {
			videoLinks: {child: {birthday:['www.youtube.com/embed/ZSMfXx4NgPI','www.youtube.com/embed/L5SRklmWzqM','www.youtube.com/embed/jHyENX4JhI4','www.youtube.com/embed/OD1Q8_fAUVw','www.youtube.com/embed/dm6JgqeYUcA', 'www.youtube.com/embed/iz89B3-2C-s', 'www.youtube.com/embed/ciwaUVCik8k','www.youtube.com/embed/i3jrNyiCouM', 'www.youtube.com/embed/zRE5JUG35FE'],newyear:['www.youtube.com/embed/6voeBx5Zp1E'],graduation:['www.youtube.com/embed/6_CalPzu55Y'],matinee:['www.youtube.com/embed/jkh2QBoc0UA','www.youtube.com/embed/6voeBx5Zp1E'],calendar:['www.youtube.com/embed/6VkWT1TRNwk'],childbirth:['www.youtube.com/embed/b_k70YyS1Mg'],party:['www.youtube.com/embed/6VkWT1TRNwk', 'www.youtube.com/embed/dp75Jk2ZLCs'],quest:['www.youtube.com/embed/OoJezgdT1DE'],cryoShow:['www.youtube.com/embed/b1SaDsRpyWw'],bubbleShow:['www.youtube.com/embed/nFfhQHFtcAg']},
			adult: {childbirth:['www.youtube.com/embed/b_k70YyS1Mg'],presentation:['www.youtube.com/embed/xfi84q1hK-k'],business:['www.youtube.com/embed/xfi84q1hK-k'],wedding:['www.youtube.com/embed/Gk7d2gaxdqU','www.youtube.com/embed/TauZT36fFmY','www.youtube.com/embed/Twgd0f3SpdE','www.youtube.com/embed/y5PyxRI5X1E'],cryoShow:['www.youtube.com/embed/b1SaDsRpyWw'],flower:['www.youtube.com/embed/8T5T5znl9Ek'],bubbleShow:['www.youtube.com/embed/nFfhQHFtcAg']}}
			}
		},
		computed: {
			galleryType() {
				return this.currentSubService !== '' ? this.currentSubService : this.currentService
			},
			srcPhoto() {
				return 'img/gallery/'+this.$route.name+'-photo/'+this.mainType+'-'+this.galleryType+'-'
			},
			srcPhotoSmall() {
				return 'img/gallery/'+this.$route.name+'-photo/small/'+this.mainType+'-'+this.galleryType+'-'
			},
			srcVideo() {
				return this.videoLinks[this.$route.name][this.galleryType]
			},
			srcVideoSmall() {
				return 'img/gallery/'+this.$route.name+'-video/'+this.mainType+'-'+this.galleryType+'-'
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
			installMagnificPopup() {
				$('.'+this.$route.name+this.currentService+'-'+this.currentSubService+'-photoGallery').magnificPopup({
					delegate: 'li',
					type: 'image',
					removalDelay: 300,
					zoom: {
			    		enabled: true,
			    		duration: 300
					},
					gallery: {
					    enabled: true,
					    navigateByImgClick: true
					}
				});
				$('.'+this.$route.name+this.currentService+'-'+this.currentSubService+'-videoGallery').magnificPopup({
					delegate: 'li',
					type: 'iframe',
					removalDelay: 300,
					gallery: {
					    enabled: true,
					    navigateByImgClick: true
					},
					iframe: {
					  patterns: {
					    youtube: {
					      index: 'youtube.com/',
					      id: '',
					      src: '//%id%?autoplay=1'
					    },
					  },
					},
				})
			}
		},
		mounted() {
			magnificPopup: {
				this.installMagnificPopup()
			}
		}
	}
	
</script>

<style lang="scss" scoped>

	div{
		display: flex;
		justify-content: space-around;
	}
	
	li {
		cursor: pointer;
		position: absolute;
		opacity: 0
	}
	li:last-child {
		opacity: 1
	}

</style>