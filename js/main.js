$(document).on("scroll", function () {
  let st = $(this).scrollTop();
  console.log(st);
  if (st > 0) {
    $("header>div.menu").addClass("active2");
  } else {
    $("div.menu").removeClass("active2");
  }
});
$("div.login").on("click", function () {
  $("div.click").fadeIn(500);
});
