/*


let a = 10; // we can reassign let variable
// let a=0;  //we can not redeclare let variable
const b=20;
console.log(a);
b=30; // we can not reassign const variable
// var b = 20;

*/
////////////////////////
/* Closures */
////////
// function x(){
//     var a=10;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();

/////////////////////////////
// function x(){
//     var a=10;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z=x();
// console.log(z);



//////////////////
// function x(){
//     var a=10;
//     return function y(){
//         console.log(a);
//     }
    
// }
// var z=x();
// console.log(z);
// z();


function x(){
    var a=10;
    function y(){
        console.log(a);
    }
    a=100;
    return y;
    
}
var z=x();
console.log(z);
z();