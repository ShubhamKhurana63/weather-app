var request = require('request');

var constants = require('../utils/AppConstants.js');

var util = require('util');

var weatherUrl = constants.WEATHER_URL;



var getWeather = (lat, lng, callback) => {

    request({
        url: weatherUrl + lat + ',' + lng,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback("the connection with forecast.io canoot be established");
        }
        else if (response.statusCode === 400) {
            callback("bad request");

        }
        else if (response.statusCode === 200) {
            var weather = {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            }

            callback(undefined, weather);

        }
    });

}


module.exports = { getWeather };










