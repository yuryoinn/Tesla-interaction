gsap.registerPlugin(ScrollTrigger);

const scenes = gsap.utils.toArray('.sec');

const his2Scene = gsap.timeline({
    // This code is wrong. it doesn't work properly
    scrollTrigger: {
      trigger: ".history-2",
      scrub: true,
      pin: true,
      start: "center center",
      end: "bottom 0",
      markers: {
        startColor: "red",
        endColor: "red",
      }
    }
  });

  his2Scene.fromTo(".h2-img", 5,{
    autoAlpha: 0,
    left: "100%",
    xPercent: 100,
},{
    autoAlpha: 1,
    left: "25%",
    xPercent: 10,
});

const his3Scene = gsap.timeline({
    scrollTrigger: {
      trigger: ".history-3",
      scrub: true,
      pin: true,
      start: "center center",
      end: "bottom 0",
      markers: {
        startColor: "red",
        endColor: "red",
      }
    }
  });

his3Scene.fromTo(".h3-img", 5,{
    autoAlpha: 0,
    right: "-100%",
    xPercent: -100,
},{
    autoAlpha: 1,
    right: "-25%",
    xPercent: -10,
});


let duration = 2,
		sections = gsap.utils.toArray(".panel"),
		sectionIncrement = duration / (sections.length - 1),
		tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".model-s-wrap",
				pin: true,
				scrub: 1,
				start: "top top",
				end: "+=5000"
			}
		});

tl.to(sections, {
  xPercent: -100 * (sections.length - 1),
  duration: duration,
  ease: "none"
});

let duration2 = 2,
    sections2 = gsap.utils.toArray(".panel2"),
    sectionIncrement2 = duration2 / (sections2.length - 1),
    tl2 = gsap.timeline({
			scrollTrigger: {
				trigger: ".model-3-wrap",
				pin: true,
				scrub: 1,
				start: "top top",
				end: "+=5000"
			}
		});

tl2.to(sections2, {
  xPercent: -100 * (sections2.length - 1),
  duration2: duration2,
  ease: "none"
});



