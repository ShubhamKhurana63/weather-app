
var request=require('request');


var constants=require('../utils/AppConstants.js')
var longLatUri=constants.LONG_LAT_URI;


var getGeoAddress=(address)=>
{
return new Promise((resolve,reject)=>
{
console.log(">>>>>>>>>>>>>"+address);
   var encodedAddress = encodeURIComponent(address);
    var constants = require('../utils/AppConstants.js');
    //  = constants.LONG_LAT_URI;
    var longLatUri = constants.LONG_LAT_URI;
    request({
        url: longLatUri + encodedAddress,
        json: true
    }, (error, response, body) => {
        if (error) {
              reject("unable to connect to the servers");
        } else if (body.status === "ZERO_RESULTS") {
                             reject("unable to get the output/invalid address");    
    } else if (body.status === "OK") {
            var address = {
                formattedAddress: body.results[0].formatted_address,
                latitude: body.results[0].geometry.bounds.northeast.lat,
                longitude: body.results[0].geometry.bounds.northeast.lng
            }



            resolve(address);
                }
            });
})
}


module.exports={getGeoAddress};


// getGeoAddress("1301 lombard phyladelphia").then((data)=>
// {

// console.log(JSON.stringify(data,undefined,2));

// //console.log(data.formatted_address+"=========="+data.latitude+"============="+data.longitude);
// },(errorMessage)=>
// {
// console.log(errorMessage);
// });


