$(document).ready(function($){
	$(".theme-1-select").on('click', function(){
		$("body").addClass("theme-1").removeClass("theme-2");
		
		return false;
	});
	$(".theme-2-select").on('click', function(){
		$("body").addClass("theme-2").removeClass("theme-1");
		$("html").css("height","100%");
		
		return false;
	});
});