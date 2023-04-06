export class Weather{
    constructor(city, countryCode){
        this.apikey = '34d399fb31be6b60c9115b49ebdf5f73';
        this.city = city;
        this.countryCode = countryCode;
        this.lat = 0;
        this.lon = 0;

    }

    async getLatLon(){
        const URL= `http://api.openweathermap.org/geo/1.0/direct?q=${this.city},${this.countryCode}&limit=5&appid=${this.apikey}`
        const response = await fetch(URL, {
            method: "GET"
        })
        const data = response.json()
        return data
    }

    async getWeather(coordinates){
        this.lat = coordinates[0].lat;
        this.lon = coordinates[0].lon;
        const URL= `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this.apikey}&units=metric`;
        const response = await fetch(URL,{
            method: "GET"
        });
        const data = response.json()
        return data
    }

    changeLocation(city, countryCode){
        this.city = city;
        this.countryCode = countryCode;
    }
}