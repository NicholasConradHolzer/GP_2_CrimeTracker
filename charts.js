//Fetch Data from REST Crime API

var ctx = document.getElementById('canvas').getContext('2d');
var myChart = new Chart (ctx, {
    type: 'line',
    data: {
        labels: []
        
    }

})
async function getCrimeData() {
    const apiUrl = "https://api.crimeometer.com/v2/incidents/stats?lat=33.729610&lon=-84.409736&distance=.25mi&datetime_ini=2020-01-01T00:00:00.000Z&datetime_end=2020-12-31T23:59:59.000Z"
    const response = await fetch(apiUrl)
    const lineChartData = await response.json()

    const crimeType = lineChartData.map(  (x) => x.crime_committed)
    const dateCrime = lineChartData.map((x) => x.comitted_date)
    


    console.log(lineChartData)
}
getCrimeData()


