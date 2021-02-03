// slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");

	var tela = $(window).width();

	if (n > slides.length) {
		slideIndex = 1
	}    
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";

	if (tela > 1829) {
		slideIndex++;
		if (slideIndex > slides.length) {
			slideIndex = 1
		}
		setTimeout(showSlides, 8000);
	}


}

$(document).ready(function(){
	rolagemPag();
	$('#dot').on('click', function(e){
		e.preventDefault();
		$(this).addClass('active');
	});


	//menu fixo ao rolar

	function rolagemPag() {
		var rolagem = $(window).scrollTop();
		if (rolagem > 90) {
			$(".menu-topo").addClass("menu-fixed").addClass("logoPos");
		} else {
			$(".menu-topo").removeClass("menu-fixed").removeClass("logoPos");
		}
	}

	$(window).scroll(function(){
		rolagemPag();
	});


	//animacao do footer
	$('#button').click(function() {
		$(".expediente").animate({
			width: "toggle",
			height: "toggle"
		}, 500);

		$("#button i").toggleClass("down");
	});

});