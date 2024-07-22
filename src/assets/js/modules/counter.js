export const handleCounter = event => {
    const { type, action } = event.target.dataset

    if (type !== "counter-button" || !action) {
        return
    }

    const datepicker = event.target.parentElement.parentElement.parentElement.parentElement
    const input = datepicker.querySelector("[data-type='number-input']")
    const numberElement = datepicker.querySelector("[data-type='num']")

    if (!input) return

    const currentValue = Number(input.value)

    switch (action) {
        case "increase":
            input.value = currentValue + 1
            numberElement.textContent = currentValue + 1

            break
        case "decrease":
            if (currentValue > 1) {
                input.value = currentValue - 1
                numberElement.textContent = currentValue - 1
            }

            break
    }
}