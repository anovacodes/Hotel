import { CountUp } from "countup.js"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger.js"
import { isMobile } from "../utils/isMobile.js"
import { getHeaderHeight } from "../utils/headerHeight.js"

gsap.registerPlugin(ScrollTrigger)

const useCountUpAnimation = () => {
    const items = document.querySelectorAll("[data-type='count-up']")
    
    if (!items.length) return

    items.forEach(item => {
        const { id } = item
        const { startValue, endValue, decimalPlaces } = item.dataset

        const countUp = new CountUp(id, endValue, {
            startVal: startValue,
            decimalPlaces,
            enableScrollSpy: true,
            scrollSpyOnce: true
        })
        
        if (!countUp.error) {
            countUp.start()
        } else {
            console.log(countUp.error)
        }
    })
}

const useRatingProgressAnimation = () => {
    const progressLines = document.querySelectorAll("[data-type='progress']")
    
    if (!progressLines.length) return

    progressLines.forEach(line => {
        gsap.from(line, {
            scrollTrigger: {
                trigger: line,
                start: "bottom bottom"
            },
            width: 0,
            duration: 2
        })
    })
}

const useResortAnimation = () => {
    const resortContainer = document.getElementById("resort-container")

    if (!resortContainer || isMobile()) return

    const resortHeader = document.getElementById("resort-header")
    const resortButton = resortHeader.parentElement.lastElementChild

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: resortContainer,
            start: "top 85%",
        }
    })

    tl
        .from(resortHeader.children, {
            y: -20,
            opacity: 0,
            duration: .5,
            stagger: .15
        }, 0.2)
        .from("#resort-title", {
            xPercent: -20,
            opacity: 0,
            duration: .5
        }, 0)
        .from("#resort-text", {
            opacity: 0,
            duration: .5
        }, 0.2)
        .from(resortButton, {
            transformOrigin: "top",
            scaleY: 0,
            opacity: 0,
            duration: .25
        }, 0.5)
        .from("#resort-image-1", {
            xPercent: 30,
            duration: 1
        }, 0)
        .from("#resort-image-2", {
            width: 0,
            duration: 1
        }, 0)
        .from("#resort-image-3", {
            transformOrigin: "bottom",
            scaleY: 0,
            duration: 1
        }, 0)
}

const useSectionHeaderAnimation = () => {
    const sectionHeaders = document.querySelectorAll("[data-type='section-header']")

    if (!sectionHeaders.length) return

    sectionHeaders.forEach(sectionHeader => {
        const sectionTitles = sectionHeader.querySelector("[data-type='section-title']")
        const sectionSuptitles = sectionHeader.querySelector("[data-type='section-suptitle']")
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionHeader,
                start: "top 85%"
            }
        })

        tl
            .from(sectionSuptitles, {
                yPercent: 80,
                opacity: 0,
                duration: 1
            }, 0)
            .from(sectionTitles, {
                xPercent: -30,
                opacity: 0,
                duration: 1
            }, 0)
    })
}

const useBestRoomsAnimation = () => {
    const bestRoomsList = document.getElementById("best-rooms-list")

    if (!bestRoomsList || isMobile()) return

    const items = Array.from(bestRoomsList.children)
    const bigCard = items[0]
    const miniCards = items.slice(1)

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: bestRoomsList,
            start: "top 85%"
        }
    })

    tl
        .from(bigCard, {
            transformOrigin: "top center",
            scaleY: 0,
            opacity: 0,
            duration: 1
        }, 0)
        .from(miniCards, {
            xPercent: 30,
            opacity: 0,
            duration: 1,
            stagger: .15
        }, 0)
}

const usePackagesAnimation = () => {
    const packages = document.getElementById("packages")

    if (!packages || isMobile()) return

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: packages,
            start: "top 85%"
        }
    })

    tl.fromTo(packages, {
        gridTemplateColumns: "1fr 2fr"
    }, {
        gridTemplateColumns: "1fr 1fr",
        duration: 1
    })
}

const useBlogAnimation = () => {
    const blog = document.getElementById("blog")

    if (!blog || isMobile()) return

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: blog,
            start: "top 85%"
        }
    })

    tl
        .from("#blog-item-1", {
            xPercent: 100,
            opacity: 0,
            duration: 1
        }, 0)
        .from("#blog-item-2", {
            transformOrigin: "bottom center",
            xPercent: -100,
            scaleY: 0,
            opacity: 0,
            duration: 1
        }, 0)
        .from("#blog-item-3", {
            yPercent: -100,
            opacity: 0,
            duration: 1
        }, 0)
        .from("#blog-item-4", {
            yPercent: 100,
            opacity: 0,
            duration: 1
        }, 0)
        .from("#blog-item-5", {
            xPercent: -100,
            opacity: 0,
            duration: 1
        }, 0)
        .from("#blog-item-6", {
            xPercent: 100,
            opacity: 0,
            duration: 1
        }, 0)
}

export const cursorHeroAnimation = (swiper, isInit) => {
    const [ currentSlide ] = swiper.visibleSlides
    const slider = swiper.hostEl
    const headerHeight = getHeaderHeight()

    if (!slider || !currentSlide) return

    if (isInit) {
        slider.addEventListener("mousemove", moveElementsFromCursor)
        slider.addEventListener("mouseleave", setDefaultTransform)
    } 

    const collections = [
        slider.querySelectorAll(".hero-slider__suptitle"),
        slider.querySelectorAll(".hero-slider__line"),
        slider.querySelectorAll(".hero-slider__title"),
        slider.querySelectorAll(".hero-slider__button")
    ]

    const { clientWidth, clientHeight } = currentSlide

    function moveElementsFromCursor(event) {
        let { x, y } = event
        
        y -= headerHeight

        collections.forEach(collection => {
            for (let block of collection) {
                const { speed = 15 } = block.dataset

                block.style.transform = `translate(${(-x + clientWidth / 2) / speed}px, ${(-y + clientHeight / 2) / speed}px)`
            }
        })
    }

    function setDefaultTransform() {
        collections.forEach(collection => {
            for (let block of collection) {
                block.style.transition = "transform .25s"
                block.style.transform = "translate(0, 0)"

                setTimeout(() => {
                    block.style.transition = "transform 0s"
                }, 250)
            }
        })
    }
}

useCountUpAnimation()
useRatingProgressAnimation()
useResortAnimation()
useSectionHeaderAnimation()
useBestRoomsAnimation()
usePackagesAnimation()
useBlogAnimation()