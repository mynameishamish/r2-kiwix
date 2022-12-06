var swiper = new Swiper(".imgSwiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    slidesPerGroup: 3,
    autoplay: {
      delay: 2000, 
    },
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });