$(function() {
	$('#sendBtn').click(function() {
		$('.modals').show().css('position', 'fixed');
		setTimeout(function() {
			$('#successGif').fadeOut(400)
		}, 1500)
	})
})