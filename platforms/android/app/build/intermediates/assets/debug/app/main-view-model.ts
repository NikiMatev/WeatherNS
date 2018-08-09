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

            //Forecast request

            var locationForecast = locationStore.getLocation();
    var url = `${constants.WEATHER_URL}${constants.WEATHER_FORECAST_PATH}?cnt=6&lat=${locationForecast.latitude}&lon=${locationForecast.longitude}&apikey=${constants.WEATHER_APIKEY}`;

    var time_of_day = utilities.getTimeOfDay();
    this.set('is_loading', true);
    this.set('background_class', time_of_day);
    this.setIcons();

    requestor.get(url).then((response) => {
      this.set('is_loading', false);
      var forecast = this.getForecast(response);
      this.set('forecast', forecast);
    });
  }

  private getForecast(response) {
    var forecast = [];
    var list = response.list.splice(1);
    list.forEach((item) => {
      forecast.push({
        day: moment.unix(item.dt).format('MMM DD (ddd)'),
        icon: String.fromCharCode(constants.WEATHER_ICONS['day'][item.weather[0].main.toLowerCase()]),
        temperature: {
          day: `${utilities.describeTemperature(item.temp.day)}`,
          night: `${utilities.describeTemperature(item.temp.night)}`
        },
        wind: `${item.speed}m/s`,
        clouds: `${item.clouds}%`,
        pressure: `${item.pressure} hpa`,
        description: item.weather[0].description
      })
    });

    return forecast;
  }

  private setIcons() {
    var icons = utilities.getIcons(['temperature', 'wind', 'cloud', 'pressure']);
    icons.forEach((item) => {
      this.set(`${item.name}_icon`, item.icon);
    });
  }
    }

   

