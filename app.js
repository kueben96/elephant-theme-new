// 

const navFade = () => {
  const nav_section = document.querySelector('.nav-section');
  const hamburger = document.querySelector('.hamburger');
  const hero_button = document.getElementById('#hero-button');
  const hero_headline = document.querySelector('.headline');
  hamburger.addEventListener('click', () => {
    console.log('clicked');
    nav_section.classList.toggle('nav-active');
  });
}

const startAnimate = () => {
  const hdr_green = document.querySelectorAll('.hdr-green');
  const logo = document.getElementById('#logo'); 
  const headline_logo = document.querySelector('.headline-logo');
  const hamburger = document.querySelector('.hamburger'); 

  const tl = gsap.timeline();

  tl.fromTo(hdr_green, 4, {opacity: 0, x:30}, {opacity: 1, x:30})
  .fromTo(hamburger, 3, {opacity: 0, x:30}, {opacity: 1, x: 0}, "=-4")
  .from(btn_hero, 2,  {"top": "-100%" }, "=-3");
}

navFade();
startAnimate();

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


