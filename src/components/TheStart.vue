<template>
	<div>
		<section id="body">
			<img id="bg-top" src="img/main/bg-top.gif" alt="bg-top.gif">
			<img id="logo" class="animated pulse" src="img/main/logo.png" alt="logo.png">
			<h5>8 (962) 808-84-79, 8 (3852) 58-45-35</h5>
			<nav>
				<router-link v-for="item in $parent.menu"
							:id="item.route"
							:key="item.route" 
							:to="{name: item.route}"
							active-class="pink"
							replace>
					<h4> {{ item.title}} </h4>
				</router-link>
			</nav>
			<img id="bg-bottom" src="img/main/bg-bottom.gif" alt="bg-bottom.gif">
		</section>
		<section id="animation">
			<div id="animationAdult">
				<div id="bottle"><img src="img/animation/anim-bottle.png" alt="bottle"></div>
				<div id="stopper"><img src="img/animation/anim-stopper.png" alt="stopper"></div>
				<div id="ring"><img src="img/animation/anim-ring.png" alt="ring"></div>
				<div id="glass"><img src="img/animation/anim-glass.png" alt="glass"></div>
			</div>
			<div id="animationChild">
				<div id="ironman"><img src="img/animation/anim-ironman.png" alt="ironman"></div>
				<div id="fair"><img src="img/animation/anim-fair.png" alt="fair"></div>
				<div id="minion"><img src="img/animation/anim-minion.png" alt="minion"></div>
				<div id="kid"><img src="img/animation/anim-kid.png" alt="kid"></div>
				<div id="confetti1"><img src="img/animation/anim-confetti1.png" alt="confetti1"></div>
				<div id="confetti2"><img src="img/animation/anim-confetti2.png" alt="confetti2"></div>
				<div id="conus"><img src="img/animation/anim-conus.png" alt="conus"></div>
				<div id="bubble1"><img src="img/animation/anim-bubble1.png" alt="bubble1"></div>
				<div id="bubble2"><img src="img/animation/anim-bubble2.png" alt="bubble2"></div>
				<div id="bubble3"><img src="img/animation/anim-bubble3.png" alt="bubble3"></div>
				<div id="bubble4"><img src="img/animation/anim-bubble4.png" alt="bubble4"></div>
			</div>
		</section>
	</div>
</template>

<script>

	window.onload = function() {
		setPositionForMinion();
		$(window).resize(setPositionForMinion);
		$('#adult').hover(startAnimationAdult, finishAnimationAdult);
		$('#child').hover(startAnimationChild, finishAnimationChild);
		$('#animationAdult').hide();
		$('#animationChild').hide();
	};

	function setPositionForMinion() {
		$('#minion img').css('left', function() {
			return $(window).width()/2-250;
		});
	}

	let ironmanID, oscillationID;
	function startAnimationAdult() {
		$('#animationAdult').show();
		$('#bg-bottom').animate({bottom: -190}, 300);
		$('#bottle img').animate({height: '+=450px', bottom: '+=300px'}, 500);
		$('#stopper img').animate({height: '+=300px', bottom: '+=1080px', left: '+=350px'},
							1000, function() {
			$('#stopper img').css({height: 150, bottom: -150, left: 0});
		});
		$('#ring img').animate({bottom: '+=150px', left: '+=100px'}, 300);
		$('#glass img').animate({height: '+=300px', right: '+=400px'}, 500);
	}

	function finishAnimationAdult() {
		$('#bg-bottom').animate({bottom: 0}, 300);
		$('#bottle img').animate({height: '-=450px', bottom: '-=300px'}, 300);
		$('#ring img').animate({bottom: '-=150px', left: '-=100px'}, 300);
		$('#glass img').animate({height: 300, right: -400}, 300);
	}

	function startAnimationChild() {
		setTimeout(function() {
			startIronmanAnimation();
			ironmanID = setInterval(startIronmanAnimation, 5000);
		}, 500);
		$('#animationChild').show();
		$('#bg-bottom').animate({bottom: -190}, 300);
		$('#minion img').animate({bottom: -100}, 300);
		$('#kid img').animate({bottom:0, right:0}, 500);
		$('#fair img').animate({bottom: -100, left: -100}, 500, startOscillation);
		$('#confetti1 img').animate({right: 250, bottom:0}, 500)
							.animate({width: '+=300px', height: '+=300px'},
								{queue:false, duration:5000});
		$('#confetti2 img').animate({right: 0, bottom: 300}, 500)
							.animate({width: '+=300px', height: '+=300px'},
								{queue:false, duration:5000});
		$('#conus img').animate({right: '+=500px', bottom: '+=1080px'}, 1500, function() {
				$('#conus img').css({right: -150, bottom:0});
		});
		$('#bubble1 img').animate({width: '+=125px', height: '+=108px', top: 100, left: 100},
							1000, bubble1Up);
		$('#bubble2 img').animate({width: '+=62px', height: '+=88px', bottom: 100, left: 300},
							1000, bubble2Up);
		$('#bubble3 img').animate({width: '+=75px', height: '+=47px', bottom: 400,	left: 500},
							1000, bubble3Up);
		$('#bubble4 img').animate({width: '+=75px', height: '+=80px', bottom: 700, left: 1100},
							1000, bubble4Up);
	}

	function finishAnimationChild() {
		setTimeout(function() {
			clearInterval(oscillationID);
			clearInterval(ironmanID);
		}, 500);
		$('#bg-bottom').animate({bottom:0}, 300);
		$('#fair img').stop(true).animate({left: -500,	bottom: -500}, 300);
		$('#minion img').animate({bottom: -500}, 300);
		$('#kid img').animate({right: -500,	bottom: -500}, 300);
		$('#confetti1 img').stop().animate({width:200, height:222, right:-200, bottom:0}, 300);
		$('#confetti2 img').stop().animate({width:200, height:170, right:-200, bottom:0}, 300);
		$('#bubble1 img').stop(true).animate({width:250, height:216, left:-250, top:100}, 300);
		$('#bubble2 img').stop(true).animate({width:125, height:177, left:100, bottom:-177}, 300);
		$('#bubble3 img').stop(true).animate({width:150, height:94, left:500, bottom:-94}, 300);
		$('#bubble4 img').stop(true).animate({width:150, height:160, left:1000, bottom:-160}, 300);
	}

	function startIronmanAnimation() {
		$('#ironman img').animate({top: '-=800px', left: '+=1500px'}, 1000,
							function() {$(this).css({top: 300, left: -500});
		});
	}

	function startOscillation() {
		oscillationID = setInterval(function() {
		let offsetX = "+=" + (Math.floor(Math.random() * 50 - 25));
		let offsetY = "+=" + (Math.floor(Math.random() * 50 - 25));
		$('#fair img').animate({left: offsetX, bottom: offsetY}, 2000);
		$('#bubble1 img').animate({left: offsetX, top: offsetY}, 2000);
		$('#bubble2 img').animate({left: offsetX, bottom: offsetY}, 1000);
		$('#bubble3 img').animate({left: offsetX, bottom: offsetY}, 1500);
		$('#bubble4 img').animate({left: offsetX, bottom: offsetY}, 1200);
		}, 500);
	}

	function bubble1Up() {
		$('#bubble1 img').animate({width:'-=64px',height:'-=54px'},	10000, bubble1Down);
	}

	function bubble1Down() {
		$('#bubble1 img').animate({width:'+=64px',height:'+=54px'},	10000, bubble1Up);
	}

	function bubble2Up() {
		$('#bubble2 img').animate({width:'-=31px',height:'-=44px'},	8000, bubble2Down);
	}

	function bubble2Down() {
		$('#bubble2 img').animate({width:'+=31px',height:'+=44px'},	8000, bubble2Up);
	}

	function bubble3Up() {
		$('#bubble3 img').animate({width:'-=38px',height:'-=24px'},	16000, bubble3Down);
	}

	function bubble3Down() {
		$('#bubble3 img').animate({width:'+=38px',height:'+=24px'},	16000, bubble3Up);
	}

	function bubble4Up() {
		$('#bubble4 img').animate({width:'-=38px',height:'-=40px'},	7000, bubble4Down);
	}

	function bubble4Down() {
		$('#bubble4 img').animate({width:'+=38px',height:'+=40px'},	7000, bubble4Up);
	}

