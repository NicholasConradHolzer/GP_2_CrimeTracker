// const { getOverlappingDaysInIntervals } = require("date-fns");
// import getOverlappingDaysInIntervals from "date-fns/getOverlappingDaysInIntervals";
//change map view on search
const search = document.getElementById('search')
search.value

//const latitude = lat;
//const longitude = lon;
//get user location

// let lat;
// let lon;

if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon  = position.coords.longitude;

        console.log(lat,lon);

        ///MAP INITIALIZATION
        let map = L.map('map').setView([lat, lon], 13);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
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

        var request = new XMLHttpRequest();

        request.open('GET', 'https://api.crimeometer.com/v2/incidents/stats?'+{lat}+'='+{lon}+'&distance=10mi&datetime_ini=2020-01-01T00:00:00.000Z&datetime_end=2020-12-31T23:59:59.000Z');
        
        request.setRequestHeader('Content-Type', 'application/json');
        request.setRequestHeader('x-api-key', 'oXdb7FwF7O8ERBkdefWIn4qI2ouOUX2i1jr5lIyf');
        
        request.onreadystatechange = function () {
          if (this.readyState === 4) {
            console.log('Status:', this.status);
            console.log('Headers:', this.getAllResponseHeaders());
            console.log('Body:', this.responseText);
          }
        };
        
        request.send();


    })

    
};



//exports = {lat,lon};
