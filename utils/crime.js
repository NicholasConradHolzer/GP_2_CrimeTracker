var request = require('request');
//var map = require (navigator.geolocation.getCurrentPosition());
const {lat, lon} = require ('../public/map')

console.log (lat, lon);

request({
  method: 'GET',
  url: 'https://api.crimeometer.com/v2/incidents/stats?'+{lon}+'='+{lat}+'&distance=.25mi&datetime_ini=2020-01-01T00:00:00.000Z&datetime_end=2020-12-31T23:59:59.000Z',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'oXdb7FwF7O8ERBkdefWIn4qI2ouOUX2i1jr5lIyf'
  }}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});