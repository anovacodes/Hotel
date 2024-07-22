export const getScrollBarWidth = () => {
    const div = document.createElement("div")

    div.style.overflow = "scroll"

    document.body.append(div)

    const scrollbarWidth = div.offsetWidth - div.clientWidth

    div.remove()

    return scrollbarWidth
}