const request = require('request');



var getGeoCodeAddresses = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
    var constants = require('../utils/AppConstants.js');
    //  = constants.LONG_LAT_URI;

    var longLatUri = constants.LONG_LAT_URI;
    request({

        url: longLatUri + encodedAddress,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback("unable to connect to the servers");
        } else if (body.status === "ZERO_RESULTS") {
            console.log();
            callback("unable to get the output/invalid address");
        } else if (body.status === "OK") {
            var address = {
                formattedAddress: body.results[0].formatted_address,
                latitude: body.results[0].geometry.bounds.northeast.lat,
                longitude: body.results[0].geometry.bounds.northeast.lng
            }
            callback(undefined,address);
            // console.log(`the formatted address is==========>${}`);
            // console.log(`the latitude of the  address is==========>${body.results[0].geometry.bounds.northeast.lat}`);
            // console.log(`the longitude of the  address is==========>${body.results[0].geometry.bounds.northeast.lng}`);
        }
        // console.log(JSON.stringify(body,undefined,2));
    });
}


module.exports = { getGeoCodeAddresses };