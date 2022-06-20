$(function () {
	let w = $(window);
	parallax(w.scrollTop());
	w.on('scroll', function () {
		let top = $(this).scrollTop();
		parallax(top);
	});
});
function parallax(top) {
	$('.RoundedRectangle8').css(
		'transform', 'translateY(' + (top / -4) + 'px)'
	);
	$('.RoundedRectangle9').css(
		'transform', 'translateY(' + (top / -2) + 'px)'
	);
	$('.RoundedRectangle10').css(
		'transform', 'translateY(' + (top / -1.25) + 'px)'
	);
	$('.RoundedRectangle13').css(
		'transform', 'translateY(' + (top / -2) + 'px)'
	);
	$('.RoundedRectangle12').css(
		'transform', 'translateY(' + (top / -1.25) + 'px)'
	);
}