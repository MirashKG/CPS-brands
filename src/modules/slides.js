const wrapper = document.querySelector('.wrapper');
const brandsWrapper = document.querySelector('.brands__wrapper');
const item = document.querySelectorAll('.brands__item')
const brandsBtn = document.querySelector('.brands__btn')

if (window.innerWidth <= 320) {
	slider.classList.toggle('swiper-container')
	brandsWrapper.classList.toggle('swiper-wrapper')
	item.forEach(element => {
		element.classList.toggle('swiper-slide')
	});
	brandsBtn.remove()
	sliderSwiper()
}

function sliderSwiper() {
	new Swiper(wrapper, {
		spaceBetween: 16,
		slidesPerView: 'auto',
		// loop: true,
		initialSlide: 0,
		watchOverflow: true,
		grabCursor: true,
		pagination: {
			el: ".swiper-pagination",
		  },
	})
}
