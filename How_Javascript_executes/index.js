// Hoisting: JavaScript hoists the variable and function declaration to the top of the scope.
/*
console.log(x);

var x=7;

function getName(){
    console.log("Hello World");
}

getName(); 
console.log(x);
console.log(getName);

*/

// Fucntions in javascripts

// Function Declaration
//  this is all about function and how it executes use source in chrome and click and refresh and do debug it will explain you how it executes   global execution context and  local context [execution context]

/*
var x = 7;
a();
b();
console.log(x);
function a(){
    var x=100;
    console.log(x);
}

function b(){
    var x=10;
    console.log(x);
}
*/


/*  
var a=10;
function a(){
    var x=100;
    console.log(x);
}
console.log(window.a);
console.log(a);
// console.log(this.x);

console.log(this.a);
*/


