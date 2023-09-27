$(function () {
  //도트&nav, 휠----------------------------------------
  $("section").each(function (index) {
    console.log(index); //로그로 찍어봤을 때 섹션의 인덱스를 가져오는걸 알 수 있음.
    //밑의 예시는 섹션별로 선택한 것이 아닌 첫번째 섹션의 다음 인덱스 번호가 나왔을 때를 선택한 거임
    // 따로 선택하고싶으면 섹션별 인덱스 0 1 2 니까 선택하고 명령 넣으면 된다
    $(this).on("mousewheel", function () {
      console.log(event.wheelDelta);
      let moveTop = $(window).scrollTop();
      let elsel = $("section").eq(index);

      if (event.wheelDelta < 0) {
        if ($(elsel).next() != undefined) {
          try {
            moveTop = $(elsel).next().offset().top;
            $(".dot span").css("color", "#bbb").removeClass("on");
            $(".dot span")
              .eq(index + 1)
              .css("color", "#333")
              .addClass("on");
            $(".innernav li").children().removeClass("on");
            $(".innernav li")
              .eq(index + 1)
              .children()
              .addClass("on");
            //2페이지 휠 애니메이션
            $(".skillw").addClass("widthon");
          } catch (e) {}
        }
      } else {
        if ($(elsel).prev() != undefined) {
          try {
            moveTop = $(elsel).prev().offset().top;
            $(".dot span").css("color", "#bbb").removeClass("on");
            $(".dot span")
              .eq(index - 1)
              .css("color", "#333")
              .addClass("on");
            $(".innernav li").children().removeClass("on");
            $(".innernav li")
              .eq(index - 1)
              .children()
              .addClass("on");
            $(".skillw").addClass("widthon");
          } catch (e) {}
        }
      }
      $("html,body")
        .stop()
        .animate({ scrollTop: moveTop + "px" }, 500);
    });
  });
});

//페이지별 선택 예시
$(document).ready(main);

// initiate full page scroll

$("#fullpage").fullpage({
  scrollBar: true,
  responsiveWidth: 400,
  navigation: true,
  navigationTooltips: ["home", "about", "portfolio", "contact", "connect"],
  anchors: ["home", "about", "portfolio", "contact", "connect"],
  menu: "#myMenu",
  fitToSection: false,

  afterLoad: function (anchorLink, index) {
    var loadedSection = $(this);

    //using index
    if (index == 1) {
      /* add opacity to arrow */
      $(".fa-chevron-down").each(function () {
        $(this).css("opacity", "1");
      });
      $(".header-links a").each(function () {
        $(this).css("color", "white");
      });
      $(".header-links").css("background-color", "transparent");
    } else if (index != 1) {
      $(".header-links a").each(function () {
        $(this).css("color", "black");
      });
      $(".header-links").css("background-color", "white");
    }

    //using index
    if (index == 2) {
      /* animate skill bars */
      $(".skillbar").each(function () {
        $(this)
          .find(".skillbar-bar")
          .animate(
            {
              width: $(this).attr("data-percent"),
            },
            2500
          );
      });
    }
  },
});
