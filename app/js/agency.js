(function($) {
	"use strict"; // Start of use strict
	
	// Smooth scrolling using jQuery easing
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html, body').animate({
				scrollTop: (target.offset().top - 54)
			}, 1000, "easeInOutExpo");
			return false;
		}
	}
});
$(".scrolldown").on("click", function (event) {
	event.preventDefault();
	var id = $(this).attr('href'),
	top = $(id).offset().top;
	$('body,html').animate({
		scrollTop: top
	}, 1000);
});

$(function() {
	// при нажатии на кнопку scrollup
	$('.scrollup').click(function() {
		// переместиться в верхнюю часть страницы
		$("html, body").animate({
			scrollTop:0
		},1000);
	})
})
// при прокрутке окна (window)
$(window).scroll(function() {
	// если пользователь прокрутил страницу более чем на 200px
	if ($(this).scrollTop()>500) {
		// то сделать кнопку scrollup видимой
		$('.scrollup').fadeIn();
	}
	// иначе скрыть кнопку scrollup
	else {
		$('.scrollup').fadeOut();
	}
		if ($(this).scrollTop()>500) {
		// то сделать кнопку scrollup видимой
		$('.dws-desctop').fadeIn();
	}
	// иначе скрыть кнопку scrollup
	else {
		$('.dws-desctop').fadeOut();
	}
});

// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(function() {
	$('.navbar-collapse').collapse('hide');
});

// Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
	target: '#mainNav',
	offset: 56
});

// Collapse Navbar
var navbarCollapse = function() {
	if ($("#mainNav").offset().top > 100) {
		$("#mainNav").addClass("navbar-shrink");
	} else {
		$("#mainNav").removeClass("navbar-shrink");
	}
};
// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);

// Hide navbar when modals trigger
$('.collections-modal').on('show.bs.modal', function(e) {
	$('.navbar').addClass('d-none');
})
$('.collections-modal').on('hidden.bs.modal', function(e) {
	$('.navbar').removeClass('d-none');
})

})(jQuery); // End of use strict
