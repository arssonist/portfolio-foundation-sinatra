function scrollIndex(){
    // return window.scrollBy(0, 700)
    console.log('test')
    window.scrollTo({ top: 800, behavior: 'smooth' })
}

let indexButton = document.querySelector(".hero-index>.button")
let workButton = document.querySelector(".hero-work .button")
console.log(workButton)
// indexButton.addEventListener('click', scrollIndex)
workButton.addEventListener('click', scrollIndex)
