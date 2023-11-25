//shallow copy 
let arr=[1,2,3];
let arr2=arr;
arr2.push(4);
console.log(arr2);
console.log(arr); //even original array will get affected
let num=[1,2,3];
let num2=[...num];
console.log(num);
console.log(num2);
num2.push(4);
console.log(num);
console.log(num2); //this will not affect original
//push will add the elements at last of the array
console.log(num2.pop());
var new_arr=num2.slice(1,3);
console.log(new_arr);
//aray.includes() method is used to know whether a particular element is present in the array or not
let a=num2.includes(2);
console.log(a);
var arr3=["hello","hu","howareyou"];
console.log(arr3.sort());
var str='Geeks for Geeks';
var array=str.split("for");
console.log(array);
var str1='It is a raining day';
var array1=str1.split(" ",2);
console.log(array1);
var b=[1,2,3,4,5,6];
console.log(b.join('|'));
arr=arr.concat(arr2);
console.log(arr);
arr=[...arr,...arr2];
console.log(arr);
console.log(Math.min(1,2,3,-1));
const user1={
    name:'Jen',
    age:'22'
};
const cloneduser={...user1};
console.log(cloneduser);
var x,y;
[x,y]=[10,20];
console.log(x);
console.log(y);
[x1,y1,...restof]=[10,20,30,40,50];
console.log(x1);
console.log(y1);
console.log(restof);