</script>

<style lang="scss">

	#body {
		min-width: 800px;
		text-align: center;
		#bg-top {
			width: 100%
		}
		#logo {
			width: 60%;
			max-width: 1000px;
		}
		nav {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			margin: 0 auto;
			width: 70%;
			a {
				border-bottom: 2px solid rgba(254, 0, 148, 0);
				border-top: 2px solid rgba(254, 0, 148, 0);
			}
			a:hover {
				border-bottom: 2px solid rgb(254, 0, 148);
				border-top: 2px solid rgb(254, 0, 148);
				text-decoration: none;
			}
		}
		#bg-bottom {
			width: 100%;
			position: absolute;
			bottom: 0;
			left: 0;
			z-index: -1;
		}
	}

	@media (max-height: 450px) {
		#bg-bottom {display: none}
	}

	@media (max-width: 800px), (orientation: portrait) {
		#animation, #bg-bottom {display: none}
		#body a, #body h5, #body #logo {margin-top: 5%}
	}
	/*******************************ANIMATION***********************************/

	#animation img {
		position: absolute;
		z-index: -1;
	}

	#bottle img {
		height: 0;
		bottom: -300px;
		left: 0;
	}

	#stopper img {
		height: 150px;
		bottom: -150px;
		left: 0;
	}

	#ring img {
		height: 200px;
		left: 150px;
		bottom: -200px;
	}

	#glass img {
		height: 300px;
		right: -450px;
		bottom: 100px;
	}

	#ironman img {
		width: 500px;
		left: -500px;
		top: 300px;
	}

	#fair img {
		width: 500px;
		left: -500px;
		bottom: -500px;
	}

	#minion img {
		width: 500px;
		left: 500px;
		bottom: -500px;
	}

	#kid img {
		width: 500px;
		right: -500px;
		bottom: -500px;
	}

	#confetti1 img, #confetti2 img {
		width: 200px;
		right: -200px;
		bottom: 0;
	}

	#conus img {
		width: 150px;
		right: -150px;
		bottom: 0;
	}

	#bubble1 img {
		width: 250px;
		left: -250px;
		top: 100px;
	}

	#bubble2 img {
		width: 125px;
		left: 100px;
		bottom: -170px;
	}

	#bubble3 img {
		width: 150px;
		left: 500px;
		bottom: -150px;
	}

	#bubble4 img {
		width: 150px;
		left: 1000px;
		bottom: -150px;
	}

</style>