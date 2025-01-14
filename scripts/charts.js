import { months } from "./utils.js";
import { windowWidthDetection } from "./window-width.js";

const chatMembers = document.getElementById("chatMembers");

let windowWidth = windowWidthDetection();

window.addEventListener("resize", () => (windowWidth = windowWidthDetection()));

new Chart(chatMembers, {
  type: "line",
  responsive: true,
  maintainAspectRatio: false,
  data: {
    labels: months({ count: 12 }),
    datasets: [
      {
        label: "Кол-во участников в чате",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 4,
        borderColor: "#2E9AFF",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const seasonPRs = document.getElementById("seasonPRs");

new Chart(seasonPRs, {
  type: "polarArea",
  data: {
    labels: ["Зима", "Весна", "Лето", "Осень"],
    datasets: [
      {
        data: [72, 133, 86, 42],
        backgroundColor: ["#123E66", "#665610", "#623D45", "#663613"],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const streamWatch = document.getElementById("streamWatch");

new Chart(streamWatch, {
  type: "line",
  data: {
    labels: months({ count: 12 }),
    datasets: [
      {
        label: "Просмотры стримов",
        data: [1199, 884, 1640, 791, 1060, 1140, 1584, 990, 606, 2903, 617, 530],
        borderWidth: 4,
        borderColor: "#F498AD",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const maintainers = document.getElementById("maintainers");

new Chart(maintainers, {
  type: "line",
  data: {
    labels: months({ count: 12 }),
    datasets: [
      {
        label: "Контрибьюторы",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 4,
        borderColor: "#F498AD",
      },
      {
        label: "Редакция",
        data: [3, 5, 2, 3, 12, 19],
        borderWidth: 4,
        borderColor: "#2E9AFF",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const newMaterials = document.getElementById("newMaterials");

new Chart(newMaterials, {
  type: "pie",
  data: {
    labels: ["HTML", "CSS", "JavaScript", "A11y", "Веб-платформа", "Рецепты"],
    datasets: [
      {
        data: [5, 16, 17, 13, 3, 7],
        backgroundColor: [
          "#663613",
          "#123E66",
          "#665610",
          "#024B35",
          "#1A5D1C",
          "#5F377D",
        ],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const newOldContributors = document.getElementById("newOldContributors");

let labelPosition = "left";

if (windowWidth <= 1024) {
  labelPosition = "bottom";
}

new Chart(newOldContributors, {
  type: "pie",
  data: {
    labels: ["HTML", "CSS", "JavaScript", "A11y", "Веб-платформа", "Рецепты"],
    datasets: [
      {
        data: [5, 10, 15, 20, 25, 30],
        backgroundColor: [
          "#663613",
          "#123E66",
          "#665610",
          "#024B35",
          "#1A5D1C",
          "#5F377D",
        ],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: labelPosition,
      },
    },
  },
});
