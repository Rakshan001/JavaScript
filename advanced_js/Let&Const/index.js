// var is used in old js
/*
function abcde(){
    for(var i=0; i<5; i++){
        console.log(i);
    }
    console.log(i);
}

abcde();

console.log("*****************");
// let and const are used new version js es6
function abcd(){
    for(let i=0; i<5; i++){
        console.log(i);
    }
    console.log(i);
}

abcd();

console.log("*****************");

function abc(){
    for(const i=0; i<5; i++){
        console.log(i);
    }
    console.log(i);
}

abc();

console.log("*****************");

*/

// let and const are block scope
// var is function scope
// var can be redefined
// let and const cannot be redefined
// let can be reassigned
// const cannot be reassigned

// let is used when the value of the variable is going to change
// const is used when the value of the variable is not going to change

// copying reference of array
var arr = [1,2,3,4,5];
var arr1 = arr;
arr1.push(6);// arr also changed
arr.push(6);
console.log(arr);
console.log(arr1);

// copying reference of array using spread operator
var arr = [1,2,3,4,5];
var arr1 = [...arr];  // spread operator   
arr1.push(6);// arr also changed
arr.push(7);    
console.log(arr);
console.log(arr1);
