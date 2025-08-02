import {Weather} from "./modules/Weather.js";
import {Ui} from "./modules/Ui.js";
import {Storage} from "./modules/Storage.js";
// init the imported classes
const storage = new Storage();
const storeLocation = storage.get()
const weather = new Weather(storeLocation);
const ui = new Ui();
    
document.addEventListener('DOMContentLoaded', getWeather);
ui.submitChange.addEventListener('click', ()=>{
    const city = ui.cityValue.value
    if (city==='') {
        handleError(`city input can't be empty...`);
    } else {
        weather.changeLocation(city);
        storage.save(city)
        getWeather();
        ui.cityValue.value = '';
        ui.modal.classList.remove('active');
    }
})
function getWeather() {
    weather.getWeather().then(data=>{
    ui.paint(data)
    }).catch(err=>console.log(err))
    ui.closeModal2();
    ui.openModal();
}
function handleError(name){
    const smallTxt = ui.inputWarn;
        smallTxt.classList.add('active');
        smallTxt.textContent = name;
        setTimeout(() => {
            smallTxt.classList.remove('active')
        }, 3000);
    }