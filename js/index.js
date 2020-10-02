$(document).ready(function () {

	$('[data-toggle=tooltip]').tooltip();
	$(".top").tooltip({
		placement: "top"
	});
	$('[data-toggle="tooltip"]').tooltip({
		container: 'body'
	});

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


	$("a, button, input, [tabindex='0'], .slideToggle").on("keyup", function (e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9) {
			$(this).css('outline', 'dashed 3px #4599ff')
		}

	})
	$("a, button, input, [tabindex='0'], .slideToggle").on('focusout', function() {
		$(this).css('outline', 'none')
	})

	$(" .slideToggle").on("keyup", function (e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9) {
			$(this).find('.heading').css('outline', 'dashed 3px #4599ff')
		}

	})
	$(".slideToggle").on('focusout', function() {
		$(this).find('.heading').css('outline', 'none')
	})


	$(".cards").on("keyup", function (e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9) {
			$(this).find('.flip-card').css('outline', 'dashed 3px #4599ff')
		}

	})
	$(".cards").on('focusout', function() {
		$(this).find('.flip-card').css('outline', 'none')
	})

	$('.cards').on("keyup", function (e) {

		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 13) {

			$(this).find('.flip-card-inner').toggleClass('flipIt')
		}
	});

	$('.whiteBubble').on("keyup", function (e) {

		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 13) {


			$('#myModal').modal('show')
		}
	});



	$('.whiteBubble').on('mouseenter',function() {
		$(this).find('.rightBubble').hide()
		$(this).find('.new').show().css('display', 'flex')
	})

	$('.whiteBubble').on('mouseleave',function() {
		$(this).find('.rightBubble').show()
		$(this).find('.new').hide().css('display', 'none')
	})



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


	var toggle = function (){
		$(this).closest('.key1').find('.slideUp').slideToggle('800')

		$(this).closest('.key1').find('.navyFont i').toggleClass('rotate')

	}
	$('.slideToggle').keypress(
		toggle

	).click(
		toggle
	);


	var toggleAll = function (){

		if (!$(this).hasClass('hiddenKey')) {

			$(this).html('<i class="far fa-expand-arrows"></i> key').addClass('hiddenKey')

			$(this).closest('.keys').find('.key1').slideUp('800')

			$(this).addClass('funBubble')

			if ($(document).innerWidth() > 767) {
				setTimeout(function() {
					$('.toggleAll').css({
						"transform" : "rotate(-90deg)"
					});
				}, 500)
			}


		}

		else {

			$('.toggleAll').hide()
			$(this).html('collapse all <i class="far fa-compress-arrows-alt"></i>').removeClass('hiddenKey')

			$(this).closest('.keys').find('.key1').slideDown('800')

			$(this).removeClass('funBubble')

			if ($(document).innerWidth() > 767) {
				setTimeout(function() {

					$('.toggleAll').show()

					$('.toggleAll').css({
						"transform" : "rotate(0deg)"
					});
				}, 500)

			}


		}

	}
	$('.toggleAll').keypress(
		toggleAll

	).click(
		toggleAll
	);



	var allStickyRels = $(".allResults");


	var closeAllStickyRels = function(){
		for( i=0; i<allStickyRels.length; i++ ){
			$(allStickyRels[i]).removeClass("showDiv");
		}
	}

	$(".allResults").mouseenter(function(){

		if( $(this).hasClass('purple')) {

			// var slides = $(this).closest('.whiteBubble').find('.slideThisDown')
			//
			// $(slides).addClass('activeSlide')
			// //
			// // var slides = $(this).closest('.whiteBubble').find('.slideThisDown')
			//
			// // $('.slideThisDown').not(this).each(function() {
			// // 	$(this).removeClass('activeSlide')
			// // })

			$(this).closest('.whiteBubble').find('.slideThisDown').addClass('purpleSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('aquaSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('blueSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('salmonSlide')

			$(this).closest('.whiteBubble').find('.slideThisDown p').html('Every student in FS088 should be reported either in FS005 or FS006')

		}


		if( $(this).hasClass('aqua2')) {

			$(this).closest('.whiteBubble').find('.slideThisDown').addClass('aquaSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('purpleSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('blueSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('salmonSlide')

			$(this).closest('.whiteBubble').find('.slideThisDown p').html('Every student in FS088 should be reported either in FS006 or FS005')
		}

		if( $(this).hasClass('periwinkle')) {

			$(this).closest('.whiteBubble').find('.slideThisDown').addClass('blueSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('purpleSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('aquaSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('salmonSlide')

			$(this).closest('.whiteBubble').find('.slideThisDown p').html('Every child counted in FS088 must have at least one removal counted on file FS143')
		}

		if( $(this).hasClass('salmon')) {

			console.log('salmon')

			$(this).closest('.whiteBubble').find('.slideThisDown').addClass('salmonSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('purpleSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('aquaSlide')
			$(this).closest('.whiteBubble').find('.slideThisDown').removeClass('blueSlide')

			$(this).closest('.whiteBubble').find('.slideThisDown p').html('Every child counted in FS088 must have at least one removal counted on file FS143')
		}

		if (!$(this).hasClass('showDiv')) {


			$(this).closest('.whiteBubble').find('.slideThisDown').slideDown()
			$(this).closest('.whiteBubble').addClass('clear')
			closeAllStickyRels();
			$(this).addClass("showDiv");
		};
	});


	$('.filter-attr-list').on('mouseleave', function(e) {
		$(this).removeClass("showDiv");
		closeAllStickyRels();
		$(this).closest('.whiteBubble').removeClass('clear')
		$(this).closest('.whiteBubble').find('.slideThisDown').slideUp()

	})





})
