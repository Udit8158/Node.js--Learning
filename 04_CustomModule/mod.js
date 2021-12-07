//Making a function to export 
let avg = (num1,num2)=>{
    return ((num1+num2)/2) ;
}
//Making another function for export
let arrayLengthFuc = (arr)=>{
    return arr.length;
}
// console.log(arrayLengthFuc([1,23,3,12]));

//Exporting
// module.exports = {avg}  //export one function
module.exports = {avg,arrayLengthFuc}  //export multiple function

//We can also change the name of function in time of exporting like this

// module.exports = {
//     avarage : avg,
//     lengthOfArray : arrayLengthFuc
// }