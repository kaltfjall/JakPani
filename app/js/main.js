jQuery(document).ready(function ($) {
	$('.workwithus-carousel').owlCarousel({
		margin: 10,
		nav: true,
		loop: true,
		autoplay: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	})
	$('.instatestimonials-carousel').owlCarousel({
		margin: 10,
		nav: true,
		loop: true,
		autoplay: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1200: {
				items: 5
			}
		}
	})
})