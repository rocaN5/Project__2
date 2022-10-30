const menuActive = document.getElementsByClassName('menu__button')[0];
const menuPop = document.getElementsByClassName('menu__popup')[0];
const menuExit = document.getElementsByClassName('menu__exit')[0];
const bodyOverflow = document.getElementsByClassName('overflow__hider')[0];
const logoText = document.getElementsByClassName('logo__text')[0];
const headerHover = document.getElementsByClassName('header')[0];


// • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ •
// Header text showup
// • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ •

// function logoTextMouseOn(){
//     if(document.documentElement.clientWidth >= 650){
//         setTimeout(() => {
//         logoText.style.display = 'flex';

//         setTimeout(() => {
//             logoText.style.opacity = 1;
//             logoText.style.transform = 'translateX(0px)';
//         }, 1);
//         }, 250);
//     };
// };

// function logoTextMouseLeave(){
//     if(document.documentElement.clientWidth >= 650){
//         logoText.style.opacity = 0;
//         logoText.style.transform = 'translateX(-50px)';
//         setTimeout(() => {
//             logoText.style.display = 'none';
//         }, 250);
//     };
// };

// headerHover.addEventListener('mouseover', () =>{
//     if(document.documentElement.clientWidth >= 650){
//         logoTextMouseOn();
//     };
// });

// headerHover.addEventListener('mouseleave', () =>{
//     if(headerHover.classList.contains('notActive')){
//         logoTextMouseLeave();
//     };
// });

// window.addEventListener('resize', () =>{
//     if(document.documentElement.clientWidth <= 650){
//         logoText.style.display = "none";
//     }else{
//         logoText.style.display = "flex";
//     };
// });

// • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ •
// Menu pop up
// • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ •

function fadeIn(){
    let i = 0;
    menuPop.style.display = "block";
    menuPop.style.transition = "500ms";

    while(i < 500){
        i++;
        setTimeout(()=>{ 
            menuPop.style.opacity = `${0.01 * (i / 5)}`;
            menuPop.style.transform = 'translateX(0%)';
        }, 1);
    };
};

function fadeOut(){
    let i = 500;
    menuPop.style.transition = `${i}ms`;
    while(i > 0){
        i--;
        menuPop.style.opacity = 0.01 * i;
        console.log(i)
        menuPop.style.transform = 'translateX(100%)';
    }
    
    setTimeout(()=>{
        menuPop.style.display = 'none';
    }, 250);
};

menuActive.addEventListener('click', () =>{
    fadeIn();
    // if (screen.width > 500) {
    //     headerHover.classList.remove('notActive');
    // }
});

menuExit.addEventListener('click', () =>{
    fadeOut();
    // if (screen.width > 500) {
    //     headerHover.classList.add('notActive');
    // }
});

menuPop.addEventListener('click', ()=>{
    fadeOut();
});

var menuItemEl = document.getElementsByClassName('menuItem');
    for(var i = 0, length = menuItemEl.length; i < length; i++) {
        menuItemEl[i].addEventListener('click', () =>{
            fadeOut();
            // logoTextMouseLeave();
    });
};

// • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ •
// Owl
// • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ • ○ •

const prevIcon = '<img src="./img/resent__projects/left.svg">'
const nextIcon = '<img src="./img/resent__projects/right.svg">'

// let heightDetection = 1;

// if(document.documentElement.clientWidth >= 600){
//     heightDetection = 2;
// }else if(document.documentElement.clientWidth <= 350){
//     heightDetection = 1;
// }else{
//     heightDetection = 1;
// };

$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 0,
    dots: false,
    nav:true,
    autoplay: true,
    autoplayTimeout: 2500,
    navText: [
        prevIcon,
        nextIcon
    ],
    responsive:{
        0:{
            items:1
        },
        350:{
            items: 1,
            autoWidth: false
        },
        400:{
            items: 2,
            autoWidth: false
        },
        760:{
            items: 2,
            autoWidth: false
        },
        992:{
            items: 2,
            autoWidth: false
        },
        1700:{
            items:3,
            autoWidth: false
        },
        1800:{
            items:4,
            center: false
        }
    }
})


