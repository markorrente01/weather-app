export class Weather{
    constructor(city){
        this.apiKey = 'ecf3f0acc74e41a48eb143618252507';
        this.city = city;
    }
    async getWeather(){
        const weatherResponse = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}&aqi=no`);
        const weatherData = await weatherResponse.json();
        return weatherData;
    }
    changeLocation(city){
        this.city = city;
    }
}