
const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

const constants = require('./utils/AppConstants.js');

var weather = require('./weather/weather.js');


var arg = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
}).help().alias('help', 'h').argv;

var address = arg.a;


geocode.getGeoCodeAddresses(address, (errorMessage, body) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(body, undefined, 2));
        console.log(">>>>>>>>>>>>>>>>>"+body.formattedAddress);


// console.log(">>>>>>>>>>>>"+body.latitude);
// console.log(">>>>>>>>>>>>"+body.longitude);


        weather.getWeather(body.latitude, body.longitude, (errorMessage, body) => {
            if (errorMessage) {
                console.log(errorMessage)
            }
            else {
                console.log(JSON.stringify(body, undefined, 2));
            }
        })







    }
});









//secret key for weather forcast API
//24713c21dd2984f018bcc698ac6de5bf




















// var encodedAddress=encodeURIComponent(address);

// request({

// url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
// json:true
// },(error,response,body)=>
// {
//     debugger;
// if(error)
// {
// console.log("unable to connect to the servers");
// }else if(body.status==="ZERO_RESULTS")
// {
// console.log("unable to get the output/invalid address");
// }else if(body.status==="OK")
// {
// console.log(`the formatted address is==========>${body.results[0].formatted_address}`);
// console.log(`the latitude of the  address is==========>${body.results[0].geometry.bounds.northeast.lat}`);
// console.log(`the longitude of the  address is==========>${body.results[0].geometry.bounds.northeast.lng}`);
// }
// // console.log(JSON.stringify(body,undefined,2));
// });