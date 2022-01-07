//DEFINING REQUIRED VRIABLES
const express = require("express");
const app = express();
const port = 3000;
const hostname = "127.0.0.1";
const bodyParser = require("body-parser"); //Include body-parser for collect data from form as an input

//Use bodyParser
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
//Start mongoose with mongoDb

//connect the mongo db
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/danceWebsiteForm");
}
//Setting the schema
const contactFormSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
  thoughts: String,
});

//Making a model from the schema
const form = mongoose.model("contactForm", contactFormSchema);

// EXPRESS STUFF
app.use("/static", express.static("static")); //Using static folder

//PUG RELATED STUFF
app.set("view engine", "pug"); //setting pug as view engine

//SETTING ENDPOINTS
app.get("/", function (req, res) {
  res.render("home.pug"); //Menans rendering index.pug file from views folder
});
app.get("/contact", function (req, res) {
  res.render("contact.pug"); //Menans rendering index.pug file from views folder
});
app.post("/contact", (req, res) => {
  var myData = new form(req.body);
  myData
    .save()
    .then(() => {
      res.send("This form has submitted successfully.");
    })
    .catch(() => {
      res.status(400).send("This form has not submitted. ");
    });
});

//STARTING SERVER
app.listen(port, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});
