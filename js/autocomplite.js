$(document).ready(function(){
	

	var start = 'part=';
	$.ajax({
		type: 'POST',
		url: 'http://prep.snegoffon.ru/Json/Preps',
		cache: false,
		data: start,
		success: function(data){
			for(var i=0; i<data.length; i++) {
				$('#all').append('<option>'+data[i].Name+'</option>');
			}
		}
	});
});
function autocomplite (input) {
	input.after( "<ul id='"+input+"-result'></ul>" );

	input.keyup(function (e) {
		var value = input.val();
		if(value.length>2){
			var url = 'part='+input.val();
			$.ajax({
				type: 'POST',
				url: 'http://prep.snegoffon.ru/Json/Preps',
				cache: false,
				data: url,
				success: function(data){
					$('#'+input+'-result li').remove();
					for(var i=0; i<data.length; i++) {
						$('#'+input+'-result').append('<li>'+data[i].Name+'</li>');
					}
				}
			});
		}
	});

	$('#'+input+'result').on('click', 'li', function(){
		input.val($(this).html());
	});
}