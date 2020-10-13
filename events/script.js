$('.technical-btn').click(function(){
	$(".ideate-btn").removeClass("clicked-btn");
	$(".informals-btn").removeClass("clicked-btn");
	$(".shield-btn").removeClass("clicked-btn");
	$(".preevents-btn").removeClass("clicked-btn");
	$(".technical-btn").toggleClass("clicked-btn");
	// cards
	$(".ideate-section").addClass("hidden");
	$(".informals-section").addClass("hidden");
	$(".shield-section").addClass("hidden");
	$(".preevents-section").addClass("hidden");
	$(".technical-section").toggleClass("hidden");
})

$('.ideate-btn').click(function(){
	$(".technical-btn").removeClass("clicked-btn");
	$(".informals-btn").removeClass("clicked-btn");
	$(".shield-btn").removeClass("clicked-btn");
	$(".preevents-btn").removeClass("clicked-btn");
	$(".ideate-btn").toggleClass("clicked-btn");
	// cards
	$(".technical-section").addClass("hidden");
	$(".informals-section").addClass("hidden");
	$(".shield-section").addClass("hidden");
	$(".preevents-section").addClass("hidden");
	$(".ideate-section").toggleClass("hidden");
})

$('.informals-btn').click(function(){
	$(".technical-btn").removeClass("clicked-btn");
	$(".ideate-btn").removeClass("clicked-btn");
	$(".shield-btn").removeClass("clicked-btn");
	$(".preevents-btn").removeClass("clicked-btn");
	$(".informals-btn").toggleClass("clicked-btn");
	// cards
	$(".technical-section").addClass("hidden");
	$(".ideate-section").addClass("hidden");
	$(".shield-section").addClass("hidden");
	$(".preevents-section").addClass("hidden");
	$(".informals-section").toggleClass("hidden");
})

$('.shield-btn').click(function(){
	$(".technical-btn").removeClass("clicked-btn");
	$(".ideate-btn").removeClass("clicked-btn");
	$(".informals-btn").removeClass("clicked-btn");
	$(".preevents-btn").removeClass("clicked-btn");
	$(".shield-btn").toggleClass("clicked-btn");
	// cards
	$(".technical-section").addClass("hidden");
	$(".ideate-section").addClass("hidden");
	$(".informals-section").addClass("hidden");
	$(".preevents-section").addClass("hidden");
	$(".shield-section").toggleClass("hidden");
})

$('.preevents-btn').click(function(){
	$(".technical-btn").removeClass("clicked-btn");
	$(".ideate-btn").removeClass("clicked-btn");
	$(".informals-btn").removeClass("clicked-btn");
	$(".shield-btn").removeClass("clicked-btn");
	$(".preevents-btn").toggleClass("clicked-btn");
	// cards
	$(".technical-section").addClass("hidden");
	$(".ideate-section").addClass("hidden");
	$(".informals-section").addClass("hidden");
	$(".shield-section").addClass("hidden");
	$(".preevents-section").toggleClass("hidden");
})

if (window.innerWidth < 768){
	$(".technical-section").addClass("hidden");
	$(".technical-btn").removeClass("clicked-btn")
}
