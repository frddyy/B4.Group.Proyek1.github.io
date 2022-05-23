//jumlah perusahaan yang ikut tender tiap tahun
var ctx = document.getElementById("one");
var one = new Chart(ctx,{
  type: 'line',
  data: {
    datasets: [
      {
        borderColor: 'rgb(0, 0, 0)',
        fill: false,
        backgroundColor: [
           'rgb(0, 0,0)'
        ]
      }
    ],
  },
  plugins: [ChartDataSource],
  options: {
    plugins:{
      datasource: {
        url: 'Visualisasi 2.xlsx',
        datasetLabels: "'Sheet1'!A1",
        indexLabels: "'Sheet1'!B3:F3",
        data: "'Sheet1'!B4:F4"
        
      }
    }
  },
});

//Jumlah Peserta Tender Terbanyak Tiap Tahun
var ctx = document.getElementById("two");
var two = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [
      { 
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
        ],
        hoverOffset: 4
      }
    ]
  },
  plugins: [ChartDataSource],
  options: {
      plugins: {
          datasource: {
              url: 'Visualisasi 2.xlsx',
              datasetLabels: "'Sheet2!A2'",
              indexLabels: "'Sheet2'!B2:F2",
              data: "'Sheet2'!B5:F5"
          }
      }
  }
});

// perusahaan yang menang 
var ctx = document.getElementById('three');

var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
      datasets: [
        { 
          backgroundColor: '#000000',
          borderColor: '#000000',
          borderWidth: 1
        }
        
      ]
    },
    plugins: [ChartDataSource],
    options: {
        plugins: {
            datasource: {
                url: 'Visualisasi 2.xlsx',
                datasetLabels: "'Sheet3'!E5",
                indexLabels: "'Sheet3'!F4:O4",
                data: "'Sheet3'!F5:O5"
            }
        },
        scales: {
          yAxes: [{
              ticks: {
                  min: 0,
                  max: 15
              }
          }]
      }
    }
  });

// jumlah tender selesai

var ctx = document.getElementById("four");
var four = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [
      { 
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
        ],
        hoverOffset: 4
      }
    ]
  },
  plugins: [ChartDataSource],
  options: {
      plugins: {
          datasource: {
              url: 'Visualisasi 2.xlsx',
              datasetLabels: "'Sheet5!A2'",
              indexLabels: "'Sheet5'!B2:F2",
              data: "'Sheet5'!B3:F3"
          }
      }
  }
});

// jumlah batal
var ctx = document.getElementById("five");
var five = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [
      { 
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
        ],
        hoverOffset: 4
      }
    ]
  },
  plugins: [ChartDataSource],
  options: {
      plugins: {
          datasource: {
              url: 'Visualisasi 2.xlsx',
              datasetLabels: "'Sheet 6!A2'",
              indexLabels: "'Sheet6'!B2:F2",
              data: "'Sheet6'!B3:F3"
          }
      }
  }
});

// // jumlah batal
// var ctx = document.getElementById("six");
// var six = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     datasets: [
//       { 
//         backgroundColor: "#FF7F50",
//         hoverOffset: 4
//       }
//     ]
//   },
//   plugins: [ChartDataSource],
//   options: {
//       plugins: {
//           datasource: {
//               url: 'Visualisasi 2.xlsx',
//               datasetLabels: "'Sheet7'!E4",
//               indexLabels: "'Sheet7'!F3:J3",
//               data: "'Sheet7'!F4:J4"
//           }
//       }
//   }
// });

// NILAI PAGU PAKET TERBESAR
var ctx = document.getElementById("six");
var six = new Chart(ctx, {
  type: 'bar',
  data: {
    datasets: [
      { 
        backgroundColor: "#FF7F50",
        hoverOffset: 4
      }
    ]
  },
  plugins: [ChartDataSource],
  options: {
      plugins: {
          datasource: {
              url: 'Visualisasi 2.xlsx',
              datasetLabels: "'Sheet7'!E2",
              indexLabels: "'Sheet7'!F2:J2",
              data: "'Sheet7'!F4:J4"
          }
      }
  }
});

// NILAI PAGU PAKET TERKECIL
var ctx = document.getElementById("seven");
var seven = new Chart(ctx, {
  type: 'line',
  data: {
    datasets: [
      { 
        backgroundColor: "#5F9EA0",
        hoverOffset: 4
      }
    ]
  },
  plugins: [ChartDataSource],
  options: {
      plugins: {
          datasource: {
              url: 'Visualisasi 2.xlsx',
              datasetLabels: "'Sheet8'!A2",
              indexLabels: "'Sheet8'!B2:F2",
              data: "'Sheet8'!B4:F4"
          }
      }
  }
});