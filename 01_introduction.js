//Start a live server by node
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Type', 'text/html');  //to execute html file.
  res.end('Hello World This is my first backend server.'); //Adding simple line
  console.log(req)
//  res.write(req)
//Adding html
//   res.end(`<!DOCTYPE html>
//   <html lang="en">
//   <head>
//       <meta charset="UTF-8">
//       <meta http-equiv="X-UA-Compatible" content="IE=edge">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Practice3</title>
//       <style>
//           body{
//               background-color: green;
//           }
//           @media screen and (max-width: 1000px){
//               body{
//                   background-color: red;
//               }
              
//           }
//           @media screen and (max-width: 500px){
//               body{
//                   background-color: yellow;
//               }
              
//           }
//       </style>
//   </head>
//   <body>
//       <h1>This is my first ever made backend server.Bhot maja aya.Thanks Harry Bhai.Love You.<h1/>
//   </body>
//   </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
console.log(hostname)

//When js is run in terminal through node is called REPL.