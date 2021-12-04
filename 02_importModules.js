// FileSystem(fs) module.
const fs = require("fs");

//Reading a file in an asynchronous way
fs.readFile("02_example.txt","Utf-8",(err,data)=>{
    if (err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})
console.log('This is after complete reading file after asynchronous way');

//Reading a file in an asynchronous way
let fileTxtInSynchronous = fs.readFileSync("02_example.txt","utf-8");
console.log(fileTxtInSynchronous);
console.log('This is after complete reading file in synchronous way');

//OS module

const os = require("os");
console.log(os.hostname());

