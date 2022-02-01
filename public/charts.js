//Fetch Data from REST Crime API
https://cdn.jsdelivr.net/npm/chart.js@3.7.0/dist/chart.min.js

// const apiUrl = "https://api.crimeometer.com/v2/incidents/stats?lat=33.729610&lon=-84.409736&distance=.25mi&datetime_ini=2020-01-01T00:00:00.000Z&datetime_end=2020-12-31T23:59:59.000Z"
// const response = await fetch(apiUrl)
// const lineChartData = await response.json()

// const crimeType = lineChartData.map((x) => x.crime_committed)
// const dateCrime = lineChartData.map((x) => x.comitted_date)



// console.log(lineChartData)

// getCrimeData()

var ctx = document.getElementById('canvas').getContext('2d');
var mybarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Theft', 'Assault', 'DUI', 'Drugs', 'Auto theft', 'Fraud'],
        datasets: [{
            label: 'type of crime',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


// function getCrimeData() {
//     axios
//         .get('https://api.crimeometer.com/v2/incidents/stats?lat=33.729610&lon=-84.409736&distance=.25mi&datetime_ini=2020-01-01T00:00:00.000Z&datetime_end=2020-12-31T23:59:59.000Z')
//         .then((res) => {
//             //Hide chart error element on successful request
//             document.querySelector('#chart-error').classList.add('hidden');
//             cT = res.data.crime_incedent_type.toFixed(00);
//             nI = res.data.number_incedent_type.toFixed(00);
//             //call updatechart() funtion to update data
//             updateChart(robbery, dui, assault, drugO, blurglary, motortheft,)

//         })
//         .catch((e) =>
//             // Reveal API error element on failed request
//             document.querySelector('#chart-error').classList.remove('hidden')
//         );
// }


