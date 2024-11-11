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
    //4. get url
    //const url = req.url;
    const url = req.url.toLowerCase();
    console.log(url);
    //we can handle different urls to send different responses

    //using res object to send back respond to the client

    //1. send HTML
    if (url === "/") {
        res.writeHead(200,{"Content-Type": "text/html"}); //WriteHead
        res.write('<div style="background-color:red"> <h1>Home</h1></div>'); //WriteBody
        
        //6a. end respond so that each ../xx (url) can access
        res.end();
        return
    }

    if (url === "/about") {
        res.writeHead(200,{"Content-Type": "text/html"}); //WriteHead
        res.write('<div style="background-color:blue"> <h1>About</h1></div>'); //WriteBody
        
        //6b. end respond so that each ../xx (url) can access
        res.end();
        return
    }

    if (url === "/youtube") {
        res.writeHead(301,{Location: "https://www.youtube.com"}); //WriteHead
        
        //6c. end respond so that each ../xx (url) can access
        res.end();
        return
    }

    //7. Read JSON file
    if (url ==="/data") {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write (
            JSON.stringify({name:"Munirah", age:33, location:"Gombak"})
        );
        res.end();
        return
    }

    //5. Handle page not found
    res.writeHead(404,{"Content-Type": "text/html"});
    res.write(
        '<div style="background-color:yellow"><h1> Page not found</h1></div>'
    );

    

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
