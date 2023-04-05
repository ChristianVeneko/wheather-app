export class Weather{
    constructor(city, countryCode){
        this.apikey = '34d399fb31be6b60c9115b49ebdf5f73';
        this.city = city;
        this.countryCode = countryCode;
        this.lat = 0;
        this.lan = 0;

    }

    async getLatLon(){
        const URL= `http://api.openweathermap.org/geo/1.0/direct?q=${this.city},${this.countryCode}&limit=5&appid=${this.apikey}`
        await fetch(URL)
        return data
    }
}