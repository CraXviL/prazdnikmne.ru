<template>
	<form name="order">
		<h2>Оставить заявку</h2>
		<div id="form_close"><icon name="times"></icon></div>
		<label for="name"><h5 class="pink">Ваше имя</h5></label>
		<input type="text" name="name" size="22" required>
		<label for="phone"><h5 class="pink">Номер телефона</h5></label>
		<input type="tel" name="phone" size="22" required>
		<input id="submit" type="submit" name="send" onclick="ga('send', 'event', 'form2', 'click'); yaCounter46018356.reachGoal('formСlick');">
	</form>
</template>

<script>
	import Icon from 'vue-awesome/components/Icon';
	import 'vue-awesome/icons/times';

	export default {
		components: {
			Icon
		}
	};

	document.addEventListener('DOMContentLoaded', () => {
		$('form').submit((e) => {
			e.preventDefault();
			$.ajax({
				url: 'sendmail.php',
				type: 'POST',
				data: $('form').serialize(),
		        success: function () {
		            console.log('Запрос отправлен');
		        },
		        error: function () {
		            console.log('Возникла ошибка при отправке');
		        }
			});
			$('form input, form label').hide();
			$('form h2').html('Благодарим Вас за заявку!');
			$('form').append('<h2>Проведём ваш праздник ярко, весело и с душой!</h2>');
		});
	});

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
		border-radius: 30px;
		box-shadow: 10px 10px 10px rgba(0,0,0,.5);
		z-index: 10;
		h2 {
			font-size: 3em;
			margin-top: 50px;
			color: $red1;
		}
		input {
			padding: 5px;
			margin-top: -10px;
			border: 0 solid #E2969D;
			border-radius: 10px;
		}
		input:focus {border: 0 solid $pink1}
		input#submit {
			height: 35px;
			width: 220px;
			margin-top: 30px;
			color: white;
			background-color: $pink1;
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