//console.log("crypto.js")

//const crypto = require ("crypto");
const crypto = require ("node:crypto");
//console.log(crypto);

//Random Integer
const randomInt = crypto.randomInt(10);
console.log(randomInt);

//Random Bytes
const randomString = crypto.randomBytes(10);
console.log(randomString); // in binary
console.log(randomString.toString("hex")); //in hexadecimal(a-z,A-Z,0-9)

//Name with Random Number
const nameWithID = "munirah";
console.log(nameWithID + '-' + randomInt)

//uuid - Universally Unique Identifier
const uuid = crypto.randomUUID();
console.log(uuid);

//Explore encryption and decryption using crypto module

//const secretText = 'The enemy will attack tonight';
//const secretCode = 'e6509884eb1d9c9fdd50'

//encrypt and decrypt the secretText using secretCode