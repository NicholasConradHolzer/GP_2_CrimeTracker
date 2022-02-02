// const { getOverlappingDaysInIntervals } = require("date-fns");
// import getOverlappingDaysInIntervals from "date-fns/getOverlappingDaysInIntervals";



//change map view on search
const searchBar = document.getElementById('searchBar')
searchBar.value
//change map size
// const expand = document.getElementsByClassName('expand')
// expand
// expand.addEventListener('click',)

//const latitude = lat;
//const longitude = lon;
//get user location

// let lat;
// let lon;

if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        console.log(lat, lon);

        ///MAP INITIALIZATION
        let map = L.map('map').setView([lat, lon], 13);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 16,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoiZG9wb2t1MTIiLCJhIjoiY2t5dXk4NjdjMXNzNTMybTF3Z2RwZWZnNiJ9.26Jvzr3lhVxU4VwGCPZYfQ'
        }).addTo(map);

        //popup
        let popup = L.popup();
        //Marker setup
        let marker = L.marker([lat, lon]).addTo(map);
        marker.bindPopup("<b>you're here</b>").openPopup();


        function onMapClick(e) {
            popup
                .setLatLng(e.latlng)
                .setContent(`You clicked the map at ${e.latlng.toString()}`)
                .openOn(map);
            map.setView(e.latlng);
        }

        map.on('click', onMapClick);



        const xhr = new XMLHttpRequest()
        xhr.open('GET', `https://api.crimeometer.com/v2/incidents/stats?lat=${lat}&lon=${lon}&distance=10mi&datetime_ini=2022-01-01T00:00:00.000Z&datetime_end=2022-01-31T23:59:59.000Z`, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('x-api-key', 'oXdb7FwF7O8ERBkdefWIn4qI2ouOUX2i1jr5lIyf');

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                console.log('Status:', xhr.status);
                if (xhr.status == 200) {

                    console.log('Headers:', this.getAllResponseHeaders());
                    let test = JSON.parse(this.response)
                    console.log('BODY:', test);
                    test.forEach(IncedentType => {

                        console.log(IncedentType[1])
                    });
                    console.log(Object.keys(test));

                }
                if (xhr.status == 404) {
                    console.error('api not found')
                }

            }
        };

        xhr.send();




        https://cdn.jsdelivr.net/npm/chart.js@3.7.0/dist/chart.min.js




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







    })


};


//exports = {lat,lon};
