const btnShow = document.querySelector('.show-btn');
const wrapper = document.querySelector('.wrapper');
const brandsWrapper = document.querySelector('.brands__wrapper');
const item = document.querySelectorAll('.brands__item');
const brandsBtn = document.querySelector('.brands__btn');

btnShow.addEventListener('click', () => {
  btnShow.classList.toggle('show-btn_active');
  if (btnShow.textContent == 'Показать все') {
    btnShow.textContent = 'Cкрыть';
    brandsWrapper.style.height = '100%';
  } else if (btnShow.textContent == 'Cкрыть') {
    btnShow.textContent = 'Показать все';
    brandsWrapper.style.height = 72 * 2 + 16 + 'px';
  }
});

let windowWidth = window.innerWidth;
let swiperSlider = new Swiper(wrapper, {
    init: false,
    slidesPerView: 'auto',
    loop: true,
    initialSlide: 0,
    watchOverflow: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

function sliderFunc(width) {
  if (width <= 540) {
    brandsBtn.style.display = 'none';
    wrapper.classList.add('swiper-container');
    brandsWrapper.classList.add('swiper-wrapper');
    item.forEach((element) => {
      element.classList.add('swiper-slide');
    });
    brandsWrapper.style.height = 72 + 16 + 'px';
    swiperSlider.init();
  }
  if (width > 540) {
    brandsBtn.style.display = 'block';
    wrapper.classList.remove('swiper-container');
    brandsWrapper.classList.remove('swiper-wrapper');
    item.forEach((element) => {
      element.classList.remove('swiper-slide');
    });
    brandsWrapper.style.height = 72 * 2 + 16 + 'px';
  }
}
sliderFunc(windowWidth);

window.addEventListener('resize', (e) => {
  windowWidth = e.currentTarget.innerWidth;
  sliderFunc(windowWidth);
});
