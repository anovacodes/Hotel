import "../lib/dycalendar.min.js"

export const handleCalendar = targetIdSelector => {
    if (!document.querySelector(targetIdSelector)) return

    dycalendar.draw({
        target: targetIdSelector,
        type: 'month',
        dayformat: 'full',
        monthformat: 'full',
        highlighttoday: true
    })
}