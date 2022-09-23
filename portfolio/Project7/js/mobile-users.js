const ctx2 = document.getElementById('mobile-users');
const myChart2 = new Chart(ctx2, {
    type: 'doughnut',

    data: {
      labels: [
        'Desktop',
        'Tablets',
        'Phones'
      ],
        datasets: [{

            // label: 'MOBILE USERS',
            data: [50, 15, 15],

            backgroundColor: [
              'rgb(116, 119, 191)',
              'rgb(129, 201, 143)',
              'rgb(81, 182, 200)'
            ],
            hoverOffset: 4
        }]
    },
    options: {
      responsive: true,
      aspectRatio: 1,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            // padding: 3
          },
        },
      }
  //   legend: {
  //     display: true,
  //     position: 'right',
  //     labels: {
  //     padding: 20
  //
  //   },
  //
  // },
},

});
