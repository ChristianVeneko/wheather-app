const { Weather } = require("./weather")
const { UI } = require("./UI");
const { Store } =require("./storage");
const ui = new UI()
const store = new Store()

const {city, countryCode} = store.getLocationData();
const weather = new Weather(city, countryCode)
require('./index.css')


async function fetchLatLon(){
    const data = await weather.getLatLon(); 
    fetchWeather(data)
}
async function fetchWeather(coordinates){
    const data = await weather.getWeather(coordinates);
    ui.render(data)

}

document.getElementById('w-change-btn').addEventListener('click', (e) =>{
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;
    weather.changeLocation(city,countryCode)
    store.setLocationData(city,countryCode)
    fetchLatLon()
    e.preventDefault();
})

document.addEventListener('DOMContentLoaded', fetchLatLon);
