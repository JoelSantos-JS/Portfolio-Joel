let menu = document.querySelector(".menu-icon")
let navbar = document.querySelector(".navbar")

menu.onclick = () => {
    navbar.classList.toggle("open-menu")
    menu.classList.toggle("move")
}


window.onscroll = () => {
    navbar.classList.remove("open-menu")
    menu.classList.remove("move")
}



let header = document.querySelector('header')

window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.screenY > 0)


})


const ser = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3500,
    delay: 400,
})


ser.reveal('.home' ,{origin: 'rigth'})
ser.reveal('.about' , {origin: 'left' , interval:600 , delay:400})

ser.reveal('.superform', {origin: 'left' , delay:300})

const logo = document.querySelector('.header-logo')
const letters = logo.textContent.split("")

logo.textContent = ""

letters.forEach((letter) => {
    logo.innerHTML += '<a class="letter" >' + letter + "</a>"
    gsap.set('.letter' , {display: 'inline-block'})

    gsap.fromTo('.letter' , {x: 200  } , {x: 0 , delay: 2, stagger: 0.05 , duration: 2})
})

