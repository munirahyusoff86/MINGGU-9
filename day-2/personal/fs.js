const fs = require ("fs");
//console.log(fs)

//fs.writeFile('message.txt', 'Hello Node.js', 'utf8', function(err){ //create message.txt in personal folder
fs.writeFile('./fs-files/message.txt', 'Hello Node.js', 'utf8', function(err){ //create message.txt in personal/fs-files
    if (err){
        console.log('file not written')
    } else {
        console.log('file written')
    }

}); 

/* create multiple message.txt */
//for (let i=0; i<10; i++) { 
//     fs.writeFile(`./fs-files/message${i}.txt`, `Hello Node.js ${i}`, "utf8", function(err){ 
//         if (err){
//             console.log("file not written");
//         } else {
//             console.log("file written");
//         }
        
//     }); 
//}

/* Read File */
fs.readFile("./fs-files/message.txt", "utf-8", function(err,data){
  if (err) {
    console.log("file not read");
  }  else {
    console.log("THIS IS THE DATA FROM THE FILE");
    console.log(data);
  }
});