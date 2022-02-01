// const { getOverlappingDaysInIntervals } = require("date-fns");
// import getOverlappingDaysInIntervals from "date-fns/getOverlappingDaysInIntervals";


//change map view on search
const search = document.getElementById('search')
search.value
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
                    console.log('Body:', this.responseText);
                    let test = JSON.parse(this.response)
                    console.log('test:', test);

                }
                if (xhr.status == 404) {
                    console.error('api not found')
                }

            }
        };

        xhr.send();


    })


};


console.log(`theft:,Shoplifting,"Counterfeiting/Forgery,Fondling,Rape,Drunkenness,Aggravated Assault,Burglary/Breaking & Entering,,,,,,`);
//exports = {lat,lon};
