export const handleAnimatedDropdown = event => {
    const { type } = event.target.dataset

    if (type !== "dropdown") return

    const item = event.target.parentElement
    const list = item.lastElementChild
    const listHeight = list.scrollHeight

    toggleActive(item, list, listHeight)
}

function toggleActive(item, list, listHeight) {
    if (item.classList.contains("active")) {
        item.classList.remove("active")
        list.style.setProperty("max-height", `0px`)
    } else {
        item.classList.add("active")
        list.style.setProperty("max-height", `${listHeight}px`)
    }

}