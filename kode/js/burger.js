$(function () {
	$('.burger-btn').on('click', function(e) {
		e.preventDefault;
		$(this).toggleClass('burger-btn_active');
		$('.burger').toggleClass('burger-active');
		$('.burger-navs').toggleClass('show');
		if ($('.burger').hasClass('burger-active')) {
			$('body').css('overflow', 'hidden')
		} else {
			$('body').css('overflow', 'unset')
		}
	})
})