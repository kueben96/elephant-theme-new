const hero = document.querySelector('.hero'); 
const slider = document.querySelector('.slider'); 
const logo = document.getElementById('#logo'); 
const hamburger = document.querySelector('.hamburger'); 
const headline = document.querySelector('.headline'); 
const elephant = document.getElementById('#elephant');
const hdr_green = document.querySelectorAll('.hdr-green');
const btn_hero = document.getElementById('hero-button');
const section_general = document.querySelector('.general');
const p_general_info = document.querySelector('.general-info');
const section_pakete = document.querySelector('.pakete');
var body = document.body;
const usualBackgroundColor = "linear-gradient(to left,#223A44, #92A8AC)";
var main = document.getElementsByTagName;

var colors = [
  //blau-blass-orange
  { left: "#223A44", middle: "#92A8AC", right: "#516663" },
  { left: "#516663", middle: "#c1c1b5", right: "#e79d78" },
  { left: "#e79d78", middle: "#916a4a", right: "#e9d29a" }
];



gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
  toggleActions: "restart pause reverse restart",
  markers: true
});
const tl = gsap.timeline({
  ScrollTrigger: {
    trigger: section_general,
    start: "top top",
    id: "trigger-genereal"
  },
  ScrollTrigger: {
    trigger: section_pakete,
    start: "top top",
    id: "trigger-pakete"
  }
});



// Functions for Directing to Social Media
function DirectTwitter() {
  console.log("MOIN");
}
// Functions for Directing to Social Media
function DirectInsta() {
  console.log("MOIN");
}
// Functions for Directing to Social Media
function DirectFacebook() {
  console.log("MOIN");
}

const navSlide = () => {
  const burger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  // toggle nav class
  burger.addEventListener('click', () =>{
    nav.classList.toggle('nav-active');
   

    // Links animieren
    navLinks.forEach((link, index) => {
  
      console.log(index);
      if ( link.style.animation) {
        link.style.animation = '';
        tl2.pause();
        /*setNormalBackground();*/
        console.log("background: "+ body.style.background);
        console.log("link.style.animation: " + link.style.animation);
        
      }
      else {
        // links animieren
        link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.2}s`
        console.log("background: "+body.style.background);
        console.log("link.style.animation: " + link.style.animation);
        animColorBody();
        tl2.restart();
      }
      
    });
  });  
}

// Animations

tl.fromTo(hdr_green, 4, {opacity: 0, x:30}, {opacity: 1, x:30})
.fromTo(hamburger, 3, {opacity: 0, x:30}, {opacity: 1, x: 0}, "=-4")
.from(btn_hero, 2,  {"top": "-100%" }, "=-3");

gsap.to(logo, {
  scrollTrigger: {
    trigger: body,
    markers: true,
    start: "top"
  },
  x: "-100%"
}
  )


const setNormalBackground = () => {
  // body.style.background = "linear-gradient(to left,#223A44, #92A8AC)";
  body.setAttribute('data-before', 'background');
} 

tl2 = gsap.timeline()

const animColorBody = () => {
  for (let i = 0; i < colors.length; i++) {
    tl2.from(body, 1, {
      background:
        "-webkit-linear-gradient(-4deg, " +
        colors[i].left +
        " 0%, " +
        colors[i].middle +
        " 50%, " +
        colors[i].right +
        " 90%)"
    });
  } 
}







  // gsap.to(body, {
  //   background: "linear-gradient(to left, #e79d78, #e9d29a)",
  //   ease: "power3.out",
  //   scrollTrigger: {
  //     trigger: section_pakete,
  //     start: "top",
  //     markers: true,
  //     toggleActions: "restart complete restart reset"
  //   }
  // });


navSlide();



 