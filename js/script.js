window.addEventListener("load", function () {
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3500, // 시간 설정
      disableOnInteraction: false, // false-스와이프 후 자동 재생
      loop: true,
    },
  });
});
