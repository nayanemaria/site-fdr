$('.btn-carregar-listagem').click(function() {

	var urlInicial = location.origin;
	var endpoint = "/wordpresspovoedu/pagination/?page=" + pageNumber;
	$.ajax({
		type: "GET",
		url: urlInicial + endpoint,
	})
	.done(function(data) {
		$('.conteudo').append(data);
		pageNumber += 1;
	})
});

$(".open-modal").click(function(){
	var idmodal = $(this).attr("data-id");
	$("#"+idmodal+", .overlay").show();
			// $("body").css("overflow-y", "hidden");
		});

$(".close").click(function(){
	$(".overlay").hide();
	$(this).parent().hide();
			// $("body").css("overflow-y", "auto");
		});