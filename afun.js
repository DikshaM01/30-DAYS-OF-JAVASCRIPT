//in anonymous function we use only keyword function without using name of the function
 var greet=function(){
    console.log('welcome to github')
 };
 greet();

 var greets=function(platform){
   console.log('welcome to',platform)
 };
 greet('github');

 setTimeout(function()
 {
   console.log('welcome');
 },2000);

 (function(){
   console.log('welcomee');
 })();