//Using express to make custom backend

const express = require("express");
const app = express(); //call express as app
const fs = require("fs");

const port = "80";

const home = fs.readFileSync("index.html", "utf-8");
const about = fs.readFileSync("about.html", "utf-8");
const contact = fs.readFileSync("contact.html", "utf-8");
//manually set the location and the content(we can also use raw html here like http request)

//sending get request
app.get("/", (req, res) => {
  res.send(home);
});
app.get("/about", (req, res) => {
  res.send(about);
});
app.get("/contact", (req, res) => {
  res.send(contact);
});

//post request 
app.post("/post",(req,res)=>{
    res.send("This is post reqest")
})

//we also manually set stauscode for a particular page
app.get("/udit",(req,res)=>{
    res.status(403).send("This has status code 403");
})

app.listen(port, () => {
  console.log(`Your server is startiing on port ${port}`);
});
