$(document).ready(function(){
	
	$('#word').keyup(function(){
		if ($(this).val().length > 0) {
			search($(this).val());
		}
		else {
			$('#word').removeClass('yup');
			$('#word').removeClass('nope');
		}
	});

	var words = '';

	$.ajax({
		url: 'words.txt',
		success: function(response) {
			words = response;
			$('#loading').hide();
			$('#word').focus();
		}
	});

	function search(q) {
		q = q.toLowerCase();
		var regex = new RegExp('\\b'+q.trim()+'\\b');
		if (words.match(regex)) {
			$('#word').removeClass('nope');
			$('#word').addClass('yup');
		}
		else {
			$('#word').removeClass('yup');
			$('#word').addClass('nope');
		}
	}
});