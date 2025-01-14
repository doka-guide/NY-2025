import { windowWidthDetection } from "./window-width.js";
import { mobileBreakPoint } from "./constants.js";

const init = () => {
  gsap.registerPlugin(ScrollTrigger, Draggable);

  let windowWidth = windowWidthDetection();

  window.addEventListener(
    "resize",
    () => (windowWidth = windowWidthDetection())
  );

  if (windowWidth > mobileBreakPoint) {
    const scrollContainer = document.querySelector(".scroll-container");
    const scrollBlocks = scrollContainer.querySelectorAll(".scroll-block");

    gsap.set(scrollContainer, { xPercent: 99, opacity: 1 });

    let endPos =
      -scrollBlocks[scrollBlocks.length - 1].clientWidth / (windowWidth / 100);

    let scrollTween = gsap.to(scrollContainer, {
      xPercent: endPos,
      scrollTrigger: {
        trigger: ".color",
        start: "top top",
        end: () => "+=" + scrollBlocks.length * 500,
        scrub: 1,
        pin: true,
      },
    });

    scrollBlocks.forEach((block, i) => {
      const commonScrollTriggerConfig = {
        trigger: block,
        scrub: 1,
        start: "left 90%",
        containerAnimation: scrollTween,
      };

      const timeline = gsap.timeline({
        scrollTrigger: {
          ...commonScrollTriggerConfig,
          end: "left 30%",
        },
      });

      timeline.to(block, { scale: 1.2 });

      if (i === scrollBlocks.length - 1) {
        gsap
          .timeline({
            scrollTrigger: {
              ...commonScrollTriggerConfig,
              end: "left 60%",
            },
          })
          .to(block.querySelector(".color-image"), {
            scale: 1,
            x: "-6rem",
            y: "2.5rem",
          });
      } else {
        timeline.to(block, { scale: 1 });
      }
    });

    const infoContainer = document.querySelector(".info-container");
    const infoBlocks = infoContainer.querySelectorAll(".info-block");

    gsap.to(infoBlocks, {
      xPercent: -100 * (infoBlocks.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".info",
        pin: true,
        scrub: 1,
        snap: 1 / (infoBlocks.length - 1),
        end: () => "+=5000",
      },
    });

    const draggableBadges = gsap.utils.toArray(".badge");

    draggableBadges.forEach((badge) => {
      badge.addEventListener("mouseenter", () => {
        const mainProps = {
          duration: 1,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        };
        gsap.to(badge, {
          rotation: 10,
          ...mainProps,
        });
      });

      badge.addEventListener("mouseleave", () => {
        gsap.killTweensOf(badge);
        gsap.to(badge, { rotation: 0, duration: 0.5 });
      });
    });

    draggableBadges.forEach((badge) => {
      Draggable.create(badge, {
        bounds: badge.closest("dragg-zone"),
        onDrag: function () {
          badge.classList.add("dragging");
        },
        onDragEnd: function () {
          badge.classList.remove("dragging");
        },
      });
    });

    const prCubes = document.querySelectorAll(".pr-cube");

    prCubes.forEach((prCube, index) => {
      prCube.addEventListener("mouseenter", () => {
        gsap.to(prCube, { scale: 1.4 });
        if (index - 1 >= 0) {
          gsap.to(prCubes[index - 1], { scale: 1.2 });
        }

        if (index + 1 < prCubes.length) {
          gsap.to(prCubes[index + 1], { scale: 1.2 });
        }
      });

      prCube.addEventListener("mouseleave", () => {
        prCubes.forEach((cube) => {
          gsap.to(cube, { scale: 1 });
        });
      });
    });

    const panels = document.querySelectorAll(".panel");

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        end: "+=100%",
        snap: {
          snapTo: 1,
          duration: 0.5,
          ease: "power1.inOut",
        },
      });
    });
  }
};

const destroy = () => {
  // тут надо аккуратно почистить все анимации
  gsap.globalTimeline.pause();
};

const media = window.matchMedia(`(min-width: ${mobileBreakPoint}px)`);

document.addEventListener("DOMContentLoaded", () => {
  media.addEventListener("change", (e) => {
    if (e.matches) {
      init();
    } else {
      destroy();
    }
  });

  if (media.matches) {
    init();
  }
});
