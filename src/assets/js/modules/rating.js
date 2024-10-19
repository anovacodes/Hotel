const handleReviewsRating = () => {
    const ratingReviewItems = document.querySelectorAll("[data-type='rating-item']")

    if (!ratingReviewItems.length) return

    ratingReviewItems.forEach(item => {
        const progressLine = item.querySelector("[data-type='progress']")

        const { value } = progressLine.dataset

        setProgressWidthByRating(value, progressLine)
    })
}

function setProgressWidthByRating(rating, progressLineElement) {
    const widthInPercentage = parseFloat(rating) * 10 + "%"

    progressLineElement.style.width = widthInPercentage
}

handleReviewsRating()