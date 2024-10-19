import { Menu } from "./mobile-menu.js"

export const burgerMenu = (id, menuId) => {
    const burger = document.getElementById(id)
    const menu = new Menu({ burger, menuId })

    if (!burger) return null

    burger.addEventListener("click", () => {
        burger.classList.toggle("active")

        window.innerWidth <= 768 && menu.toggle()
    })
}