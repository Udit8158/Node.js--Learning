//DEFINING REQUIRED VRIABLES
const express = require('express');
const app = express();
const port = 3000;
const hostname = '127.0.0.1';
// Include mongoose 
const mongoose = require('mongoose');
const bodyparser = require("body-parser"); //Include body-parser for collect data from form as an input

//Start mongoose with mongoDb
//1. Setting the schema
const contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
  thoughts: String,
});

//2. Creating a model from the schema
const Contact = mongoose.model('Kitten', contactSchema);

// EXPRESS STUFF 
app.use('/static',express.static('static'));//Using static folder

//PUG RELATED STUFF
app.set('view engine', 'pug'); //setting pug as view engine


//SETTING ENDPOINTS
app.get('/', function (req, res) {
    res.render('home.pug'); //Menans rendering index.pug file from views folder
  })
app.get('/contact', function (req, res) {
    res.render('contact.pug'); //Menans rendering index.pug file from views folder
  })


//STARTING SERVER   
app.listen(port,()=>{
    console.log(`Server is running on http://${hostname}:${port}`);
})