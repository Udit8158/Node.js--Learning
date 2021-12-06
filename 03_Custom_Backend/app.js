const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = "3000";

const server = http.createServer((req,res)=>{
    const home = fs.readFileSync("index.html","utf-8");
    const about = fs.readFileSync("about.html","utf-8");
    const contact = fs.readFileSync("contact.html","utf-8");
    res.setHeader('Content-Type', 'text/html');

    if(req.url == "/"){
        res.statusCode = 200;
        res.end(home);
    }
    if(req.url == "/about"){
        res.statusCode = 200;
        res.end(about);
    }
    if(req.url == "/contact"){
        res.statusCode = 200;
        res.end(contact);
    }
});

server.listen(port,hostname,() =>{
    console.log(`Server is running on http://${hostname}:${port}`);
})
