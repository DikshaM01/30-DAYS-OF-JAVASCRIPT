"use strict"; //treat all JS code as newer version
//the difference between var , let and const is that var is from es5 version and let and const is from es6 version.
//variable and constant
const accountId=44453; //it cant be changed once set
let accountEmail="di@gmail.com"  //
var accountPassword="12345"    //
let accountCity="Jaipur"    //
console.log(accountId);
accountEmail="ma@gmail.com"
accountPassword="23456"
accountCity="Bengaluru"
console.table([accountId,accountEmail,accountPassword,accountCity]) //if we want to print multiple variables 
                                                                      //at same time
//var and let are scope based, var is function scoped while let is block based
//DATA TYPES
//alert(3+3) it will work on browser.
//when to use semicolons and when to not->when in same line you want to print then write semicolon
console.log(3+3) //code redability is high priority
console.log("hi")
let name="di" //string
let age=3 //integer
let izlength=false //boolean
//null-standalone value 
//undefined ,symbol(to find uniqueness),object
console.log(typeof "di");
console.log(typeof null) //object
console.log(typeof undefined) //undefined

//CONVERSION 
let score="33" 
console.log(typeof score) //string
console.log(typeof(score)) //string
let valueinnumber=Number(score)
console.log(typeof valueinnumber)
let a="33abc"
let b=Number(a)
console.log([b,typeof b]) //NaN,number -> what is NaN not a number, null will be converted to 0 in number, undefined will be converted to NaN
console.log(b*2) 
//a number can be easily converted to number and other type will gve NaN while getting converted to number
  let isLoggedin=1;
  let booleaniisloggedin=Boolean(isLoggedin)
  console.log(booleaniisloggedin) //true


  // ***********************************OPERATIONS************************************************
//-> all basic operations like in arithmetic +,-,*,/,%
  let value=3;
  let negvalue=-value;
  console.log(negvalue) //-3 
  let str1="hello"
  let str2="world"
  let str3=str1+" " +str2; //hello world
  console.log(str3)
  console.log("1"+2+2) //122 as string
  console.log(1+2+"2")//32 
  //first number is string so it will come as string but next is number so ..
  console.log((3+4)*(5%3)) //14
  console.log(true) //true
  console.log(+true) //1
  console.log(-false) //-0
  console.log(+"") //0

  let num1,num2,num3
  num1=num2=num3=2+2
  let gamecounter=100
  //increment and decrement operator
  gamecounter++
  console.log(gamecounter) //101 
  ++gamecounter
  console.log(gamecounter) //102

  //comparison operators
  console.log(2>1)//true
  console.log(2>=1)//true
  console.log(2==1)//false
  console.log(2!=1)//false

  console.log("2">1) //true
  console.log("02" >1) //true
  //typescript doesnot allow to use different languages
  console.log(null>0) //false
  console.log(null==0) //false
  console.log(null>=0) //true comparison treat null as a 0
  console.log(undefined==0) //false with every operations 
  //=== it is strict one..it will check data type also strict equality operator and unstrict equality operator
  //two type-> primitive and not primitive according to storing memory and accessing the memory
  //primitive-> 7 call by value= string,number(integer,float.etc),boolean,null,undefined,symbol,bigint
  //refrence type->non primitive= arrays,objects,functions
  const id=Symbol('23')
  const id1=Symbol('123')
  console.log(id==id1)
  console.log(id===id1)
  //to take input from a user  var r = parseFloat(readLine());
  //************** STACK AND HEAP MEMORY ***********************************************************
  //stack is primitive and heap is non-primitive
  //stack memory contains copy of memory but heap will reflect original
let name2="diksha"
let name3=name2
console.log(name3) //diksha
name3="shibu"
console.log(name2);
console.log(name3);//this is stack,original wont get affected


//**************************STRINGS******************************************************************
"hello"+"world"
console.log("hitesh"+50)//hitesh50
//String Interpolation
let str="wagisha";
console.log(`my name is ${str}`);
const gamename=new String('diksha')
console.log(gamename)
console.log(gamename[0]);
console.log(gamename[3]);
console.log(gamename.__proto__);
console.log(gamename.length)
console.log(gamename.toUpperCase());
const s=gamename.substring(2,6)//slicing
console.log(s)
//you can also use .slice method to do slicing 
const s1=gamename.substring(-1,4)
console.log(s1)
//we can give negative value in slice method not in substring value
//.trim method to remove the whitespaces


//********************************************NUMBERS AND MATHS **********************************
const balance=new Number(1000)
console.log(balance);
console.log(balance.toString())
//.tofixed method->afte decimal how many values you can give
//Number.MIN_VALUE OR MAX_VALUE
console.log(Math)
//abs,round,ceil,floormin,max,random
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min)

//*************************DATE AND TIME *******************************************************
//temporal is the Api for date
let mydate=new Date()
console.log(mydate) //it will print instant date
console.log(mydate.toDateString()); //date
console.log(mydate.toLocaleString()); //date+time
console.log(typeof mydate); //object
let createdate=new Date(2023,0,23);
console.log(createdate.toDateString()) //month start with 0 but if you write 01 it is also january
let mytimestamp=Date.now();
console.log(mytimestamp); //millisecond value
let newdate=new Date()
console.log(newdate.getMonth()) //11 december
console.log(newdate.toLocaleString('defualt',{
  weekday: "long"
}))






