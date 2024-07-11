/// <reference types="../@types/jquery" />

// loader
$(function () {
  $(".loader").fadeOut(1000, function () {
    $(".loading").slideUp(1000, function () {
      $("body").css("overflow", "auto");
      $(".loading").remove();
    });
  });
});

// open button

$(".slider").on("click", function () {
  $("#leftMenu").animate({ width: "250px" }, 50);
  $(".slider").animate({ marginLeft: "250px" }, 50);
});
$(".closebtn").on("click", function () {
  $("#leftMenu").animate({ width: "0px" }, 50);
  $(".slider").animate({ marginLeft: "0px" }, 50);
});

// singer click
$(".toggle").on("click", function () {
  $(".inner").not($(this).next()).slideUp(500);
  $(this).next().slideToggle(500);
});

// timer
window.onload = function () {
  countDownToTime("6 october 2030 9:56:00");
};

function countDownToTime(countTo) {
  let futureDate = new Date(countTo);
  futureDate = futureDate.getTime() / 1000;

  let now = new Date();
  now = now.getTime() / 1000;

  timeDifference = futureDate - now;

  let days = Math.floor(timeDifference / (24 * 60 * 60));
  let hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
  let mins = Math.floor(
    (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
  );
  let secs = Math.floor(
    timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
  );

  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} h`);
  $(".minutes").html(`${mins} m`);
  $(".seconds").html(`${secs} s`);

  setInterval(function () {
    countDownToTime(countTo);
  }, 1000);
}

//textarea

var maxLength = 100;
$("textarea").keyup(function () {
  var length = $(this).val().length;
  var AmountLeft = maxLength - length;
  if (AmountLeft <= 0) {
    $("#chars").text("your available character finished");
  } else {
    $("#chars").text(AmountLeft);
  }
});
