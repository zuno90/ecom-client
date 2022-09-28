export const useCarouselSettings = (
    numberOfItem?: number,
    numberOfScroll?: number,
    autoplay?: boolean | null,
    changingSpeed?: number | null
) => {
    return {
        className: numberOfItem && numberOfScroll ? "__product-slider" : "",
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        infinite: true,
        autoplay: autoplay ?? false,
        speed: 500,
        autoplaySpeed: changingSpeed ?? 1500,
        adaptiveHeight: true,
        slidesToShow: numberOfItem ?? 1,
        slidesToScroll: numberOfScroll ?? 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: numberOfItem ?? 1,
                    slidesToScroll: numberOfScroll ?? 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: numberOfItem && numberOfItem > 3 ? 3 : 1,
                    slidesToScroll: numberOfScroll && numberOfScroll > 3 ? 3 : 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
}
