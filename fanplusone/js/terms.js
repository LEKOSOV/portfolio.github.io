$(function() {
	$('#first-btn').click(function() {
		$('#first').show();
		$('#second').hide();
		$(this).css('color', '#3F01E7');
		$('#second-btn').css('color', 'rgba(0,0,0,0.6)');
	})
	$('#second-btn').click(function() {
		$('#first').hide();
		$('#second').show();
		$(this).css('color', '#3F01E7');
		$('#first-btn').css('color', 'rgba(0,0,0,0.6)');
	})
})