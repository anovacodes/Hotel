import Swiper from "swiper"
import { Pagination, Autoplay, EffectFade, Thumbs, FreeMode, Navigation } from "swiper/modules"

import { burgerMenu } from "./modules/burger.js"
import { thumbsSlider } from "./modules/thumbs-slider.js"
import { handleCounter } from "./modules/counter.js"
import { handleDefaultModal } from "./modules/default-modal.js"
import { handleViewButtons } from "./modules/handleViewButtons.js"
import { handleAnimatedDropdown } from "./modules/dropdown.js"
import { handleCalendar } from "./modules/calendar.js"
import { 
    handleShowFullComment,
    handleShowFullReviews
} from "./modules/showFullComment.js"
import "./modules/datepicker.js"
import "./modules/map.js"
import "./modules/rating.js"
import { cursorHeroAnimation } from "./modules/animations.js"

burgerMenu("burger-menu", "mobile-menu")

handleViewButtons("[data-type='view-button']", "rooms-list")
handleCalendar("#dycalendar-today-with-skin-shadow")

export function initSwiper(selector, options) {
    if (document.querySelector(selector)) {
        return new Swiper(selector, options)
    }
}


initSwiper("#hero-slider", {
    modules: [ Pagination, EffectFade, Autoplay ],
    loop: true,
    speed: 1500,
    effect: "fade",
    fadeEffect: { crossFade: true },
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: "#hero-slider__pagination",
        clickable: true
    },
    on: {
        init: swiper => cursorHeroAnimation(swiper, true)
    }
})

const servicesImageSlider1 = initSwiper("#services-img-slider-1", {
    modules: [ EffectFade ],
    effect: "fade",
    fadeEffect: { crossFade: true },
})

const servicesSlider1 = initSwiper("#services-slider-1", {
    modules: [ Pagination, EffectFade ],
    effect: "fade",
    fadeEffect: { crossFade: true },
    pagination: {
        el: "#services-slider-pagin-1",
        clickable: true
    },
    on: {
        slideChange: swiper => {
            const { activeIndex } = swiper

            servicesImageSlider1.slideTo(activeIndex)
        }
    }
})

const servicesImageSlider2 = initSwiper("#services-img-slider-2", {
    modules: [ EffectFade ],
    effect: "fade",
    fadeEffect: { crossFade: true },
})

const servicesSlider2 = initSwiper("#services-slider-2", {
    modules: [ Pagination, EffectFade ],
    effect: "fade",
    fadeEffect: { crossFade: true },
    pagination: {
        el: "#services-slider-pagin-2",
        clickable: true
    },
    on: {
        slideChange: swiper => {
            const { activeIndex } = swiper

            servicesImageSlider2.slideTo(activeIndex)
        }
    }
})

thumbsSlider(
    "#thumbs-slider-1-1",
    "#thumbs-slider-1-2",
    {
        featuredSliderSettings: {
            modules: [ Thumbs, Navigation ],
            spaceBetween: 10,
            navigation: {
                prevEl: "#room-slider-arrow-left",
                nextEl: "#room-slider-arrow-right"
            }
        },
        thumbsSliderSettings: {
            modules: [ FreeMode ],
            slidesPerView: 2,
            spaceBetween: 5,
            freeMode: true,
            breakpoints: {
                545: {
                    slidesPerView: 4
                },
                360: {
                    slidesPerView: 3
                }
            }
        }
    },
    true
)

document.addEventListener("click", event => {
    handleCounter(event)
    handleDefaultModal(event)
    handleAnimatedDropdown(event)
    handleShowFullComment(event)
    handleShowFullReviews(event)
})



