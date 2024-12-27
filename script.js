gsap.registerPlugin(ScrollTrigger);

const panels = document.querySelectorAll(".panel");

// Устанавливаем высоту контейнера, чтобы включить scroll
gsap.set(".page", {
  height: panels.length * 100 + "dvh",
});

// Создаем анимацию для каждой секции
panels.forEach((panel) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "top top",
    toggleActions: "play none none reverse",
    scrub: true,
    fastScrollEnd: true,
    end: () => "+=" + panel.clientHeight,
    snap: {
      snapTo: 1, // Divide by the number of sections
      duration: { min: 0.2, max: 1 }, // Duration for each snap
    },
    pin: true, // Pin the section for the entire height
    pinSpacing: false, // Remove extra space when pinning
    markers: true, // Remove ScrollTrigger markers (can be enabled for debugging)
  });
});
