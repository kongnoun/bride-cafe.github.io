// Animation for Load-bar
// GSAP Load Bar Animation
document.addEventListener('DOMContentLoaded', () => {
  const bars = document.querySelectorAll('.loadBar-el');


  // Initial animation for load bar top
  const loadBar = document.getElementById('loadBar-top');

  gsap.set(loadBar, { scaleY: 0, transformOrigin: "top" });

  gsap.to(loadBar, {
    scaleY: 1, // Scale to full size
    duration: 1.5,
    ease: "power3.inOut",
  });



  // Initial animation for load bars
  gsap.set(bars, { height: "30%", width: "50%" }); // Start with height 0

  gsap.to(bars, {
    height: "100%", // Animate to full height
    width: "100%",
    stagger: 0.2, // Delay between each bar's animation
    duration: 1.7, // Duration of each bar animation
    ease: "power3.inOut",
  });


  // Initial button animation
  const loadBtn = document.getElementById('loadBtn-el');
  const textSlideUp = document.getElementById('textSlideUp-el');
  const textSlideLeft = document.getElementById('textSlideLeft-el');

  gsap.set(textSlideLeft, { opacity: 0, x: -10 });
  gsap.to(textSlideLeft, {
    opacity: 1,
    x: 0,
    delay: 1.6,
    duration: 1.2,
    ease: "power3.inOut",
  })


  gsap.set(loadBtn, { opacity: 0, y: 10 });
  gsap.to(loadBtn, {
    opacity: 1,
    y: 0,
    delay: 1.5,
    duration: 1.3,
    ease: "power3.inOut",
  });

  gsap.set(textSlideUp, { opacity: 0, y: 10 });
  gsap.to(textSlideUp, {
    opacity: 1,
    y: 0,
    delay: 1.53,
    duration: 1.3,
    ease: "power3.inOut",
  });

  // Scale up the loadBar-el slightly when the user mouse moves over
  // bars.forEach(bar => {
  //   bar.addEventListener('mouseenter', () => {
  //     gsap.to(bar, {
  //       scale: 1.2,
  //       duration: 0.5,
  //       ease: "power3.inOut",
  //     });
  //   });

  //   // Scale back down on mouse leave
  //   bar.addEventListener('mouseleave', () => {
  //     gsap.to(bar, {
  //       scale: 1,
  //       duration: 0.5,
  //       ease: "power3.inOut",
  //     });
  //   });
  // });
  // End scale
});
