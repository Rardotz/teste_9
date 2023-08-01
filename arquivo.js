window.onload = function(e){
    var offset = document.getElementsByClassName('header')[0].offsetTop;
    var menu = document.getElementsByClassName('header')[0];

    document.addEventListener('scroll', function() {
        if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
            menu.style.position='fixed';

        } else{
            menu.style.position = 'initial';
        }
    });
} 

const hamburguer = document.querySelector(".hamburguer");
const some = document.querySelector(".some");
const header = document.querySelector("header");


header.addEventListener("click", () =>{
    hamburguer.classList.toggle('active');
    some.classList.toggle('active');
    
   
})

// hamburguer.addEventListener("click", () =>{
//     hamburguer.classList.toggle('active');
//     some.classList.toggle('active');
   
// })


const navLinksEls = document.querySelectorAll('.itens');
const sectionEls = document.querySelectorAll('section');


let currentSection = 'home';
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if (window.scrollY >= (sectionEl.offsetTop - 200)) {
            currentSection = sectionEl.id;
        }
    });

    navLinksEls.forEach(navLinksEl => {
        if (navLinksEl.href.includes(currentSection)){
            document.querySelector('.actives').classList.remove('actives');
            navLinksEl.classList.add('actives');
        }
    })
})







const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animation';


function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 90) / 100);
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        }
        else{
            element.classList.remove(animationClass);
        }
    })
}


window.addEventListener('scroll', function() {
    animeScroll();
})


function ative(){

}


const controls = document.querySelectorAll(".controla");
let currentItem = -1;
const items = document.querySelectorAll(".itemmm");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems -1;
    }

    items.forEach((item) => item.classList.remove("current-itemmm"));

    items[currentItem].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
      
    });

    items[currentItem].classList.add("current-itemmm");
  });
});




// const abb = window.document.getElementById('area')
// var b = window.document.getElementById('.pt_a')
// var c = window.document.getElementById('.pt_b')
// const b = document.querySelector(".pt_a");
// const c = document.querySelector(".pt_b");
// a.addEventListener('mousemove', entrar)
// a.addEventListener('mouseout', sair)


// function entrar(){
//      document.getElementById("register").style.opacity = "1";
//      document.getElementById("regist").style.opacity = "1";
    
// }
// function sair(){
//     document.getElementById("register").style.opacity = "0";
//     document.getElementById("regist").style.opacity = "0";
// }


// abb.addEventListener("mousemove", () =>{
//     b.classList.toggle('.activ');
//     c.classList.toggle('.activ');
    
   
// })




// let sections = document.querySelectorAll('section');
// let linkss = document.querySelectorAll('header li a');

// window.onscroll = () => {
//     sections.fonEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             linkss.fonEach( links => {
//                 links.classList.remove('active');
//                 document.querySelector('header li a [href*=' + id + ']').classList.add('active');
//             });
//         };
//     });

// };






var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    autoplay: true,
    slidesPerView: 'auto',
      autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
    
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 0.8,
     
      
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
