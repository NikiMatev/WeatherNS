import { Observable } from 'data/observable';
import geolocation = require("nativescript-geolocation");
import constants = require("./common/constants");
import requestor = require("./common/requestor");
import locationStore = require('./stores/locationStore');


export class HelloWorldModel extends Observable {

    private _counter: number;
    private _message: string;

    constructor() {
        super();

        if (!geolocation.isEnabled()) {
            geolocation.enableLocationRequest();
          }

          

          var location = geolocation.getCurrentLocation({timeout: 10000}).
          then(
            (loc) => {
              if (loc) {
                locationStore.saveLocation(loc);
                this.set('is_loading', true);
      
                var url = `${constants.WEATHER_URL}${constants.CURRENT_WEATHER_PATH}?lat=${loc.latitude}&lon=${loc.longitude}&apikey=${constants.WEATHER_APIKEY}`;
                requestor.get(url).then((res) => {
                this.set('is_loading', false);
                
                var weather = res.weather[0].main.toLowerCase();
                var weather_description = res.weather[0].description;
                var temperature = (res.main.temp) - 273.15;
                console.log(weather);
                console.log(weather_description);
                console.log(temperature);  
      
                var rain = '0';
                  if(res.rain){
                      rain = res.rain['3h'];
                  }
                        
                });
      
              }
            },
            (e) => {
              alert(e.message);
            });
    }

   
}
