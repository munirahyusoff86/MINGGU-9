//console.log('Hello,Node 2!');

//1. Initialize http
const http = require("http");

//2. Initialize server
//http status codes
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
//1xx - informational
//2xx - success (to load the content)
//3xx - redirection
//4xx - client error
//5xx - server error
const server = http.createServer(function(req,res) {
    //using res object to send back respond to the client

    //1. send HTML
    res.writeHead(200,{"Content-Type": "text/html"}); //WriteHead
    res.write("<h4>Hello World</h4>"); //WriteBody
    res.write('<div style="background-color:red"> <h1>Hello World</h1></div>'); //WriteBody
   
   //2. send JSON
    // res.writeHead(200,{"Content-Type": "application/json"}); //WriteHead
    // res.write(JSON.stringify({name:"John", age:30})); //WriteBody
   
    //3. make redirection
    //res.writeHead(301, {Location:"http://www.google.com"});

    //end response if you not going to send anything else
    res.end(); 
});

//3. Listen port
//server.listen(2323);
server.listen(1557);
