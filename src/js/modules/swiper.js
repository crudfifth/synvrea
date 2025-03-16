document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    freeMode: true,
    slidesPerView: 'auto',
    speed: 1000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    allowTouchMove: false,
  });

  const swiperContainer = document.querySelector('.swiper-container');

  swiperContainer.addEventListener('mouseenter', () => {
    swiper.autoplay.stop();
    swiper.slideTo(swiper.activeIndex, 0, false);
  });

  swiperContainer.addEventListener('mouseleave', () => {
    swiper.autoplay.start();
  });
});