const slider = document.querySelector('.brands__slider');
const wrapper = document.querySelector('.brands__wrapper');
const item = document.querySelectorAll('.brands__item')
const brandsBtn = document.querySelector('.brands__btn')

function sliderSwiper() {
	new Swiper(slider, {
		spaceBetween: 16,
		slidesPerView: 'auto',
		// loop: true,
		initialSlide: 0,
		watchOverflow: true,
		grabCursor: true,
	})
}

if (window.innerWidth <= 320) {
	slider.classList.toggle('swiper-container')
	wrapper.classList.toggle('swiper-wrapper')
	item.forEach(element => {
		element.classList.toggle('swiper-slide')
	});
	brandsBtn.remove()
	sliderSwiper()
}