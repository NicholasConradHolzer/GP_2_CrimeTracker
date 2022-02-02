//Fetch Data from REST Crime API



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