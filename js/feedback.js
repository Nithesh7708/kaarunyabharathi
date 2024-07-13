new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay: 1500,
    hoverpause: true,
    breakpoints: {
        350: { perView: 1 },
        480: { perView: 2 },
        768: { perView: 2 },
        1024: { perView: 3 },
        1200: { perView: 3 },
        1900: { perView: 5 }
    }
}).mount();