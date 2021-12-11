const express = require('express');
const app = express();
const port = '80';
const hostname = '127.0.0.1';
const fs = require('fs');

// EXPRESS STUFF 
app.use('/static',express.static('static'));//Using static folder
app.use(express.urlencoded());  //to collect the form data

//PUG RELATED STUFF
app.set('view engine', 'pug'); //setting pug as view engine

//MAKING ENDPOINTS
app.get('/',(req,res) => {
    //This two line is just for demo to use variable in pug files
    const con = "This is the best content.";
    const params = {'title': 'Pug Template', "content": con};
    //Actually rendering the pug file
    res.status(200).render('index.pug', params);
});

// creating the post request to collect form data 
app.post('/',(req,res)=>{
    console.log(req.body);
    let name = req.body.name;
    let age = req.body.age;
    let addrdss = req.body.addrdss;
    let about = req.body.about;
    let data = `
    Name : ${name}
    Age : ${age}
    Address : ${addrdss}
    About : ${about}
    `
    fs.writeFileSync('data',data);
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('index.pug',params);
})

//CREATING THE SERVER
app.listen(port,()=>{
    console.log(`Server is running on http://${hostname}:${port}`);
})