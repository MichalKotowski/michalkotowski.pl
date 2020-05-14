require("./src/styles/utils/prism-okaidia.css")

exports.shouldUpdateScroll = () => {
    setTimeout(() => {
        window.scrollTo(0, 0)
    }, 500)
    return false
}