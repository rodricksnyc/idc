$(document).ready(function () {

	// const prefersColorSchemeDark = window.matchMedia('(prefers-color-scheme: dark)');
	// if (prefersColorSchemeDark.matches) {
	// 	// Apply a dark color scheme
	// }

	$('.back-to-top').click(() => {
		scrollfn("#overview");
	})


	$(window).scroll(function () {
		((window.pageYOffset || document.documentElement.scrollTop) > 100) ? $('.back-to-top').css({ opacity: 1, visibility: "visible" }) : $('.back-to-top').css({ opacity: 0, visibility: "hidden" });
	});

	function scrollfn(e) {
		let $target = $(e),
		offSet = e === "#overview" ? 0 : $target.offset().top;
		$('html, body').stop().animate({
			'scrollTop': offSet
		}, 1200, 'swing');


	}


	$("a, button, input, [tabIndex='0']").on("keyup", function (e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9) {
			$(this).css('outline', 'dashed 3px #4599ff')
		}

	})
	$("a, button, input, [tabIndex='0']").on('focusout', function() {
		$(this).css('outline', 'none')
	})

	$('.whiteBubble').on("keyup", function (e) {

		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 13) {


			$('#myModal').modal('show')
		}
	});




	if ($(document).innerWidth() <= 767) {

		$(window).on('scroll', function() {
			var screenTop = $(window).scrollTop();
			var screenBottom = $(window).scrollTop() + window.innerHeight;

			$('section').each(function() {
				var elementTop = $(this).offset().top;
				var elementBottom = $(this).offset().top + $(this).outerHeight();

				if ((screenBottom > elementTop + ($(this).find('.heros').height() / 3 )) && (screenTop < elementBottom)) {
					$('section').removeClass('active')
					$(this).addClass('active')
				}
				else {
					$(this).removeClass('active')
				}
			})
			if ($('.block10').hasClass('active')) {

				$('.menu-buttons-768-list li:eq(0)').addClass('activated')
			}

			else {

				$('.menu-buttons-768-list li:eq(0)').removeClass('activated')
			}


			if ($('.block5').hasClass('active')) {

				$('.menu-buttons-768-list li:eq(1)').addClass('activated')
			}

			else {

				$('.menu-buttons-768-list li:eq(1)').removeClass('activated')
			}


			if ($('.block50').hasClass('active')) {

				$('.menu-buttons-768-list li:eq(2)').addClass('activated')
			}

			else {

				$('.menu-buttons-768-list li:eq(2)').removeClass('activated')
			}

			if ($('.block0').hasClass('active')) {

				$('.menu-buttons-768-list li:eq(0)').removeClass('activated')
				$('.menu-buttons-768-list li:eq(1)').removeClass('activated')
				$('.menu-buttons-768-list li:eq(2)').removeClass('activated')
				$('.menu-buttons-768-list li:eq(3)').removeClass('activated')
			}


		})


		// $('.menu-buttons-768-list li:eq(0)').click(function() {
		// 	$('.menu-buttons-768-list li:eq(1)').removeClass('activated')
		// 	$('.menu-buttons-768-list li:eq(2)').removeClass('activated')
		// 	$('.menu-buttons-768-list li:eq(3)').removeClass('activated')
		// })
		//
		// $('.menu-buttons-768-list li:eq(1)').click(function() {
		// 	$('.menu-buttons-768-list li:eq(0)').removeClass('activated')
		// 	$('.menu-buttons-768-list li:eq(2)').removeClass('activated')
		// 	$('.menu-buttons-768-list li:eq(3)').removeClass('activated')
		// })
		//
		// $('.menu-buttons-768-list li:eq(2)').click(function() {
		// 	$('.menu-buttons-768-list li:eq(0)').removeClass('activated')
		// 	$('.menu-buttons-768-list li:eq(1)').removeClass('activated')
		// 	$('.menu-buttons-768-list li:eq(3)').removeClass('activated')
		// })
		//
		// $('.menu-buttons-768-list li:eq(3)').click(function() {
		// 	$('.menu-buttons-768-list li:eq(0)').removeClass('activated')
		// 	$('.menu-buttons-768-list li:eq(1)').removeClass('activated')
		// 	$('.menu-buttons-768-list li:eq(2)').removeClass('activated')
		// })

		$('.landing-panel .form-control.access').focus(function () {
			$('html, body').animate({ scrollTop: ($('.landing-panel .form-control.access').offset().top - 40) }, 600);
			return false;
		});


		$("#slideOut").css("left" , 0);

		$('#slideOut').removeClass('showSlideOut')

		$("#slideOut").css("bottom" , -$('#slideOut').height() );

		var overlay = document.getElementById('whiteBlock');

		// console.log(window.getComputedStyle(overlay).height);


		$(window).on("scroll", function() {
			var docHeight = $(document).height();
			var winScrolled = $(window).height() + $(window).scrollTop(); // Sum never quite reaches
			if ((docHeight - winScrolled) > 1) {

				var setHeight = $("#contact").height() + 25;

				$("#slideOut").animate({
					bottom:'75',
					top: setHeight

				}, 10);

			}


		});



	}






	$('.radio-inline input').on('keyup', function(e) {

		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9 ) {

			$('.radio-inline input').change(function (e) {

				setReasonActive();

			})

			function setReasonActive() {
				$('.radio-inline input').each(function () {
					if ($(this).prop('checked')) {
						$(this).parents('.vertical').css('background' ,'#166da1');

					} else {
						$(this).parents('.vertical').css( 'background' ,'transparent')
					}
				})
			}

			setReasonActive()


		}
	})





	$('.radio-inline input').change(function (e) {

		setReasonActive();

	})

	function setReasonActive() {
		$('.radio-inline input').each(function () {
			if ($(this).prop('checked')) {
				$(this).closest('.vertical').find('.fas').css('color', '#7bc043')
				$(this).parents('.vertical').css('background' ,'#166da1');

			} else {
				$(this).parents('.vertical').css( 'background' ,'transparent')
				$(this).closest('.vertical').find('.fas').css('color', 'white')
			}
		})
	}

	setReasonActive()





	if ($(document).innerWidth() >= 768) {


		$(window).on('scroll', function() {
			var screenTop = $(window).scrollTop();
			var screenBottom = $(window).scrollTop() + window.innerHeight;

			$('section').each(function() {
				var elementTop = $(this).offset().top;
				var elementBottom = $(this).offset().top + $(this).outerHeight();

				if ((screenBottom > elementTop + ($(this).find('.heros').height() / 3 )) && (screenTop < elementBottom)) {
					$('section').removeClass('active')
					$(this).addClass('active')
				}
				else {
					$(this).removeClass('active')
				}
			})


			if ($('.block10').hasClass('active')) {
				$('.menu-buttons-floating-list li:eq(1)').addClass('activated')
				$('.menu-buttons-768-list li:eq(0)').addClass('activated')
			}

			else {
				$('.menu-buttons-floating-list li:eq(1)').removeClass('activated')
				$('.menu-buttons-768-list li:eq(0)').removeClass('activated')
			}


			if ($('.block5').hasClass('active')) {
				$('.menu-buttons-floating-list li:eq(2)').addClass('activated')
				$('.menu-buttons-768-list li:eq(1)').addClass('activated')
			}

			else {
				$('.menu-buttons-floating-list li:eq(2)').removeClass('activated')
				$('.menu-buttons-768-list li:eq(1)').removeClass('activated')
			}


			if ($('.block50').hasClass('active')) {
				$('.menu-buttons-floating-list li:eq(3)').addClass('activated')
				$('.menu-buttons-768-list li:eq(2)').addClass('activated')
			}

			else {
				$('.menu-buttons-floating-list li:eq(3)').removeClass('activated')
				$('.menu-buttons-768-list li:eq(2)').removeClass('activated')
			}

			if ($('.block0').hasClass('active')) {
				$('.menu-buttons-floating-list li:eq(0)').removeClass('activated')
				$('.menu-buttons-floating-list li:eq(1)').removeClass('activated')
				$('.menu-buttons-floating-list li:eq(2)').removeClass('activated')
				$('.menu-buttons-floating-list li:eq(3)').removeClass('activated')


				$('.menu-buttons-768-list li:eq(0)').removeClass('activated')
				$('.menu-buttons-768-list li:eq(1)').removeClass('activated')
				$('.menu-buttons-768-list li:eq(2)').removeClass('activated')
				$('.menu-buttons-768-list li:eq(3)').removeClass('activated')
			}

			if ($('.block50').hasClass('active')) {

				$('#slideOut').addClass('showSlideOut');

			}



			if (!$('.block50').hasClass('active') || $('.block5').hasClass('active')) {

				$('#slideOut').removeClass('showSlideOut')
			}



		})


	}




	function scrollfn(e) {
		let $target = $(e),
		offSet = e === "#Home" ? 0 : $target.offset().top;
		$('html, body').stop().animate({
			'scrollTop': offSet
		}, 1200, 'swing');

		// setTimeout(function(){
		// 	$(':focus').blur();
		// }, 1300);
	}

	$('.menu-buttons-list li, .menu-buttons-floating-list li, .menu-buttons-768-list li').on('click', function (e) {

		e.preventDefault();
		scrollfn($(this).attr('data-target'));
	});


	$('.menu-buttons-floating li').click(function() {
		$(this).addClass('activated')
	})



	$('.menu-buttons-list li, .menu-buttons-floating-list li, .menu-buttons-768-list li').on('keypress', function (e) {

		e.preventDefault();
		scrollfn($(this).attr('data-target'));
	});

	$('.collapse').on('show.bs.collapse', function () {
		$('a[href="#' + this.id + '"] .caret-down').css({
			transform: "rotate(180deg)"
		});
		$('a[href="#' + this.id + '"] .iques').css({
			opacity: "1"
		});
	});
	$('.collapse').on('hide.bs.collapse', function () {
		$('a[href="#' + this.id + '"] .caret-down').css({
			transform: "rotate(0deg)"
		});
		$('a[href="#' + this.id + '"] .iques').css({
			opacity: "0.4"
		});
	});






	$(window).scroll(function () {
		var distanceY = window.pageYOffset || document.documentElement.scrollTop;
		if (distanceY > 555) {
			$('.btnContact').css({
				top: "92px"
			})
			$('.menu-buttons-floating').css({
				opacity: '1',
				visibility: 'visible'
			})
		} else {
			$('.btnContact').css({
				top: "192px"
			})
			$('.menu-buttons-floating').css({
				opacity: '0',
				visibility: 'hidden'
			})
		}
	});

	function toggleBegin(el) {
		$(el).attr('href') === '#signin' ? (
			$('.landing-panel-p2').show(),
			$('.form-signin-heading').text('To start your survey, please enter the PIN included in your invitation letter.'),
			$('.form-login-input').hide(),
			$('.form-signin-input').show()
		) : (
			$('.landing-panel-p2 second').hide(),
			$('.form-signin-heading').text('Log in with your username and password.'),
			$('.form-signin-input').hide(),
			$('.form-login-input').show()
		);
	}






})
