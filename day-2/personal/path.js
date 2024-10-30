const path = require("path")
const fs = require ("fs")

//1. Join Path --> Display the path format
const textPath = path.join('fs-files','455','readWrite-455.txt')
console.log(textPath)

//1a. Full directory
const textPath2 = path.join(__dirname,'fs-files','455','readWrite-455.txt')
console.log(textPath2)

//2. Display extension file
const extFile = path.extname(textPath);
console.log(extFile);

//3. To check the file extension
//Can be used to filter if the file extension is the correct extension
if (extFile === ".txt") {
    console.log("This is text file")
} else {
    console.log ("This is not text file")
}

if (extFile === ".jpeg") {
    console.log("This is jpeg file")
} else {
    console.log ("This is not jpeg file")
}

//4. Current path for directory & file
console.log(__dirname); //parent directory
console.log(__filename);

//5. Call the file path and read its data 
fs.readFile (textPath2, "utf-8", (err,data) => {
    if (err) {
        console.log (err);
    }
    console.log(data);
})