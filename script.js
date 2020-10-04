var display = 1;
$("#sponsor_2020").show();
$(document).ready(function(){
  $("button").click(function(){
    $("#sponsor_2020").focus(function(){
      $(".first").css("display", "block");
    });
  });
});

$(document).ready(function(){
  $("button").click(function(){
    $("#sponsor_2019").focus(function(){
      $(".second").css("display", "block");
    });
  });
});

$(document).ready(function(){
  $("button").click(function(){
    $("#sponsor_2018").focus(function(){
      $(".third").css("display", "block");
    });
  });
});

$(document).ready(function(){
  $("button").click(function(){
    $("#sponsor_2017").focus(function(){
      $(".fourth").css("display", "block");
    });
  });
});
