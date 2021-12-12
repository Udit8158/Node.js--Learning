//DEFINING REQUIRED VRIABLES
const express = require('express');
const app = express();
const port = '80';
const hostname = '127.0.0.1';

// EXPRESS STUFF 
app.use('/static',express.static('static'));//Using static folder

//PUG RELATED STUFF
app.set('view engine', 'pug'); //setting pug as view engine


//SETTING ENDPOINTS
app.get('/', function (req, res) {
    res.render('index.pug'); //Menans rendering index.pug file from views folder
  })

//STARTING SERVER   
app.listen(port,()=>{
    console.log(`Server is running on http://${hostname}:${port}`);
})