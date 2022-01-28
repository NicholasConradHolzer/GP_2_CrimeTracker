//Fetch Data from REST Crime API

async function getCrimeData() {
const apiUrl = ""
const response = await fetch(apiUrl)
const barChartData = await response.json()

console.log(barChartData)



}