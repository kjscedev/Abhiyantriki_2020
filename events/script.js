// $(".technical-btn").click(function () {
//   $("button").css({
//     color: "white",
//     "background-color": "transparent",
//     "border-color": "white",
//   });
//   $(this).css({
//     color: "black",
//     "background-color": "white",
//     "border-color": "black",
//   });
//   $(".cards").css({ display: "none" });
//   $(".technical-section").css({ display: "grid" });
// });

// $(".ideate-btn").click(function () {
//   $("button").css({
//     color: "white",
//     "background-color": "transparent",
//     "border-color": "white",
//   });
//   $(this).css({
//     color: "black",
//     "background-color": "white",
//     "border-color": "black",
//   });
//   $(".cards").css({ display: "none" });
//   $(".ideate-section").css({ display: "grid" });
// });

// $(".informals-btn").click(function () {
//   $("button").css({
//     color: "white",
//     "background-color": "transparent",
//     "border-color": "white",
//   });
//   $(this).css({
//     color: "black",
//     "background-color": "white",
//     "border-color": "black",
//   });
//   $(".cards").css({ display: "none" });
//   $(".informals-section").css({ display: "grid" });
// });

// $(".shield-btn").click(function () {
//   $("button").css({
//     color: "white",
//     "background-color": "transparent",
//     "border-color": "white",
//   });
//   $(this).css({
//     color: "black",
//     "background-color": "white",
//     "border-color": "black",
//   });
//   $(".cards").css({ display: "none" });
//   $(".shield-section").css({ display: "grid" });
// });

// $(".preevents-btn").click(function () {
//   $("button").css({
//     color: "white",
//     "background-color": "transparent",
//     "border-color": "white",
//   });
//   $(this).css({
//     color: "black",
//     "background-color": "white",
//     "border-color": "black",
//   });
//   $(".cards").css({ display: "none" });
//   $(".preevents-section").css({ display: "grid" });
// });

// default
$(".technical-btn").css({
  backgroundColor: "white",
  color: "black",
});
// $(".cards").css({ display: "none" });
// $(".technical-section").css({ display: "grid" });

$('.technical-btn').click(function(){
  $(".ideate-section").addClass("hidden");
  $(".informals-section").addClass("hidden");
  $(".shield-section").addClass("hidden");
  $(".preevents-section").addClass("hidden");
  $(".technical-section").toggleClass("hidden");
})

$('.ideate-btn').click(function(){
  $(".technical-section").addClass("hidden");
  $(".informals-section").addClass("hidden");
  $(".shield-section").addClass("hidden");
  $(".preevents-section").addClass("hidden");
  $(".ideate-section").toggleClass("hidden");
})

$('.informals-btn').click(function(){
  $(".technical-section").addClass("hidden");
  $(".ideate-section").addClass("hidden");
  $(".shield-section").addClass("hidden");
  $(".preevents-section").addClass("hidden");
  $(".informals-section").toggleClass("hidden");
})

$('.shield-btn').click(function(){
  $(".technical-section").addClass("hidden");
  $(".ideate-section").addClass("hidden");
  $(".informals-section").addClass("hidden");
  $(".preevents-section").addClass("hidden");
  $(".shield-section").toggleClass("hidden");
})

$('.preevents-btn').click(function(){
  $(".technical-section").addClass("hidden");
  $(".ideate-section").addClass("hidden");
  $(".informals-section").addClass("hidden");
  $(".shield-section").addClass("hidden");
  $(".preevents-section").toggleClass("hidden");
})
