const VIEWS = [
    "rooms__list_grid",
    "rooms__list_list"
]

export const handleViewButtons = (selector, roomsListId) => {
    const buttons = document.querySelectorAll(selector)
    const roomsList = document.getElementById(roomsListId)

    if (!roomsList) return

    buttons.forEach(button => {
        button.addEventListener("click", event => {
            for (let btn of buttons) {
                btn.classList.remove("active")
            }

            event.target.classList.add("active")

            const { relativeClass } = event.target.dataset
            for (let view of VIEWS) {
                roomsList.classList.remove(view)
            }

            roomsList.classList.add(relativeClass)
        })
    })
}