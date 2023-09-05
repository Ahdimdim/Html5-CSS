window.onload = function () {
  //rolling banner(왼쪽)-----------------------------------------
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

  //rolling banner(오른쪽)---------------------------------------
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
