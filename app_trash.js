const hero = document.querySelector('.hero'); 
const slider = document.querySelector('.slider'); 
const logo = document.getElementById('#logo'); 
const hamburger = document.querySelector('.hamburger'); 
const headline = document.querySelector('.headline'); 
const elephant = document.getElementById('#elephant');
const hdr_green = document.querySelector('.hdr-green');
const section_general = document.querySelector('.general');
const p_general_info = document.querySelector('.general-info');



var body = document.body;
const tl = gsap.timeline();



var colors = [
    { left: "#1abfea", middle: "#c471ed", right: "#f4515e" },
    { left: "#45a247", middle: "#4c879b", right: "#4c879b" },
    { left: "white", middle: "white", right: "white" },
    { left: "#37ccfd", middle: "#b32fff", right: "#b32fff" }
  ];

  gsap.registerPlugin(ScrollTrigger);
  gsap.to(section_general, {
    scrollTrigger: body,
    start: "top top",
    end : "+=500",
    scrub: 1
     // start the animation when ".box" enters the viewport (once)
    //x: 300
  });

  /* //for (let i = 0; i < colors.length; i++) {
    tl.to(body, 1, {
      backgroundImage:
        "-webkit-linear-gradient(-4deg, " +
        colors[i].left +
        " 0%, " +
        colors[i].middle +
        " 50%, " +
        colors[i].right +
        " 90%)"
    });
  } */

  
//where to start und where to end
tl.fromTo(hero, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut })
.fromTo(hdr_green, 1, {opacity: 0, x:30}, {opacity: 1, x:30})
.fromTo(elephant, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut }, "=-1")
.fromTo(slider, 1.2, {x:"-100%"}, {x:"0%", ease: Power2.easeInOut}, "-=1.2")
//logo keine wirkung gerade, da image file, daher hamburger svg nutzen
.fromTo(hamburger, 0.5, {opacity: 0, x:30}, {opacity: 1, x: 0})
.to(body, {
    backgroundImage:
        "-webkit-linear-gradient(-4deg, " +
        colors[0].left +
        " 0%, " +
        colors[1].middle +
        " 50%, " +
        colors[2].right +
        " 90%)"
})


//-=1.2 damit die Animation fruher beginnt
//if you wanna use multiple animations:
//tl.fromTo(hero, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut })
//.fromTo()


 // let tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: section_general, 
  //     start: "top", 
  //     markers: true
  //   }
  // }
  // );

  const tl = gsap.timeline({
		ScrollTrigger: {}
	})
 
tl.fromTo(hero, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut })
.fromTo(hdr_green, 1, {opacity: 0, x:30}, {opacity: 1, x:30})
.fromTo(elephant, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut }, "=-1")
.fromTo(slider, 1.2, {x:"-100%"}, {x:"0%", ease: Power2.easeInOut}, "-=1.2")
//logo keine wirkung gerade, da image file, daher hamburger svg nutzen
.fromTo(hamburger, 0.5, {opacity: 0, x:30}, {opacity: 1, x: 0})
.to(body,{
  background: "linear-gradient(to left, #516663 70%, #e79d78)",
  scrollTrigger: {
    trigger: section_general,
    start: "top",
    markers: true,
    toggleActions: "restart complete restart reset"
  }
});

  // gsap.fromTo(body,{
  //   background: "linear-gradient(to left,#223A44, #92A8AC)",
  //   scrollTrigger: {
  //     trigger: hero,
  //     start: "top",
  //     markers: true,
  //     toggleActions: "restart complete restart reset"
  //   }
  // }, {background: 'red', ease: Power3.easeInOut}
  // );

  // gsap.to(body,{
  //   background: "linear-gradient(to left, #516663, #e79d78)",
  //   scrollTrigger: {
  //     trigger: section_general,
  //     start: "top",
  //     markers: true,
  //     toggleActions: "restart complete restart reset"
  //   }
  // });

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
const tl = gsap.timeline();



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


const navFade = () => {
  const nav_section = document.querySelector('.nav-section');
  hamburger.addEventListener('click', () => {
    console.log('clicked');
    nav_section.classList.toggle('.nav-active-2');
  });
}

navFade();
// navSlide();

// const navSlide = () => {
//   const burger = document.querySelector('.hamburger');
//   const nav = document.querySelector('.nav-links');
//   const navLinks = document.querySelectorAll('.nav-links li');
//   const navCloseLink = document.getElementById('nav-close');


//   // toggle nav class
//   [burger, navCloseLink].forEach(item => {
//     item.addEventListener('click', () =>{
//       nav.classList.toggle('nav-active');
      
  
//         // Links animieren
//       navLinks.forEach((link, index) => {
    
//         console.log(index);
//         if ( link.style.animation) {
//           link.style.animation = '';
//           tl2.pause();
//           /*setNormalBackground();*/
//           console.log("background: "+ body.style.background);
//           console.log("link.style.animation: " + link.style.animation);
          
//         }
//         else {
//           // links animieren
//           link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.2}s`
//           console.log("background: "+body.style.background);
//           console.log("link.style.animation: " + link.style.animation);
//           animColorBody();
//           tl2.restart();
//         }

//         link.addEventListener('click', () =>{
//           nav.classList.toggle('nav-active');
//         })
        
//       });

//   })


//     //here zu
//   });  

  // navCloseLink.addEventListener('click', () =>{
  //   nav.classList.toggle('nav-active');

  // });

// }

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




