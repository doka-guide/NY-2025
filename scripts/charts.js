import { months } from "./utils.js";
import { windowWidthDetection } from "./window-width.js";
import { mobileBreakPoint } from "./constants.js";

const repoActivity = document.getElementById("repoActivity");

let windowWidth = windowWidthDetection();

window.addEventListener("resize", () => (windowWidth = windowWidthDetection()));

new Chart(repoActivity, {
  type: "line",
  responsive: true,
  maintainAspectRatio: false,
  data: {
    labels: ["Январь", "Март", "Июнь", "Август", "Ноябрь", "Декабрь"],
    datasets: [
      {
        label: "Новые ишью",
        data: [19, 20, 22, 7, 28, 0],
        borderWidth: 4,
        borderColor: "#F498AD",
      },
      {
        label: "Новые пулреквесты",
        data: [89, 119, 95, 41, 70, 0],
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
        data: [
          1199, 884, 1640, 791, 1060, 1140, 1584, 990, 606, 2903, 617, 530,
        ],
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
        data: [14, 10, 22, 25, 11, 22, 27, 4, 0, 5, 5, 15],
        borderWidth: 4,
        borderColor: "#F498AD",
      },
      {
        label: "Редакция",
        data: [1, 7, 13, 29, 10, 7, 3, 4, 0, 2, 1, 4],
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
        data: [6, 19, 44, 12, 4, 6],
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

const browserVisitors = document.getElementById("browserVisitors");

new Chart(browserVisitors, {
  type: "pie",
  data: {
    labels: [
      "Google Chrome",
      "Яндекс.Браузер",
      "Chrome Mobile",
      "Firefox",
      "Mobile Safary",
      "Opera",
      "Edge",
      "Safary",
      "Другие",
    ],
    datasets: [
      {
        data: [
          2050000, 682641, 360276, 159278, 156863, 153741, 153578, 163623,
          163623,
        ],
        backgroundColor: [
          "#663613",
          "#123E66",
          "#665610",
          "#024B35",
          "#1A5D1C",
          "#5F377D",
          "#024B25",
          "#979797",
          "#FFFFFF",
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

const systemVisitors = document.getElementById("systemVisitors");

new Chart(systemVisitors, {
  type: "pie",
  data: {
    labels: ["Windows", "macOS", "Android", "iOS", "Linux", "Другие"],
    datasets: [
      {
        data: [2560000, 503837, 432610, 194612, 194049, 334],
        backgroundColor: [
          "#663613",
          "#123E66",
          "#665610",
          "#024B35",
          "#1A5D1C",
          "#5F377D",
          "#024B25",
          "#979797",
          "#FFFFFF",
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
        position: "bottom",
      },
    },
  },
});
