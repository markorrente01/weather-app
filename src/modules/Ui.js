import {Weather} from "./Weather";
export class Ui{
    constructor(){
        this.city = document.querySelector('.w-location');
        this.description = document.querySelector('.w-desc');
        this.string = document.querySelector('.w-string');
        this.icon = document.querySelector('.w-icon');
        this.humidity = document.querySelector('.w-humidity');
        this.dewPoint = document.querySelector('.w-dewPoint');
        this.feelsLike = document.querySelector('.w-feelsLike');
        this.wind = document.querySelector('.w-wind');
        this.changeBtn = document.querySelector('.change-location');
        this.close = document.querySelector('#close-modal');
        this.submitChange = document.querySelector('.save-location');
        this.cityValue = document.querySelector('#city');
        this.modal = document.querySelector('.modal');
    }
    paint(weather){
        this.city.textContent = weather.location.name;
        this.description.textContent = weather.current.condition.text;
        this.string.textContent = `${weather.current.temp_f}F ${weather.current.temp_c}C`;
        this.icon.setAttribute('src', weather.current.condition.icon);
        this.humidity.textContent = `Relative Humidity: ${weather.current.humidity}%`;
        this.feelsLike.textContent = `Feels Like: ${weather.current.feelslike_c}C (${weather.current.feelslike_f}F)`;
        this.dewPoint.textContent = `Dewpoint: ${weather.current.dewpoint_c}C (${weather.current.dewpoint_f}F)`;
        this.wind.textContent = `Wind: From the ${weather.current.wind_dir} at ${weather.current.wind_mph}mph`;
    }
    closeModal1(){
        this.modal.addEventListener('click', ()=>{
        if (this.modal.classList.contains('active')) {
            this.modal.classList.remove('active');
        }
    })
    }
    closeModal2(){
        this.close.addEventListener('click', ()=>{
            this.modal.classList.remove('active');
        })
    }
    openModal(){
        this.changeBtn.addEventListener('click', ()=>{
            this.modal.classList.add('active');
        })
    }
   
}