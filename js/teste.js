// carrosel

var owl = $("div[data-year]");

$('div[data-year]').first().owlCarousel({
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
			nav: false
		}
	}
});

$(".owl-buttons").owlCarousel({
	items: 1,
	dots: false,
	nav: true,
	center: true,
	onTranslated: callback,
});

var dataYear = $(".owl-buttons .center button").attr('id');

var atual = 0;
var ultimaPos = 0;

function callback (atual) {
	atual = $(".owl-buttons .center").closest(".owl-item").index();

	dataYear = $(".owl-buttons .center button").attr('id');
	$('.changeYear-btn').removeClass('active-btn');
	$(".owl-buttons .center button").addClass("active-btn");
	owl.trigger('destroy.owl.carousel');

	$("div[data-year='"+ dataYear +"']").owlCarousel({
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
				nav: false
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