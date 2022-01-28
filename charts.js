//Fetch Data from REST Crime API

async function getCrimeData() {
    const apiUrl = ""
    const response = await fetch(apiUrl)
    const barChartData = await response.json()

    const crimeType = barChartData.map(  (x) => x.crime_committed)
    const dateCrime = barChartData.map((x) => x.comitted_date)
    


    console.log(barChartData)
}
getCrimeData()


