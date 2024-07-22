import datepicker from "js-datepicker"

export const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const initDateRangePicker = ({ startId, endId, pickerId }) => {
    const startEl = document.querySelector(startId)
    const endEl = document.querySelector(endId)

    if (!startEl || !endEl) return

    const start = datepicker(startId, {
        id: pickerId,
        onSelect
    })

    const end = datepicker(endId, {
        id: pickerId,
        onSelect
    })

    return { start, end }
}

const picker1 = initDateRangePicker({
    startId: "#datepicker-1-1",
    endId: "#datepicker-1-2",
    pickerId: 1
})

const picker2 = initDateRangePicker({
    startId: "#datepicker-2-1",
    endId: "#datepicker-2-2",
    pickerId: 2
})

function onSelect(instance, date) {
    const dateInstance = new Date(date)

    const pickerEl = instance.parent

    const numEl = pickerEl.querySelector("[data-type='num']")
    const monthEl = pickerEl.querySelector("[data-type='month']")
    const yearEl = pickerEl.querySelector("[data-type='year']")
    const dayWeekEl = pickerEl.querySelector("[data-type='dayweek']")

    if (numEl) {
        const currentDay = dateInstance.getDate()
        numEl.textContent = currentDay < 10 ? `0${currentDay}`: currentDay
    }

    if (monthEl) {
        monthEl.textContent = instance.currentMonthName.slice(0, 3)
    }

    if (yearEl) {
        const fullMonth = instance.currentMonthName
        const fullYear = instance.currentYear

        yearEl.textContent = `${fullMonth}, ${fullYear}`
    }

    if (dayWeekEl) {
        const dayNum = dateInstance.getDay()
        const day = DAYS[dayNum]
        
        dayWeekEl.textContent = day
    }
}
