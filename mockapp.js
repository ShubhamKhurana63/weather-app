var promise1=require('./playgorund/promise-2.js');


promise1.getGeoAddress("1301 lombard phyladelphia").then((data)=>
{
console.log(JSON.stringify(data,undefined,2));
//console.log(data.formatted_address+"=========="+data.latitude+"============="+data.longitude);
},(errorMessage)=>
{
console.log(errorMessage);
});