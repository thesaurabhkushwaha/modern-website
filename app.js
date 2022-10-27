let controller;
let slideScene;

function animateSlides() {
  //Init controller
  controller = new ScrollMagic.Controller();

  //Select elements
  const sliders = document.querySelectorAll(".slide");
  const nav = document.querySelector(".nav-header");

  sliders.forEach((slide) => {
    const revealImage = slide.querySelector(".reveal-img");
    const img = slide.querySelector("img");
    const revealText = slide.querySelector(".reveal-text");

    //GSAP
    const slideTimeline1 = gsap.timeline({
      defaults: { duration: 1, ease: "power2.inOut" },
    });
    slideTimeline1.fromTo(revealImage, { x: "0%" }, { x: "100%" });
    slideTimeline1.fromTo(img, { scale: 2 }, { scale: 1 }, "-=1");
    slideTimeline1.fromTo(revealText, { x: "0%" }, { x: "100%" }, "-=0.75");
    slideTimeline1.fromTo(nav, { y: "-100%" }, { y: "0%" }, "-=0.5");
  });
}

animateSlides();
