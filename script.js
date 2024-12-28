document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Анимация горизонтального скролла в первой секции
  const horizontalContainer = document.querySelector(".scroll-container");
  const blocks = gsap.utils.toArray(".scroll-container .scroll-block");

  gsap.set(horizontalContainer, { xPercent: 99 });

  let scrollTween = gsap.to(horizontalContainer, {
    xPercent: -20,
    scrollTrigger: {
      trigger: ".color",
      start: "top top",
      end: () => "+=" + blocks.length * 300,
      scrub: 1,
      pin: true,
    },
  });

  blocks.forEach((block, i) => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: block,
        start: "left 90%",
        end: "left 30%",
        scrub: 1,
        containerAnimation: scrollTween,
      },
    });

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: block,
        start: "left 90%",
        end: "left 60%",
        scrub: 1,
        containerAnimation: scrollTween,
      },
    });

    t1.to(block, {
      scale: 1.2,
    });

    if (i !== blocks.length - 1) {
      t1.to(block, {
        scale: 1,
      });
    } else {
      const img = block.querySelector(".color-image");

      t2.to(img, {
        scale: 1,
        x: "-6rem",
        y: "2.5rem",
      });
    }
  });
});
