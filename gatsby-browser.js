import "./src/styles/utils/prism-okaidia.css"

export function shouldUpdateScroll() {
    setTimeout(() => {
        window.scrollTo(0, 0)
    }, 500)
    return false
}