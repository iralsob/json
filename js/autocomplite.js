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
	console.log(input);
	input.after( "<ul id='"+input.id+"-result'></ul>" );

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
					$('#'+input.id+'-result li').remove();
					for(var i=0; i<data.length; i++) {
						$('#'+input.id+'-result').append('<li>'+data[i].Name+'</li>');
					}
				}
			});
		}
	});

	$('#'+input.id+'result').on('click', 'li', function(){

		input.val($(this).html());
	});
}