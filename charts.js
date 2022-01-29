//Fetch Data from REST Crime API

async function getCrimeData() {
    const apiUrl = ""
    const response = await fetch(apiUrl)
    const lineChartData = await response.json()

    const crimeType = lineChartData.map(  (x) => x.crime_committed)
    const dateCrime = lineChartData.map((x) => x.comitted_date)
    


    console.log(lineChartData)
}
getCrimeData()


