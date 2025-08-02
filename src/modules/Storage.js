export class Storage{
    constructor(){
        this.city;
        this.defaultCity = 'Abuja';
    }
    save(city){
        localStorage.setItem('city', city)
    }
    get(){
        if (localStorage.getItem('city')===null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }
        return this.city;
    }
}