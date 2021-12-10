// FileSystem(fs) module.
const fs = require("fs");

//Reading a file in an asynchronous way
fs.readFile("02_example.txt","Utf-8",(err,data)=>{
    if (err){
        // console.log(err);
    }
    else{
        // console.log(data);
    }
})
// console.log('This is after complete reading file after asynchronous way');

//Reading a file in an asynchronous way
let fileTxtInSynchronous = fs.readFileSync("02_example.txt","utf-8");
// console.log(fileTxtInSynchronous);
// console.log('This is after complete reading file in synchronous way');

//OS module

const os = require("os");
// console.log(os.hostname());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.homedir());
// console.log(os.loadavg())
// console.log(os.networkInterfaces())


//http module(creating a http server)
// let's play with http 
const http = require("http");  //import http
const port = process.env.PORT || 3000; //define a port here the enviornment port or any givven(like 3000 or 8000)
const hostname = '127.0.0.1';
const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html");
    console.log(req.url);
    // res.statusCode == 200;
    if (req.url == "/"){
        res.statusCode = 200;
        data = fs.readFileSync("02_index.html","utf-8");  //this is a synchronus call to read file
        res.end(data);
    }
    else if (req.url == "/about"){
        res.statusCode = 200;
        res.end(`<h2>This is an about page</h2>`);
    }
    else{
        res.statusCode = 404;
        res.end('<h1> Not Found</h1> <p> Hey this page was not found on this server</p>');
    }
});
server.listen(port,hostname,()=>{
    // console.log(`server is running on http://${hostname}:${port}`);
})

//Path module
const path = require('path');

let newPath = path.join('home','udit','docs');
console.log(newPath); //It create a path ( eg - home\udit\docs)

