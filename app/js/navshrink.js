// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		document.getElementById("mainNav").style.padding = "0px 5px";
		document.getElementById("mainNav").style.backgroundColor = "#21252860"
		document.getElementById("logo").style.height = "50px";


	} else {
		document.getElementById("mainNav").style.padding = "25px 5px";
		document.getElementById("mainNav").style.backgroundColor = "#212529c7"
		document.getElementById("logo").style.height = "73px";
	}
} 