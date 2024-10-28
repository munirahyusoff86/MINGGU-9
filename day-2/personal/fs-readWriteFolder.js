const fs = require ("fs");
const crypto = require ("crypto");
//console.log(fs)

const randomInt = crypto.randomInt(0,1000);

//Create New Folder/Directory
fs.mkdir(`./fs-files/${randomInt}`,{recursive:true}, (err) => {
  if (err) {
    console.log("directory not created");
  }else {
    console.log("directory created");
  }
});

//fs.writeFile(`./fs-files/readWrite.txt`, 'This is Read & Write', 'utf8', function(err){ 
fs.writeFile(`./fs-files/${randomInt}/readWrite-${randomInt}.txt`, `This is Read & Write with random number ${randomInt}`, 'utf8', function(err){ 
    if (err){
        console.log('file not written')
    } else {
        console.log('file written')
    }
}); 

/* Read File */
//fs.readFile("./fs-files/readWrite.txt", "utf-8", function(err,data){
fs.readFile(`./fs-files/${randomInt}/readWrite-${randomInt}.txt`, "utf-8", function(err,data){  
if (err) {
    console.log("file not read");
  }  else {
    console.log("THIS IS THE DATA FROM THE FILE");
    console.log(data);
  }
});


