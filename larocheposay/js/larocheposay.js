//슬라이드 ▼----------------------------------------------------------------------------------
let slideani = document.getElementById("slideShow");
let slides = document.querySelector(".slides");
let slideImg = document.querySelectorAll(".slides li");
let dots = document.querySelectorAll(".dot");
let currentIdx = 0;
let slideCount = slideImg.length;
dots[0].className += " active";
let prev = document.querySelector(".prev"); //이전 버튼
let next = document.querySelector(".next"); //다음 버튼
let slideWidth = 1280; //슬라이드이미지 넓이
makeClone(); // 처음이미지와 마지막 이미지 복사 함수
initfunction(); //슬라이드 넓이와 위치값 초기화 함수
function makeClone() {
  let cloneSlide_first = slideImg[0].cloneNode(true);
  let cloneSlide_last = slides.lastElementChild.cloneNode(true);
  slides.append(cloneSlide_first); //선택한 요소를 마지막 배치
  slides.insertBefore(cloneSlide_last, slides.firstElementChild);
}
function initfunction() {
  slides.style.width = slideWidth * (slideCount + 2) + "px";
  slides.style.left = -slideWidth + "px";
}
function showSlide(n) {
  for (i = 0; i < slideImg.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[n].className += " active";
  slides.style.left = -(n + 1) * slideWidth + "px";
  slides.style.transition = "0.5s";
}
function currentSlide(n) {
  showSlide((currentIdx = n));
}
next.onclick = function () {
  if (currentIdx <= slideCount - 1) {
    //슬라이드이동
    slides.style.left = -(currentIdx + 2) * slideWidth + "px";
    slides.style.transition = "0.5s";
  }
  if (currentIdx === slideCount - 1) {
    //마지막 슬라이드 일때
    setTimeout(function () {
      //0.5초동안 복사한 첫번째 이미지에서, 진짜 첫번째 위치로 이동
      slides.style.left = -slideWidth + "px";
      slides.style.transition = "0s";
    }, 500);
    currentIdx = -1;
  }
  currentIdx += 1;
  for (i = 0; i < slideImg.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[currentIdx].className += " active";
};
prev.onclick = function () {
  //이전 버튼 눌렀을때
  console.log(currentIdx);
  if (currentIdx >= 0) {
    slides.style.left = -currentIdx * slideWidth + "px";
    slides.style.transition = "0.5s";
  }
  if (currentIdx === 0) {
    setTimeout(function () {
      slides.style.left = -slideCount * slideWidth + "px";
      slides.style.transition = "0s";
    }, 500);
    currentIdx = slideCount;
  }
  currentIdx -= 1;
  for (i = 0; i < slideImg.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[currentIdx].className += " active";
};
let interval = setInterval(function () {
  next.onclick();
}, 3000);
function slide_stop() {
  clearInterval(interval);
}
function slide_start() {
  interval = setInterval(function () {
    next.onclick();
  }, 3000);
}
slideani.addEventListener("mouseenter", function () {
  slide_stop();
});
slideani.addEventListener("mouseleave", function () {
  slide_start();
});

//상품 슬라이드 ▼----------------------------------------------------------------------------------

//스킨솔루션 ▼----------------------------------------------------------------------------------
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

//롤링배너 ▼----------------------------------------------------------------------------------
window.onload = function () {
  //rolling banner(왼쪽)
  var $imgLeftWidth = $(".banner_wraper.left img").width();
  var bannerLeft = 0;
  var first = 1;
  var last;
  var imgCnt = 0;
  var $imgLeft = $(".banner_wraper.left img");
  var $first;
  var $last;

  $imgLeft.each(function () {
    // 5px 간격으로 배너 처음 위치 시킴
    $(this).css("left", bannerLeft);
    bannerLeft += $(this).width() + 5; // 여기서 배너 사이 간격 조절
    $(this).attr("id", "banner" + ++imgCnt); // img에 id 속성 추가
  });

  last = imgCnt;

  function rollingLeft() {
    rollingLeftStart = setInterval(function () {
      $imgLeft.each(function () {
        $(this).css("left", $(this).position().left - 1); // 1px씩 왼쪽으로 이동
      });
      $first = $("#banner" + first);
      $last = $("#banner" + last);
      if ($first.position().left < -$imgLeftWidth) {
        // 제일 앞에 배너 제일 뒤로 옮김
        $first.css("left", $last.position().left + $last.width() + 5); // 여기서 배너 사이 간격 조절
        first++;
        last++;
        if (last > imgCnt) {
          last = 1;
        }
        if (first > imgCnt) {
          first = 1;
        }
      }
    }, 30); //여기 값을 조정하면 속도를 조정할 수 있다.
  }

  // 롤링 시작
  rollingLeft();

  // 이미지에 마우스 올라갔을 때 롤링 Stop
  $imgLeft.hover(
    function () {
      clearInterval(rollingLeftStart);
    },
    function () {
      rollingLeft();
    }
  );

  //rolling banner(오른쪽)
  var $imgRightWidth = $(".banner_wraper.right img").width();
  var $mainWidth = $(".banner_wraper").width();
  var bannerRight = -$imgRightWidth + $mainWidth;
  var rightFirst = 10; // 배너이미지 숫자 + 1
  var rightLast;
  var rightImgCnt = 9; // 배너이미지 숫자
  var $imgRight = $(".banner_wraper.right img");
  var $rightFirst;
  var $rightLast;
  $imgRight.each(function () {
    // 배너 처음 위치 시킴
    $(this).css("left", bannerRight);
    bannerRight -= $(this).width() + 5; // 여기서 배너 사이 간격 조절
    $(this).attr("id", "banner" + ++rightImgCnt); // img에 id 속성 추가
  });

  rightLast = rightImgCnt;

  function rollingRight() {
    rollingRightStart = setInterval(function () {
      $imgRight.each(function () {
        $(this).css("left", $(this).position().left + 1); // 1px씩 왼쪽으로 이동
      });
      $rightFirst = $("#banner" + rightFirst);
      $rightLast = $("#banner" + rightLast);
      if ($rightFirst.position().left > $mainWidth) {
        // 제일 앞에 배너 제일 뒤로 옮김
        $rightFirst.css(
          "left",
          $rightLast.position().left - $rightLast.width() - 5
        ); // 여기서 배너 사이 간격 조절
        rightFirst++;
        rightLast++;
        if (rightLast > rightImgCnt) {
          rightLast = 10; // 배너이미지 숫자 + 1
        }
        if (rightFirst > rightImgCnt) {
          rightFirst = 10; // 배너이미지 숫자 + 1
        }
      }
    }, 30); //여기 값을 조정하면 속도를 조정할 수 있다.
  }

  // 롤링 시작
  rollingRight();

  // 이미지에 마우스 올라갔을 때 롤링 Stop
  $imgRight.hover(
    function () {
      clearInterval(rollingRightStart);
    },
    function () {
      rollingRight();
    }
  );
};
