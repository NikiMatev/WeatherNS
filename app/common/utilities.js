"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants = require("./constants");
function degreeToDirection(num) {
    var val = Math.floor((num / 22.5) + .5);
    return constants.WIND_DIRECTIONS[(val % 16)];
}
exports.degreeToDirection = degreeToDirection;
function describeWindSpeed(speed) {
    if (speed < 0.3) {
        return 'calm';
    }
    else if (speed >= 0.3 && speed < 1.6) {
        return 'light air';
    }
    else if (speed >= 1.6 && speed < 3.4) {
        return 'light breeze';
    }
    else if (speed >= 3.4 && speed < 5.5) {
        return 'gentle breeze';
    }
    else if (speed >= 5.5 && speed < 8) {
        return 'moderate breeze';
    }
    else if (speed >= 8 && speed < 10.8) {
        return 'fresh breeze';
    }
    else if (speed >= 10.8 && speed < 13.9) {
        return 'strong breeze';
    }
    else if (speed >= 13.9 && speed < 17.2) {
        return 'moderate gale';
    }
    else if (speed >= 17.2 && speed < 20.8) {
        return 'gale';
    }
    else if (speed >= 20.8 && speed < 24.5) {
        return 'strong gale';
    }
    else if (speed >= 24.5 && speed < 28.5) {
        return 'storm';
    }
    else if (speed >= 28.5 && speed < 32.7) {
        return 'violent storm';
    }
    else if (speed >= 32.7 && speed < 42) {
        return 'hurricane force';
    }
    return 'super typhoon';
}
exports.describeWindSpeed = describeWindSpeed;
function describeHumidity(humidity) {
    if (humidity >= 0 && humidity <= 40) {
        return 'very dry';
    }
    else if (humidity >= 40 && humidity <= 70) {
        return 'dry';
    }
    else if (humidity >= 85 && humidity <= 95) {
        return 'humid';
    }
    return 'very humid';
}
exports.describeHumidity = describeHumidity;
function describeTemperature(temp) {
    var celsius = convertKelvinToCelsius(temp);
    if (celsius >= 0 && celsius < 7) {
        return 'very cold';
    }
    else if (celsius >= 8 && celsius < 13) {
        return 'cold';
    }
    else if (celsius >= 13 && celsius < 18) {
        return 'cool';
    }
    else if (celsius >= 18 && celsius < 23) {
        return 'mild';
    }
    else if (celsius >= 23 && celsius < 28) {
        return 'warm';
    }
    else if (celsius >= 28 && celsius < 32) {
        return 'hot';
    }
    return 'very hot';
}
exports.describeTemperature = describeTemperature;
function convertKelvinToCelsius(celsius) {
    return celsius - 273.15;
}
exports.convertKelvinToCelsius = convertKelvinToCelsius;
function getTimeOfDay() {
    var hour = (new Date()).getHours();
    var time_of_day = 'night';
    if (hour >= 5 && hour <= 18) {
        time_of_day = 'day';
    }
    return time_of_day;
}
exports.getTimeOfDay = getTimeOfDay;
function getIcons(icon_names) {
    var icons = icon_names.map(function (name) {
        return {
            'name': name,
            'icon': String.fromCharCode(constants.WEATHER_ICONS.neutral[name])
        };
    });
    return icons;
}
exports.getIcons = getIcons;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXRpbGl0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQTBDO0FBRTFDLDJCQUFrQyxHQUFHO0lBQ25DLElBQUksR0FBRyxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEdBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBSEQsOENBR0M7QUFFRCwyQkFBa0MsS0FBSztJQUNyQyxFQUFFLENBQUEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNmLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxLQUFLLElBQUksR0FBRyxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksR0FBRyxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDeEIsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksR0FBRyxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sQ0FBQyxlQUFlLENBQUM7SUFDekIsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksR0FBRyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckMsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUN4QixDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDeEMsTUFBTSxDQUFDLGVBQWUsQ0FBQztJQUN6QixDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDeEMsTUFBTSxDQUFDLGVBQWUsQ0FBQztJQUN6QixDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekMsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekMsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekMsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekMsTUFBTSxDQUFDLGVBQWUsQ0FBQztJQUN6QixDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkMsTUFBTSxDQUFD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QUNuRSxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7SUFDSCxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQVJELDRCQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbnN0YW50cyA9IHJlcXVpcmUoJy4vY29uc3RhbnRzJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWdyZWVUb0RpcmVjdGlvbihudW0pIHtcbiAgdmFyIHZhbD0gTWF0aC5mbG9vcigobnVtLzIyLjUpKy41KTtcbiAgcmV0dXJuIGNvbnN0YW50cy5XSU5EX0RJUkVDVElPTlNbKHZhbCAlIDE2KV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXNjcmliZVdpbmRTcGVlZChzcGVlZCkge1xuICBpZihzcGVlZCA8IDAuMykge1xuICAgIHJldHVybiAnY2FsbSc7XG4gIH0gZWxzZSBpZihzcGVlZCA+PSAwLjMgJiYgc3BlZWQgPCAxLjYpIHtcbiAgICByZXR1cm4gJ2xpZ2h0IGFpcic7XG4gIH0gZWxzZSBpZiAoc3BlZWQgPj0gMS42ICYmIHNwZWVkIDwgMy40KSB7XG4gICAgcmV0dXJuICdsaWdodCBicmVlemUnO1xuICB9IGVsc2UgaWYgKHNwZWVkID49IDMuNCAmJiBzcGVlZCA8IDUuNSkge1xuICAgIHJldHVybiAnZ2VudGxlIGJyZWV6ZSc7XG4gIH0gZWxzZSBpZiAoc3BlZWQgPj0gNS41ICYmIHNwZWVkIDwgOCkge1xuICAgIHJldHVybiAnbW9kZXJhdGUgYnJlZXplJztcbiAgfSBlbHNlIGlmKHNwZWVkID49IDggJiYgc3BlZWQgPCAxMC44KSB7XG4gICAgcmV0dXJuICdmcmVzaCBicmVlemUnO1xuICB9IGVsc2UgaWYoc3BlZWQgPj0gMTAuOCAmJiBzcGVlZCA8IDEzLjkpIHtcbiAgICByZXR1cm4gJ3N0cm9uZyBicmVlemUnO1xuICB9IGVsc2UgaWYoc3BlZWQgPj0gMTMuOSAmJiBzcGVlZCA8IDE3LjIpIHtcbiAgICByZXR1cm4gJ21vZGVyYXRlIGdhbGUnO1xuICB9IGVsc2UgaWYgKHNwZWVkID49IDE3LjIgJiYgc3BlZWQgPCAyMC44KSB7XG4gICAgcmV0dXJuICdnYWxlJztcbiAgfSBlbHNlIGlmIChzcGVlZCA+PSAyMC44ICYmIHNwZWVkIDwgMjQuNSkge1xuICAgIHJldHVybiAnc3Ryb25nIGdhbGUnO1xuICB9IGVsc2UgaWYgKHNwZWVkID49IDI0LjUgJiYgc3BlZWQgPCAyOC41KSB7XG4gICAgcmV0dXJuICdzdG9ybSc7XG4gIH0gZWxzZSBpZiAoc3BlZWQgPj0gMjguNSAmJiBzcGVlZCA8IDMyLjcpIHtcbiAgICByZXR1cm4gJ3Zpb2xlbnQgc3Rvcm0nO1xuICB9IGVsc2UgaWYgKHNwZWVkID49IDMyLjcgJiYgc3BlZWQgPCA0Mikge1xuICAgIHJldHVybiAnaHVycmljYW5lIGZvcmNlJztcbiAgfVxuICByZXR1cm4gJ3N1cGVyIHR5cGhvb24nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzY3JpYmVIdW1pZGl0eShodW1pZGl0eSkge1xuICBpZiAoaHVtaWRpdHkgPj0gMCAmJiBodW1pZGl0eSA8PSA0MCkge1xuICAgIHJldHVybiAndmVyeSBkcnknO1xuICB9IGVsc2UgaWYgKGh1bWlkaXR5ID49IDQwICYmIGh1bWlkaXR5IDw9IDcwKSB7XG4gICAgcmV0dXJuICdkcnknO1xuICB9IGVsc2UgaWYgKGh1bWlkaXR5ID49IDg1ICYmIGh1bWlkaXR5IDw9IDk1KSB7XG4gICAgcmV0dXJuICdodW1pZCc7XG4gIH1cbiAgcmV0dXJuICd2ZXJ5IGh1bWlkJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc2NyaWJlVGVtcGVyYXR1cmUodGVtcCkge1xuICB2YXIgY2Vsc2l1cyA9IGNvbnZlcnRLZWx2aW5Ub0NlbHNpdXModGVtcCk7XG4gIGlmIChjZWxzaXVzID49IDAgJiYgY2Vsc2l1cyA8IDcpIHtcbiAgICByZXR1cm4gJ3ZlcnkgY29sZCc7XG4gIH0gZWxzZSBpZiAoY2Vsc2l1cyA+PSA4ICYmIGNlbHNpdXMgPCAxMykge1xuICAgIHJldHVybiAnY29sZCc7XG4gIH0gZWxzZSBpZiAoY2Vsc2l1cyA+PSAxMyAmJiBjZWxzaXVzIDwgMTgpIHtcbiAgICByZXR1cm4gJ2Nvb2wnO1xuICB9IGVsc2UgaWYgKGNlbHNpdXMgPj0gMTggJiYgY2Vsc2l1cyA8IDIzKSB7XG4gICAgcmV0dXJuICdtaWxkJztcbiAgfSBlbHNlIGlmIChjZWxzaXVzID49IDIzICYmIGNlbHNpdXMgPCAyOCkge1xuICAgIHJldHVybiAnd2FybSc7XG4gIH0gZWxzZSBpZiAoY2Vsc2l1cyA+PSAyOCAmJiBjZWxzaXVzIDwgMzIpIHtcbiAgICByZXR1cm4gJ2hvdCc7XG4gIH1cbiAgcmV0dXJuICd2ZXJ5IGhvdCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0S2VsdmluVG9DZWxzaXVzKGNlbHNpdXMpIHtcbiAgcmV0dXJuIGNlbHNpdXMgLSAyNzMuMTU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lT2ZEYXkoKSB7XG4gIHZhciBob3VyID0gKG5ldyBEYXRlKCkpLmdldEhvdXJzKCk7XG4gIHZhciB0aW1lX29mX2RheSA9ICduaWdodCc7XG4gIGlmKGhvdXIgPj0gNSAmJiBob3VyIDw9IDE4KXtcbiAgICB0aW1lX29mX2RheSA9ICdkYXknO1xuICB9XG4gIHJldHVybiB0aW1lX29mX2RheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEljb25zKGljb25fbmFtZXMpIHtcbiAgdmFyIGljb25zID0gaWNvbl9uYW1lcy5tYXAoKG5hbWUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJ25hbWUnOiBuYW1lLFxuICAgICAgJ2ljb24nOiBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvbnN0YW50cy5XRUFUSEVSX0lDT05TLm5ldXRyYWxbbmFtZV0pXG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiBpY29ucztcbn1cbiJdfQ==