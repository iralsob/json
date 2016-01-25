function autocomplite (input) {
	
	var inputId = input.selector.substr(1);
	console.log(inputId);
	input.after( "<ul id='"+inputId+"-result'></ul>" );

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
					$('#'+inputId+'-result li').remove();
					if (data.length == 1) {
						input.val(data[0].Name);
					} else {
						for(var i=0; i<data.length; i++) {
							$('#'+inputId+'-result').append('<li>'+data[i].Name+'</li>');
						}
					}
				}
			});
		}
	});

	$('body').on('click', '#'+inputId+'-result li', function(){
		input.val($(this).html());
	});
}

function getAllJson (select) {
	var start = 'part=';
	$.ajax({
		type: 'POST',
		url: 'http://prep.snegoffon.ru/Json/Preps',
		cache: false,
		data: start,
		success: function(data){
			for(var i=0; i<data.length; i++) {
				select.append('<option>'+data[i].Name+'</option>');
			}
		}
	});
}