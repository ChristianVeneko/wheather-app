export class UI{
    constructor(){
       this.location = document.getElementById('weather-location');
       this.desc = document.getElementById('weather-description');
       this.wstring = document.getElementById('weather-string');
       this.humidity= document.getElementById('weather-humidity');
       this.wind = document.getElementById('weather-wind');

    }

    render(weather){
        this.location.textContent = weather.name + ' / ' + weather.sys.country
        this.desc.textContent = weather.weather[0].description;
        this.wstring.textContent = weather.main.temp + '°C';
        this.humidity.textContent = weather.main.humidity + "%";
        this.wind.textContent = weather.wind.speed + 'm/s'
    }

   
}