import Swiper from "swiper"

export const thumbsSlider = (
    featuredSliderSelector,
    thumbsSliderSelector,
    {
        featuredSliderSettings,
        thumbsSliderSettings
    },
    withModal = false
) => {
    const exists1 = document.querySelector(featuredSliderSelector)
    const exists2 = document.querySelector(thumbsSliderSelector)

    if (!exists1 || !exists2) return

    const thumbsSlider = new Swiper(thumbsSliderSelector, thumbsSliderSettings)
    const featuredSlider = new Swiper(
        featuredSliderSelector,
        Object.assign(featuredSliderSettings, {
            thumbs: {
                swiper: thumbsSlider
            }
        })
    )
}