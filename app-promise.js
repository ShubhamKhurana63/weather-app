const yargs = require('yargs');

const axios = require('axios');


const constants = require('./utils/AppConstants.js');



var arg = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
}).help().alias('help', 'h').argv;

var address = arg.a;

console.log(address);


axios.get(constants.LONG_LAT_URI + encodeURIComponent(address)).then((response) => {

console.log("inside the response===========")

if(response.data.status==='ZERO_RESULTS')
{
throw new Error('Unable to find address');
}
var lat=response.data.results[0].geometry.location.lat;

var lng=response.data.results[0].geometry.location.lng;

console.log("======="+lat);

console.log("========"+lng);


console.log(response.data.results[0].formatted_address);
var weatherUrl=constants.WEATHER_URL+lat+","+lng;

console.log();

return axios.get(weatherUrl);
}).then((results)=>
{
console.log("temperature============"+results.data.currently.temperature);
console.log("apparentTemperature========"+results.data.currently.apparentTemperature);
}).catch((e) => {
    if (e.code==='ECONNREFUSED') {
console.log('Unable to connect to API servers');
    }else
    {
console.log(e.message);
    }
});
