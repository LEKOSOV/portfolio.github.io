/* burger */
$(function () {
	$('.burger-btn').on('click', function(e) {
		e.preventDefault;
		$(this).toggleClass('burger-btn_active');
		$('.burger-navs').slideToggle(400).css('display', 'flex');
	})
})

/* show up btn */
$(function() {
	$(window).scroll(function() {
		if (window.pageYOffset > 200) {
			$('.up-btn').fadeIn(200);
		} else {
			$('.up-btn').fadeOut(200);
		}
	});
});

/* anchor link */
$(function(){
	setup_slight_scroll_to_anchors();
	
	function setup_slight_scroll_to_anchors() {
	    jQuery('a[href^="#"]').click(function() {
	        var link = jQuery(this);
	        if (link.attr('href') == '#') return;
	        var target = link.attr('href');
	        var target_top = jQuery(target).offset().top;
	        jQuery('html, body').animate({
	           scrollTop: target_top
	        }, 0);
	        return false;
	    });
	}
 });