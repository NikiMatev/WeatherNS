"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WEATHER_URL = 'http://api.openweathermap.org/data/2.5/';
exports.WEATHER_APIKEY = 'fe42f211c172ea789836aa7c5d4d8655';
exports.CURRENT_WEATHER_PATH = 'weather/';
exports.WEATHER_FORECAST_PATH = 'forecast/daily/';
exports.WEATHER_ICONS = {
    day: {
        'clear': 0xf00d,
        'clouds': 0xf002,
        'drizzle': 0xf009,
        'rain': 0xf008,
        'thunderstorm': 0x010,
        'snow': 0xf00a,
        'mist': 0xf0b6
    },
    night: {
        'clear': 0xf02e,
        'clouds': 0xf086,
        'drizzle': 0xf029,
        'rain': 0xf028,
        'thunderstorm': 0xf02d,
        'snow': 0xf02a,
        'mist': 0xf04a
    },
    neutral: {
        'temperature': 0xf055,
        'wind': 0xf050,
        'cloud': 0xf041,
        'pressure': 0xf079,
        'humidity': 0xf07a,
        'rain': 0xf019,
        'sunrise': 0xf046,
        'sunset': 0xf052
    }
};
exports.WIND_DIRECTIONS = [
    "North", "North-northeast", "Northeast",
    "East-northeast", "East", "East-southeast", "Southeast",
    "South-southeast", "South", "South-southwest", "Southwest",
    "West-southwest", "West", "West-northwest", "Northwest", "North-northwest"
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uc3RhbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQWEsUUFBQSxXQUFXLEdBQUcseUNBQXlDLENBQUM7QUFDeEQsUUFBQSxjQUFjLEdBQUcsa0NBQWtDLENBQUM7QUFDcEQsUUFBQSxvQkFBb0IsR0FBRyxVQUFVLENBQUM7QUFDbEMsUUFBQSxxQkFBcUIsR0FBRyxpQkFBaUIsQ0FBQztBQUUxQyxRQUFBLGFBQWEsR0FBRztJQUN6QixHQUFHLEVBQUU7UUFDSCxPQUFPLEVBQUUsTUFBTTtRQUNmLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsY0FBYyxFQUFFLEtBQUs7UUFDckIsTUFBTSxFQUFFLE1BQU07UUFDZCxNQUFNLEVBQUUsTUFBTTtLQUNmO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsT0FBTyxFQUFFLE1BQU07UUFDZixRQUFRLEVBQUUsTUFBTTtRQUNoQixTQUFTLEVBQUUsTUFBTTtRQUNqQixNQUFNLEVBQUUsTUFBTTtRQUNkLGNBQWMsRUFBRSxNQUFNO1FBQ3RCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsTUFBTSxFQUFFLE1BQU07S0FDZjtJQUNELE9BQU8sRUFBRTtRQUNQLGFBQWEsRUFBRSxNQUFNO1FBQ3JCLE1BQU0sRUFBRSxNQUFNO1FBQ2QsT0FBTyxFQUFFLE1BQU07UUFDZixVQUFVLEVBQUUsTUFBTTtRQUNsQixVQUFVLEVBQUUsTUFBTTtRQUNsQixNQUFNLEVBQUUsTUFBTTtRQUNkLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLFFBQVEsRUFBRSxNQUFNO0tBQ2pCO0NBQ0YsQ0FBQztBQUVXLFFBQUEsZUFBZSxHQUFHO0lBQzdCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXO0lBQ3ZDLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXO0lBQ3ZELGlCQUFpQixFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXO0lBQzFELGdCQUFnQixFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsaUJBQWlCO0NBQzNFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgV0VBVEhFUl9VUkwgPSAnaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvJztcclxuZXhwb3J0IGNvbnN0IFdFQVRIRVJfQVBJS0VZID0gJ2ZlNDJmMjExYzE3MmVhNzg5ODM2YWE3YzVkNGQ4NjU1JztcclxuZXhwb3J0IGNvbnN0IENVUlJFTlRfV0VBVEhFUl9QQVRIID0gJ3dlYXRoZXIvJztcclxuZXhwb3J0IGNvbnN0IFdFQVRIRVJfRk9SRUNBU1RfUEFUSCA9ICdmb3JlY2FzdC9kYWlseS8nO1xyXG5cclxuZXhwb3J0IGNvbnN0IFdFQVRIRVJfSUNPTlMgPSB7XHJcbiAgICBkYXk6IHtcclxuICAgICAgJ2NsZWFyJzogMHhmMDBkLFxyXG4gICAgICAnY2xvdWRzJzogMHhmMDAyLFxyXG4gICAgICAnZHJpenpsZSc6IDB4ZjAwOSxcclxuICAgICAgJ3JhaW4nOiAweGYwMDgsXHJcbiAgICAgICd0aHVuZGVyc3Rvcm0nOiAweDAxMCxcclxuICAgICAgJ3Nub3cnOiAweGYwMGEsXHJcbiAgICAgICdtaXN0JzogMHhmMGI2XHJcbiAgICB9LFxyXG4gICAgbmlnaHQ6IHtcclxuICAgICAgJ2NsZWFyJzogMHhmMDJlLFxyXG4gICAgICAnY2xvdWRzJzogMHhmMDg2LFxyXG4gICAgICAnZHJpenpsZSc6IDB4ZjAyOSxcclxuICAgICAgJ3JhaW4nOiAweGYwMjgsXHJcbiAgICAgICd0aHVuZGVyc3Rvcm0nOiAweGYwMmQsXHJcbiAgICAgICdzbm93JzogMHhmMDJhLFxyXG4gICAgICAnbWlzdCc6IDB4ZjA0YVxyXG4gICAgfSxcclxuICAgIG5ldXRyYWw6IHtcclxuICAgICAgJ3RlbXBlcmF0dXJlJzogMHhmMDU1LFxyXG4gICAgICAnd2luZCc6IDB4ZjA1MCxcclxuICAgICAgJ2Nsb3VkJzogMHhmMDQxLFxyXG4gICAgICAncHJlc3N1cmUnOiAweGYwNzksXHJcbiAgICAgICdodW1pZGl0eSc6IDB4ZjA3YSxcclxuICAgICAgJ3JhaW4nOiAweGYwMTksXHJcbiAgICAgICdzdW5yaXNlJzogMHhmMDQ2LFxyXG4gICAgICAnc3Vuc2V0JzogMHhmMDUyXHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgY29uc3QgV0lORF9ESVJFQ1RJT05TID0gW1xyXG4gICAgXCJOb3J0aFwiLCBcIk5vcnRoLW5vcnRoZWFzdFwiLCBcIk5vcnRoZWFzdFwiLFxyXG4gICAgXCJFYXN0LW5vcnRoZWFzdFwiLCBcIkVhc3RcIiwgXCJFYXN0LXNvdXRoZWFzdFwiLCBcIlNvdXRoZWFzdFwiLFxyXG4gICAgXCJTb3V0aC1zb3V0aGVhc3RcIiwgXCJTb3V0aFwiLCBcIlNvdXRoLXNvdXRod2VzdFwiLCBcIlNvdXRod2VzdFwiLFxyXG4gICAgXCJXZXN0LXNvdXRod2VzdFwiLCBcIldlc3RcIiwgXCJXZXN0LW5vcnRod2VzdFwiLCBcIk5vcnRod2VzdFwiLCBcIk5vcnRoLW5vcnRod2VzdFwiXHJcbiAgXTtcclxuICAiXX0=