$(document).ready(function(){
	$( "#input" ).after( "<ul id='result'></ul>" );

	$("#input").keyup(function (e) {
		var value = $("input").val();
		if(value.length>2){
			var url = 'part='+$("input").val();
			$.ajax({
				type: 'POST',
				url: 'http://prep.snegoffon.ru/Json/Preps',
				cache: false,
				data: url,
				success: function(data){
					$('#result li').remove();
					for(var i=0; i<data.length; i++) {
						$('#result').append('<li>'+data[i].Name+'</li>');
					}
				}
			});
		}
	});

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
	$('#result').on('click', 'li', function(){
		$('#input').val($(this).html());
	});
});
function autocomplite (value) {
	alert(value);
}