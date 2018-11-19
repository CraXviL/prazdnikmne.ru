<template>
	<animated-fade-in>
		<router-view></router-view>
	</animated-fade-in>
</template>

<script>
	export default {
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
		}
	}
</script>

<style>

</style>