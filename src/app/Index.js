const { Weather } = require("./weather")
const weather = new Weather('Barquisimeto', 've')
require('./index.css')
console.log("HOLAAAAA")

function fetchWeather(){

}

async function fetchLatLon(){
    const data = await weather.getLatLon();
    console.log(data);
}

fetchLatLon()

document.addEventListener('DOMContentLoaded', fetchWeather);
