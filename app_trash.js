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