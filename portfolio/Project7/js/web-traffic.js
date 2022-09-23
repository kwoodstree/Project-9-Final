
const ctx = document.getElementById('web-traffic');
const myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            cubicInterpolationMode: 'monotone',
            label: ' ',
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1800, 2350, 1500, 2500],
            fill: true,

            backgroundColor: [
                'rgba(213, 214, 236)'
            ]
        }]
    },
    options: {
      plugins: {
        legend: {
          display: false

        }
      },

      responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
