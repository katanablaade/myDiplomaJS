import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const slider = () => {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation],
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    breakpoints: {
      365: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiperServices = new Swiper('.swiper-services', {
    modules: [Navigation],
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
      365: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};
export default slider;
