<template>
	<form name="order" action="sendmail.php" method="post">
		<h2>Оставить заявку</h2>
		<div @click="form_close"><icon name="times"></icon></div>
		<label for="name"><h6 class="pink">Ваше имя</h6></label>
		<input type="text" name="name" size="25" required>
		<label for="phone"><h6 class="pink">Номер телефона</h6></label>
		<input type="tel" name="phone" size="25" required>
		<br><br><input onclick="ga('send', 'event', 'form2', 'click'); yaCounter46018356.reachGoal('formСlick');"   type="submit" name="send" id="submit">
	</form>
</template>

<script>
	import Icon from 'vue-awesome/components/Icon';
	import 'vue-awesome/icons/times';

	export default {
		components: {
			Icon
		},
		methods: {
			form_close() {
				$('form').animate({top:-500},500);
			}
		}
	}

</script>

<style lang="scss">

	@import '../styles/variables.scss';

	form {
		top: -500px;
		left: 100px;
		height: 416px;
		width: 400px;
		background: url('/img/main/bg-form.png') top no-repeat;
		position: fixed;
		text-align: center;
		font-family: Cambria;
		border-radius: 30px;
		box-shadow: 10px 10px 10px rgba(0,0,0,.5);
		z-index: 10;
		h2 {
			font-size: 3em;
			margin: 50px;
			color: $red1;
		}
		input {
			border: 0 solid #E2969D;
			border-radius: 10px;
		}
		input:focus {border: 0 solid $pink1}
		input#submit {
			height: 35px;
			width: 200px;
			color: white;
			background-color: $pink1;
			font-family: Cambria;
			font-size: 1.2em;
		}
		svg {
			top: 20px;
			right: 20px;
			position: absolute;
			color: white;
			cursor: pointer;
		}
	}

</style>