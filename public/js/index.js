function scrollIndex(){
    // return window.scrollBy(0, 700)
    console.log('test')
    window.scrollTo({ top: 800, behavior: 'smooth' })
}

if(window.location.pathname === "/"){
    let button = document.querySelector(".hero-index .button")
    button.addEventListener('click', scrollIndex)
} else if(window.location.pathname === "/work"){
    let button = document.querySelector(".hero-work .button")
    button.addEventListener('click', scrollIndex)
}
