import { months } from "./utils.js";

const chatMembers = document.getElementById("chatMembers");

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
        borderWidth: 2,
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
        data: [5, 10, 15, 20],
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
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 2,
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
        borderWidth: 2,
        borderColor: "#F498AD",
      },
      {
        label: "Редакция",
        data: [3, 5, 2, 3, 12, 19],
        borderWidth: 2,
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
        data: [5, 10, 15, 20, 25, 30],
        backgroundColor: [
          "#FF8630",
          "#2E9AFF",
          "#FFD829",
          "#10F3AF",
          "#41E847",
          "#C56FFF",
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

new Chart(newOldContributors, {
  type: "pie",
  data: {
    labels: ["HTML", "CSS", "JavaScript", "A11y", "Веб-платформа", "Рецепты"],
    datasets: [
      {
        data: [5, 10, 15, 20, 25, 30],
        backgroundColor: [
          "#FF8630",
          "#2E9AFF",
          "#FFD829",
          "#10F3AF",
          "#41E847",
          "#C56FFF",
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
        position: "left",
      },
    },
  },
});
