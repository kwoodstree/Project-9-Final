const ctx1 = document.getElementById('daily-traffic');
const myChart1 = new Chart(ctx1, {
    type: 'bar',

    data: {

        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{

            label: ' ',
            data: [75, 125, 175, 125, 225, 200, 100],
            fill: true,

            backgroundColor: [
                '#7477BF'
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
