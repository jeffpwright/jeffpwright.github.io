$(function(){

	$("#stage").load('starscape.svg',function(response){

		$(this).addClass("svgLoaded");
		
		if(!response){ // Error loading SVG
			$(this).html('Error loading SVG. Be sure you are running from a the http protocol (not locally)');
		}

	});
});