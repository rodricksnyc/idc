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

	$('.whiteBubble').on("keyup", function (e) {

		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 13) {


			$('#myModal').modal('show')
		}
	});



$('.whiteBubble').on('mouseenter',function() {
	$(this).find('.rightBubble').hide()
	$(this).find('.new').fadeIn().css('display', 'flex')
})

$('.whiteBubble').on('mouseleave',function() {
	$(this).find('.rightBubble').show()
	$(this).find('.new').fadeOut().css('display', 'none')
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

setTimeout(function() {
	$('.toggleAll').css({
		"transform" : "rotate(-90deg)"
	});
}, 500)




}

else {

	$('.toggleAll').hide()
	$(this).html('collapse all <i class="far fa-compress-arrows-alt"></i>').removeClass('hiddenKey')

	$(this).closest('.keys').find('.key1').slideDown('800')

	$(this).removeClass('funBubble')

	setTimeout(function() {

	$('.toggleAll').show()

		$('.toggleAll').css({
			"transform" : "rotate(0deg)"
		});
	}, 500)


}

}
$('.toggleAll').keypress(
	toggleAll

).click(
	toggleAll
);



// var clickLastNav = function() {
//
//
//
// 	// $('.nav-link:eq(3)').on('click', function() {
// 	if (!$('.nav-link:eq(3)').hasClass('bars')) {
//
// 		$('.stickyNav .nav .nav-item').last().css('background', 'transparent')
//
//
// 		$('.nav-link:eq(3)').html('<i class="fas fa-bars"></i>').addClass('bars')
// 		$('.nav-item:not(:last-child)').hide()
//
// 		$('.nav-item').last().css({
// 			'margin' : '0em'
// 		})
//
// 		$('.nav-item .nav-link').last().css({
// 			'padding' : '.4rem 1rem'
// 		})
//
// 		$('.nav-item i').last().css('font-size', '27px')
//
// 	}
//
// 	else {
//
// 		$('.stickyNav .nav .nav-item').last().css('background', 'transparent')
//
// 		$('.nav-item:not(:last-child)').show()
//
// 		$('.nav-link:eq(3)').html('<i class="far fa-compress-arrows-alt"></i>').removeClass('bars')
//
// 		$('.nav-item').last().css({
// 			'margin' : '0em 0em 1em 0em'
// 		})
// 		$('.nav-item .nav-link').last().css({
// 			'padding' : '.5rem 1rem'
// 		})
//
// 		$('.nav-item i').last().css('font-size', '1.5rem')
//
// 	}
//
//
//
// }
//
// $('.nav-link:eq(3)').keypress(
// 	clickLastNav
//
// ).click(
// 	clickLastNav
// );




})
