$(function () {
  $(".skin_product").css({ display: "none" });
  $(".skin_product").eq(0).css("display", "flex");
  $(".skin_btn li").eq(0).find("a").addClass("on");
  $(".skin_btn li").click(function (e) {
    e.preventDefault();
    let i = $(this).index();
    if ($(".skin_product").eq(i).css("display") == "flex") {
    } else {
      $(".skin_product").eq(i).siblings().css({ display: "none" });
      $(".skin_product").eq(i).stop().slideDown();
      $(".skin_btn li a").removeClass("on");
      $(".skin_btn li").eq(i).find("a").addClass("on");
    }
  });
});
