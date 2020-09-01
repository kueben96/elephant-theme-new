const hero = document.querySelector('.hero'); 
const slider = document.querySelector('.slider'); 
const logo = document.getElementById('#logo'); 
const hamburger = document.querySelector('.hamburger'); 
const headline = document.querySelector('.headline'); 
const elephant = document.getElementById('#elephant');
const hdr_green = document.querySelector('.hdr-green');
const section_general = document.querySelector('.general');
const p_general_info = document.querySelector('.general-info');
const section_pakete = document.querySelector('.pakete');
var body = document.body;
var main = document.getElementsByTagName;

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
      }
      else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.2}s`
      }
      
    });
  });
  // links animieren
}

navSlide();

var colors = [
    //blau-blass-orange
    { left: "#516663", middle: "#c1c1b5", right: "#e79d78" },
    { left: "#e79d78", middle: "#916a4a", right: "#e9d29a" }
  ];

  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline;
 
  gsap.to(body,{
    background: "linear-gradient(to left,#223A44, #92A8AC)",
    scrollTrigger: {
      trigger: hero,
      start: "top",
      markers: true,
      toggleActions: "restart complete restart reset"
    }
  });

  gsap.to(body,{
    background: "linear-gradient(to left, #516663, #e79d78)",
    scrollTrigger: {
      trigger: section_general,
      start: "top",
      markers: true,
      toggleActions: "restart complete restart reset"
    }
  });

  gsap.to(body, {
    background: "linear-gradient(to left, #e79d78, #e9d29a)",
    ease: "power3.out",
    scrollTrigger: {
      trigger: section_pakete,
      start: "top",
      markers: true,
      toggleActions: "restart complete restart reset"
    }
  });


  
