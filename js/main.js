$(document).ready(function(){

	$('#button').click(function() {
		$(".expediente").animate({
			width: "toggle",
			height: "toggle"
		}, 500);

		$("#button i").toggleClass("down");
	});

});