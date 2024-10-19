export const handleShowFullComment = event => {
    const { type } = event.target.dataset

    if (type !== "show-more") return
    
    const comment = event.target.parentElement.parentElement

    event.target.classList.add("comment__more_active")
    comment.classList.add("comment_active")
}

export const handleShowFullReviews = event => {
    const { type } = event.target.dataset

    if (type !== "reviews-button") return

    const comments = event.target.previousElementSibling

    event.target.classList.add("reviews__button_hidden")
    comments.classList.add("comments_active")
}