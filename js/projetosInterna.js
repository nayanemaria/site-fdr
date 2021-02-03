// plugin de galeria lightslider

$(document).ready(function(){
	$('#img-responsive').on( "click", function() {
		$('#cool').toggleClass('maxSize')
	});
});

$('#lightSlider').lightSlider({
	gallery:true,
	item:1,
	thumbItem:9,
	slideMargin: 0,
	speed:500,
	auto:false,
	loop:true,
	dots:true,

	enableTouch:true,
	enableDrag:true,
	freeMove:true,
	swipeThreshold: 40,

	responsive : []
});


// plugin owl carousel (caderno digital)

$(".gallery").owlCarousel({
	items: 1,
	nav: false
});


var owl = $("div[caderno-digital]");

$('div[caderno-digital]').first().owlCarousel({
	dots: false,
	center: true,
	items: 3,
	loop: false,
	margin: 0,
	nav: false,
	responsive:{
		0: {
			items: 1,
			nav: true,
			rewind: true
		},
		769:{
			items: 3,
			nav: true
		}
	}
});

$(".owl-buttons").owlCarousel({
	items: 3,
	dots: false,
	nav: false,
	center: true,
	onTranslated: callback,
});

var cadernoDigital = $(".owl-buttons .center button").attr('id');

var atual = 0;
var ultimaPos = 0;

function callback (atual) {
	atual = $(".owl-buttons .center").closest(".owl-item").index();

	cadernoDigital = $(".owl-buttons .center button").attr('id');
	$('.changeYear-btn').removeClass('active-btn');
	$(".owl-buttons .center button").addClass("active-btn");
	owl.trigger('destroy.owl.carousel');

	$("div[caderno-digital='"+ cadernoDigital +"']").owlCarousel({
		dots: false,
		center: true,
		items: 3,
		loop: false,
		margin: 0,
		nav: false,
		responsive:{
			0: {
				items: 1,
				nav: true,
				rewind: true
			},
			769:{
				items: 3,
				nav: true,
				rewind: true
			}
		}
	});

	ultimaPos = atual;
}


$('.changeYear-btn').click(function(atual) {
	atual = $(this).closest(".owl-item").index();

	if (atual > ultimaPos) {
		$(".owl-buttons").trigger('next.owl.carousel');
	} else if (atual < ultimaPos) {
		$(".owl-buttons").trigger('prev.owl.carousel');
	}
	ultimaPos = atual;

	$('.changeYear-btn').removeClass('active-btn');
	$(this).addClass("active-btn");
});