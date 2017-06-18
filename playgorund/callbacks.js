console.log('starting the self callback');
var getUser=(id,callback)=>
{
var user={name:'shubham',age:id};


setTimeout(()=>
{
callback(user);
},2000)


}
getUser(12,(user)=>
{
console.log(user);
});
console.log('ending the self callback');