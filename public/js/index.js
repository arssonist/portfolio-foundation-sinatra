function scrollIndex(){
    // return window.scrollBy(0, 700)
    console.log('test')
    window.scrollTo({ top: 800, behavior: 'smooth' })
}

let button = document.querySelector(".hero-index>.button")
button.addEventListener('click', scrollIndex)
