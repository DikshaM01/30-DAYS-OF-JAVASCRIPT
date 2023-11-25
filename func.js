//pure function is a function that always returns the sam result if same arguments are passed
function calculateGST(productprice)
{
    console.log(productprice*0.05);
}
calculateGST(20);
const Arithmetics = {
    add: (a, b) => {
    return `${a} + ${b} = ${a + b}`;
    },
    subtract: (a, b) => {
    return `${a} - ${b} = ${a - b}`
    },
    multiply: (a, b) => {
    return `${a} * ${b} = ${a * b}`
    },
    division: (a, b) => {
    if (b != 0) return `${a} / ${b} = ${a / b}`;
    return `Cannot Divide by Zero!!!`;
    }
    
    }
    
    console.log(Arithmetics.add(100, 100));
    console.log(Arithmetics.subtract(100, 7));
    console.log(Arithmetics.multiply(5, 5));
    console.log(Arithmetics.division(100, 5));
    
function fx1()
{
    return "Hello";
}
function fx2(fx1)
{
    console.log(fx1(),'geeks');
}    
fx2(fx1);

//map() method
function triple(n){
    return n*3;

}
arr=new Array(1,2,3,6,5,4);
var new_arr=arr.map(triple);
console.log(new_arr);
//reduce()
function product(a,b){
    return a*b;
}
arr=new Array(1,2,3,4,5,6);
var productofarr=arr.reduce(product);
console.log(productofarr);
//it will take 2 variables
//filter()
//It filters the elements of the array that return false for the applied condition and returns the array which contains elements that satisfy the applied condition.
arr=new Array(1,2,3,4,5,);
var new_arr=arr.filter(function(x){
    return x%2==0;
});
console.log(new_arr);

//block scope->let and const
//funciton scope->var,let and const
//local scope
//global scope
//variable shadowing