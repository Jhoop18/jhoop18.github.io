const ctx = document.getElementById('skillsChart').getContext('2d');

// Skill data with level labels
const skills = [
  { name: 'Python', level: 3 },
  { name: 'JavaScript', level: 3 },
  { name: 'SQL', level: 3 },
  { name: 'React', level: 2 },
  { name: 'Node.js', level: 2 },
  { name: 'Power BI', level: 2 },
  { name: 'R', level: 2 },
  { name: 'C++', level: 2 },
  { name: 'Git', level: 3 },
  { name: 'Docker', level: 2 },
  { name: 'Azure', level: 2 },
  { name: 'PostgreSQL', level: 2 },
  { name: 'SQLite', level: 2 },
  { name: 'CI/CD', level: 2 },
  { name: 'Excel', level: 3 },
  { name: 'NoSQL', level: 1 },
  { name: 'SAP', level: 1 },
  { name: 'JIRA', level: 1 }
];

const levelLabels = { 1: 'Beginner', 2: 'Intermediate', 3: 'Advanced' };
const levelColors = {
  1: 'rgba(255, 99, 132, 0.6)',   // Beginner - Red
  2: 'rgba(255, 206, 86, 0.6)',   // Intermediate - Yellow
  3: 'rgba(75, 192, 192, 0.6)'    // Advanced - Teal
};

const labels = skills.map(s => s.name);
const data = skills.map(s => s.level);
const colors = skills.map(s => levelColors[s.level]);

const skillsChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Skill Level',
      data: data,
      backgroundColor: colors,
      borderColor: '#ccc',
      borderWidth: 1
    }]
  },
  options: {
    indexAxis: 'y',
    scales: {
      x: {
        min: 0,
        max: 3,
        ticks: {
          stepSize: 1,
          callback: function(value) {
            return levelLabels[value] || value;
          }
        },
        title: {
          display: true,
          text: 'Skill Level'
        }
      }
    },
    plugins: {
        legend: { display: false },
        datalabels: {
          anchor: 'center',   // position inside
          align: 'left',      // aligns label left within the bar
          formatter: function(value) {
            return levelLabels[value];
          },
          color: '#000',      // white text
          font: {
            weight: 'bold'
          },
          clamp: true         // ensures it stays inside bar
        }
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
  },
  plugins: [ChartDataLabels]
});
