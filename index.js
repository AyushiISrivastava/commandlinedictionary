const express=require("express");
var endpoints = require("./endpoint.js");




var app=express();




endpoints(app);
app.listen(3000,()=>{
	console.log('app started');
});