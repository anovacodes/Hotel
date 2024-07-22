import { isMobile } from "../utils/isMobile.js"

import { getScrollBarWidth } from "../utils/scrollbarWidth.js"
import { initSwiper } from "../index.js"

export const handleDefaultModal = event => {
    if (event.target.nodeName === "HTML") return

    const { type } = event.target.dataset

    switch (type) {
        case "relax-modal":
            modal.setContent(
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/jNQXAC9IVRw?si=OoRKtWOXZERJViy8" title="YouTube video player" allowfullscreen></iframe>',
                true
            )
            setTimeout(modal.open, 25)
            break
        case "gallery-modal":
            const { id } = event.target.dataset

            if (!id) return
            
            modal.setContent(`
                <div class="swiper gallery-slider" id="gallery-slider">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" data-closable="true">
                            <img class="gallery-slider__image" src="assets/images/around/1.jpeg" alt="image">
                        </div>
            
                        <div class="swiper-slide" data-closable="true">
                            <img class="gallery-slider__image" src="assets/images/around/2.jpeg" alt="image">
                        </div>
            
                        <div class="swiper-slide" data-closable="true">
                            <img class="gallery-slider__image" src="assets/images/around/3.jpeg" alt="image">
                        </div>
                    </div>
                </div>   
            `)

            setTimeout(() => modal.open(id, "#gallery-slider"), 25)

            break
        case "room-slider-modal":
            const { id: imageId } = event.target.dataset
            
            if (!imageId) return

            modal.setContent(`
                <div class="swiper room-slider__modal" id="room-slider">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img class="room-slider__image" src="assets/images/rooms/1.jpeg" alt="image">
                        </div>

                        <div class="swiper-slide">
                            <img class="room-slider__image" src="assets/images/rooms/2.jpeg" alt="image">
                        </div>

                        <div class="swiper-slide">
                            <img class="room-slider__image" src="assets/images/rooms/3.jpeg" alt="image">
                        </div>

                        <div class="swiper-slide">
                            <img class="room-slider__image" src="assets/images/rooms/4.jpeg" alt="image">
                        </div>

                        <div class="swiper-slide">
                            <img class="room-slider__image" src="assets/images/rooms/5.jpeg" alt="image">
                        </div>

                        <div class="swiper-slide">
                            <img class="room-slider__image" src="assets/images/rooms/6.jpeg" alt="image">
                        </div>
                    </div>
                </div>
            `)

            setTimeout(() => modal.open(imageId, "#room-slider"), 25)

            break
    }
}

class Modal {
    isClosing = false

    constructor(selector) {
        this.modal = document.querySelector(selector)
        this.content = null

        this.init()
    }

    init() {
        if (!this.modal) return

        this.modal.addEventListener("click", event => {
            const { closable } = event.target.dataset

            if (closable) {
                this.close()
            }
        })
    }

    onClose() {
        if (this.isClosing) return
        
        this.isClosing = true
        
        this.modal.classList.add("hidden")

        setTimeout(() => {
            this.modal.classList.remove("hidden")
            this.isClosing = false

            document.body.style.overflow = "unset"
            document.documentElement.style.borderRight = `0`

            this.destroy()
        }, 500)
    }

    open(initialSlide = 0, sliderSelector) {
        if (!isMobile()) {
            document.documentElement.style.borderRight = `${getScrollBarWidth()}px solid #f1f1f1`
        }

        document.body.style.overflow = "hidden"

        this.modal.classList.add("active")

        if (sliderSelector) {
            initSwiper(sliderSelector, {
                spaceBetween: 100,
                initialSlide
            })
        }
    }

    close() {
        this.onClose()
        this.modal.classList.remove("active")
    }

    destroy() {
        const content = this.modal.querySelector(".modal__content")

        content.remove()
    }

    setContent(html, isVideo = false) {
        const div = document.createElement("div")

        div.classList.add("modal__content")

        if (isVideo) {
            div.classList.add("modal__content_video")
        }

        div.innerHTML = html

        this.modal.append(div)
    }
}

const modal = new Modal("#modal")