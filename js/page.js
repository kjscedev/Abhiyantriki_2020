$(".scroll").click(function (e) {
  console.error("here afdsjl");

  e.preventDefault();
  var target = $(this).attr("href");

//   console.log(target);

  if (target.length < 2) return;

  var element = document.querySelector(target);

  if (element) {
    var offsetPosition = element.getBoundingClientRect().top;

    element.scrollIntoView({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
});


