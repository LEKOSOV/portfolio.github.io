/* main */
$(function() {
	$('#cat1').click(function() {
		$(this).addClass('main-cat-active asd');
		$('#cat2').removeClass('main-cat-active asd');
		$('#cat3').removeClass('main-cat-active asd');
		$('#cat4').removeClass('main-cat-active asd');
	})
	$('#cat2').click(function() {
		$(this).addClass('main-cat-active asd');
		$('#cat1').removeClass('main-cat-active asd');
		$('#cat3').removeClass('main-cat-active asd');
		$('#cat4').removeClass('main-cat-active asd');
	})
	$('#cat3').click(function() {
		$(this).addClass('main-cat-active asd ads');
		$('#cat1').removeClass('main-cat-active asd');
		$('#cat2').removeClass('main-cat-active asd');
		$('#cat4').removeClass('main-cat-active asd');
	})
	$('#cat4').click(function() {
		$(this).addClass('main-cat-active asd');
		$('#cat1').removeClass('main-cat-active asd');
		$('#cat2').removeClass('main-cat-active asd');
		$('#cat3').removeClass('main-cat-active asd');
	})
})

/* projects */
$(function() {
	$('.main-grid li').click(function() {
		$(this).toggleClass('li-active');
	})
	$('.right-item').hover(function(){
		$('.right-item-inner').slideToggle()
	})
})

/* see more */
$(function() {
	$('.more-btn').click(function() {
		let h = $('#height-info').height();
		if (h >= 1640) {
			$('.right-grid').css({
				'overflow': 'unset',
				'maxHeight': 'unset'
			})
		} else {
			return false
		}
	})
})

/* fixed projects */
window.onscroll = function showHeader() {
	var projects = document.querySelector('#main-categories-navs');
	var projects_li = document.querySelector('#main-links');
	if (window.pageYOffset > 100) {
		projects.classList.add('projects_fixed');
		if ($('body').width() <= 769) {
			projects_li.classList.add('projects_fixed');
			projects_li.classList.add('projects_fixed_2');
		} else {
			return false
		}
	} else {
		projects.classList.remove('projects_fixed');
		if ($('body').width() <= 769) {
			projects_li.classList.remove('projects_fixed');
			projects_li.classList.remove('projects_fixed_2');
		} else {
			return false
		}
	}
}