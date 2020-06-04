

window.onload = function () {
  $(".navCont").niceScroll({
    cursorcolor: "rgba(52, 125, 138, 0.596)",
    scrollspeed: 90,
    cursorwidth: "7px",
    cursorborder: "0px solid #fff",
    mousescrollstep: 10,
  });
};

const modal = document.querySelector(".nav>.navCont");
const modalFix = document.querySelector(".navItems");
const burger = document.querySelector(".burger");
const burgerFix = document.querySelector(".burger>span");

window.onclick = function (event) {
  if ($(".navCont").hasClass("active")) {
    if (event.target != modalFix && event.target != modalFix) {
      $(".navCont").toggleClass("active");
      $(".burger").toggleClass("activeB");
      $("body").toggleClass("scrollLock");
    }
  } else if (event.target == burger || event.target == burgerFix) {
    $(".navCont").toggleClass("active");
    $(".burger").toggleClass("activeB");
    $("body").toggleClass("scrollLock");
  }
};

let imgPromoHeight = $(".img-promo").css("height");
let imgPromoY = parseInt(imgPromoHeight, 10);

window.onscroll = function () {
  if (imgPromoY - 65 <= pageYOffset) {
    $(".logoCont").addClass("navColored");
  } else {
    $(".logoCont").removeClass("navColored");
  }
};


window.onload = function () {
  $("body").niceScroll({
    cursorcolor: "rgba(52, 125, 138, 0.596)",
    scrollspeed: 60,
    cursorwidth: "9px",
    cursorborder: "0px solid #fff",
  });

  $(".numsBlock__num").countUp({
    time: 500,
    delay: 1,
  });
};

//# sourceMappingURL=main.js.map
