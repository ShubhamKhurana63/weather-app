console.log('starting of the app');

setTimeout(()=>
{

console.log("keep things asynchronous");


},2000);

setTimeout(()=>
{
console.log("this call is an asynchronous call");


},0);




console.log('ending of the app');