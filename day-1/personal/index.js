// const firstName = 'Fatini'
// const lastName = 'Saharul'

// //template string using backstick
// const greeting = `My name is ${firstName} ${lastName}`

// console.log(greeting)

// const animals =["🐀","🐂","🐅","🐇","🐉", "🐒"];

// for (let i=0; i<animals.length; i++) {
//     const sentence = `The animal at index ${i} is ${animals[i] }`;
//     console.log (sentence);
// }

//best practice to require modules at the top of files
//calling another file js

//export Hello World!
//const string = require("./time.js")
//console.log(string);

const m = require("./math.js")
const t = require("./time.js")

//to display time
console.log("TIME MODULE")
console.log(t.time);
console.log(t.hours);
console.log(t.minutes);
console.log(t.day);


const a = m.add(15,23);
const b = m.subtract(5,3);
const c = m.multiply(11,3);
const d = m.add(1,3);
const e = m.subtract(15,10);
const f = m.multiply(9,9);

console.log("MATH MODULE")
console.log (a);
console.log (b);
console.log (c);
console.log (d);
console.log (e);
console.log (f);