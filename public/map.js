//change map view on search
const search = document.getElementById('search')
search.value
//get user location
if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(position => {
        const { latitude } = position.coords;
        const { longitude } = position.coords;

        ///MAP INITIALIZATION
        let map = L.map('map').setView([latitude, longitude], 13);
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
        let marker = L.marker([latitude, longitude]).addTo(map);
        marker.bindPopup("<b>you're here</b>").openPopup();


        function onMapClick(e) {
            popup
                .setLatLng(e.latlng)
                .setContent(`You clicked the map at ${e.latlng.toString()}`)
                .openOn(map);
            map.setView(e.latlng);
        }

        map.on('click', onMapClick);


    })

}