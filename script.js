// var display = 1;
// $("#sponsor_2020").show();
// $(document).ready(function(){
//   $("button").click(function(){
//     $("#sponsor_2020").focus(function(){
//       $(".first").css("display", "block");
//     });
//   });
// });

// $(document).ready(function(){
//   $("button").click(function(){
//     $("#sponsor_2019").focus(function(){
//       $(".second").css("display", "block");
//     });
//   });
// });

// $(document).ready(function(){
//   $("button").click(function(){
//     $("#sponsor_2018").focus(function(){
//       $(".third").css("display", "block");
//     });
//   });
// });

// $(document).ready(function(){
//   $("button").click(function(){
//     $("#sponsor_2017").focus(function(){
//       $(".fourth").css("display", "block");
//     });
//   });
// });
let pageLoad = false;
setTimeout(() => {
  if (!pageLoad) {
    $(".preloader-anim").addClass("hidden");
    pageLoad = true;
  }
}, 5000);

window.onload = function() {
  const Effect = document.querySelector(#effect);
  window.addEventListener('scroll',scrollEffect);

  function scrollEffect() {
    if(window.scrollT>=500) {
      effect.style.opacity = '1';
      effect.style.transform = 'translateX(0px)';
      effect.style.transition = '1s ease-in-out';
    }
    else {
      effect.style.opacity = '0';
      effect.style.transform= 'translateX(-50px)';
    }
  }
}
