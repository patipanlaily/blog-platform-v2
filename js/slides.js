let bannerSlide = new Splide('.banner-slide', {
    type    : 'loop',
    autoplay: true,
});
bannerSlide.mount();

let popularSlide = new Splide( '.popular-slide', {
    type   : 'loop',
    autoplay: true,
    mediaQuery: 'min',
    breakpoints: {
		768: {
			perPage: 3,
		},
		576: {
			perPage: 2,
		},
    },
    perPage: 1,
    perMove: 1,
    gap: 24,
});

popularSlide.mount();