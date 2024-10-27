//The node:fs module enables interacting with the file system in a way modeled on standard POSIX functions.

//console.log("Hello Munirah")

//Normal Callback 
/* function add(a,b) {
    return a + b;
}

const a = add(1,2);
console.log (a); */

function add(a,b) {
    const result = a + b;
    //console.log(a,b);
    console.log (result);
    return result;
}

//Callback pattern
//1. Have function in another function
function mathCallBack (a,b, callback) {
    callback (a, b)
}

//1a. callback other function
mathCallBack (2, 4, add);

//1b. do function in the callback
mathCallBack (3,5, function(a,b) {
    console.log (a*b);
});

//2. Callback without variable a,b
function mateCallBack (callback) {
    callback(); //being call here
}

//2a. directly put number
mateCallBack (function() {
    console.log (10 + 25);
})