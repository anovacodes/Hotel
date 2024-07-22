export class Menu {
    isClosing = false

    constructor(options = {}) {
        this.menu = document.getElementById(options.menuId)
        this.burger = options.burger
    }

    get isActive() {
        return this.menu.classList.contains("active")
    }

    toggle() {
        if (!this.menu) return

        if (this.isActive) {
            this.close()
        } else {
            this.open()
        }
    }

    onClose() {
        if (this.isClosing) return

        this.isClosing = true

        this.menu.classList.add("hidden")
        this.burger.classList.remove("active")

        setTimeout(() => {
            this.menu.classList.remove("hidden")
            this.isClosing = false
        }, 750)
    }

    open() {
        document.body.style.overflow = "hidden"
        this.menu.classList.add("active")
    }

    close() {
        this.onClose()
        document.body.style.overflow = "unset"
        this.menu.classList.remove("active")
    }
}