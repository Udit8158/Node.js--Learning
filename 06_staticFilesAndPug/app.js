const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = '80';


//Serving static files in static folder
app.use('/staticfiles',express.static('static')); //Here first static is the location on our website and second is the folder name.

//Setting pug as view engine or template engine
app.set('view engine', 'pug')  //Always refer docs and google

//Rendering the .pug file
app.get('/demoPug', function (req, res) {
    res.status(200).render('demoPug', { title: 'Udit', message: 'Hello there!' })
  })

//Showing root location
app.get('/',(req,res)=>{
    res.status(200).send("This is first page")
})

app.listen(80,()=>{
    console.log(`server is starting on http://${hostname}:${port}`);
})
