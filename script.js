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


function validate() {
    let name = document.querySelector('.name');
    let email = document.querySelector('.email');
    let msg = document.querySelector('.message');
    let btn = document.querySelector('.send-btn');

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if(name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        }else {
            
            sucess();
        }
    })
}

validate()




function emptyerror() {
    swal({
        title: "Oh no ....",
        text: "Fields cannot be empty! ",
        icon: "error",
        
      });
}
function sucess() {
    swal({
        title: "Email enviado",
        text: "Responderemos em breve. ",
        icon: "success",
      });
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

ser.reveal('.superform', {origin: 'bottom' , delay:200})