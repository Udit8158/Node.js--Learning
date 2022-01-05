// Import mongoose libary
const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/first');

// const db = mongoose.connection;
// db.on('error',console.error.bind(console,'connection error:'));
// db.once('open',()=>{
//     console.log('We are connected guys');
// })

//Connect with mongo db
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/firstDb');
}

//Make a schema 
const kittySchema = new mongoose.Schema({
  name: String,
  age : Number
});

//Make a model from the schema
const Kitten = mongoose.model('Kitten', kittySchema);

// Make an objects from the model 
const user1 = new Kitten({ name: 'Udit', age: 18 });
console.log(user1.name); 

//Save the objects in the data base
user1.save();

//Create another one
const user2 = new Kitten({ name: 'Jecs', age: 17 });
console.log(user2.name); 

user2.save();

