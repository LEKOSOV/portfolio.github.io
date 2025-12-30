function slowScroll(id) {
	var offset = 120;
	$('html,body').animate ({
		scrollTop: $(id).offset ().top - offset
	}, 500);
// return false;
};

window.onscroll = function showHeader() {
	var header = document.querySelector('.header');
	if (window.pageYOffset > 200) {
		header.classList.add('header_fixed')
	} else {
		header.classList.remove('header_fixed')
	}
}