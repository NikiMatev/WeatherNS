import { Observable } from 'data/observable';
import geolocation = require("nativescript-geolocation");
import constants = require("./common/constants");
import requestor = require("./common/requestor");
import locationStore = require('./stores/locationStore');
import utilities = require('./common/utilities');
import moment = require('moment');


export class HelloWorldModel extends Observable {

    private _counter: number;
    private _message: string;

    constructor() {
        super();

        if (!geolocation.isEnabled()) {
            geolocation.enableLocationRequest();
          }

          var time_of_day = utilities.getTimeOfDay();
          this.set('background_class', time_of_day);          
          this.setIconsTab1();

          

          var location = geolocation.getCurrentLocation({timeout: 10000}).
          then(
            (loc) => {
              if (loc) {

                locationStore.saveLatitude(loc.latitude);
                locationStore.saveLongitude(loc.longitude);
            
                this.set('is_loading', true);
                                
                var url = `${constants.WEATHER_URL}${constants.CURRENT_WEATHER_PATH}?lat=${loc.latitude}&lon=${loc.longitude}&apikey=${constants.WEATHER_APIKEY}`;
                requestor.get(url).then((res) => {
                this.set('is_loading', false);
                
                var weather = res.weather[0].main.toLowerCase();
                var weather_description = res.weather[0].description;
                var temperature = (res.main.temp);
                var icon = constants.WEATHER_ICONS[time_of_day][weather];
      
                var rain = '0';
                  if(res.rain){
                      rain = res.rain['3h'];
                  }

            this.set('icon', String.fromCharCode(icon));
            this.set('temperature', `${utilities.describeTemperature(Math.floor(temperature))} (${utilities.convertKelvinToCelsius(temperature).toFixed(2)} °C)`);
            this.set('weather', weather_description);
            this.set('place', `${res.name}, ${res.sys.country}`);
            this.set('wind', `${utilities.describeWindSpeed(res.wind.speed)} ${res.wind.speed}m/s ${utilities.degreeToDirection(res.wind.deg)} (${res.wind.deg}°)`);
            this.set('clouds', `${res.clouds.all}%`);
            this.set('pressure', `${res.main.pressure} hpa`);
            this.set('humidity', `${utilities.describeHumidity(res.main.humidity)} (${res.main.humidity}%)`);
            this.set('rain', `${rain}%`);
            this.set('sunrise', moment.unix(res.sys.sunrise).format('hh:mm a'));
            this.set('sunset', moment.unix(res.sys.sunset).format('hh:mm a'));
                        
                });
              }
            },
            (e) => {
              alert(e.message);
            });

            //Forecast request
            

            const promise = new Promise((resolve, reject) => {
              resolve(location);
            });
            promise.then((res) => {
              var forecast_lat = locationStore.getLatitude();
              var forecast_lon = locationStore.getLongitude();
              var url_Forecast = `${constants.WEATHER_URL}${constants.WEATHER_FORECAST_PATH}?lat=${forecast_lat}&lon=${forecast_lon}&apikey=${constants.WEATHER_APIKEY}`;
              console.log(url_Forecast);
              this.setIconsTab2();
                                        
              requestor.get(url_Forecast).then((response) => {
                                
                var forecast = this.getForecast(response);
                this.set('forecast', forecast);
                console.log(forecast);
                
              });
            });
            promise.catch((err) => {
              // This is never called
            }); 
          
    }
    getForecast(response) {
      var forecast = [];
      var list = response.list.splice(1);
      list.forEach((item) => {
        forecast.push({
          day: moment.unix(item.dt).format('MMM DD (ddd)'),
          icon: String.fromCharCode(constants.WEATHER_ICONS['day'][item.weather[0].main.toLowerCase()]),
          temperature: {
            day: `${utilities.describeTemperature(item.temp.day)}`,
            night:`${utilities.describeTemperature(item.temp.night)}`
          },
          wind: `${item.speed}m/s`,
          clouds: `${item.clouds}%`,
          pressure: `${item.pressure} hpa`,
          description: item.weather[0].description
        })
      });  
      return forecast;
    }
    setIconsTab2() {
      var icons = utilities.getIcons(['temperature', 'wind', 'cloud', 'pressure']);
      icons.forEach((item) => {
        this.set(`${item.name}_icon`, item.icon);
      });
    }  

    
    setIconsTab1() {
        var icons = utilities.getIcons([
          'temperature', 'wind', 'cloud',
          'pressure', 'humidity', 'rain',
          'sunrise', 'sunset'
        ]);
        icons.forEach((item) => {
          this.set(`${item.name}_icon`, item.icon);
        });
      }   
}
