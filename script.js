const ctx = document.getElementById('skillsChart').getContext('2d');
const skillsChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Python', 'JavaScript', 'SQL', 'React', 'Node.js', 'Power BI'],
    datasets: [{
      label: 'Skill Proficiency (%)',
      data: [90, 85, 80, 75, 75, 70],
      backgroundColor: '#4f46e5'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: { beginAtZero: true, max: 100 }
    }
  }
});
