/*================== toggle icon navbar =====================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



/*================== scroll section active link =====================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let heigh = sec.offsetHeigh;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + heigh) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
    
    /*====================== remove toggle icon and navbar when click navbat link (scroll) =========================*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};