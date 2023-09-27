let slides = document.querySelector(".slides");
let slideImg = document.querySelectorAll(".slides li");
let dots = document.querySelectorAll(".dot");
let currentIdx = 0;
let slideCount = slideImg.length;
dots[0].className += " active";
let slideWidth = 1600; //슬라이드이미지 넓이
document.querySelector(".show").style.backgroundColor = bg[0];
initfunction(); //슬라이드 넓이와 위치값 초기화 함수
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
