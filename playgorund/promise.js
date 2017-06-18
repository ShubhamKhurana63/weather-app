

var asyncAdd=(a,b)=>
{

return new Promise((resolve,reject)=>
{
if( typeof a === 'number' && typeof b ==='number' )
{
resolve(a+b);
}else
{
    reject('arguements must be numbers');
}
});
};



asyncAdd(4,5).then((sum)=>
{
console.log("sum is =========="+sum);
return asyncAdd(sum,36);
},(message)=>
{
console.log(message);
}).then((result)=>
{
console.log("final sum is"+result);
},(message)=>
{
console.log(message);
})

















// var promise=new Promise((resolve,reject)=>
// {


// reject('error is there')

// setTimeout(resolve('things are fine!!'),5000);

// });




// //promise.then(success,error);

// promise.then((message)=>
// {

// console.log(message);


// },(message)=>
// {

// console.log(message);

// })