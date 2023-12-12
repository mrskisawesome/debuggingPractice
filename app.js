let number = 1;
console.log(number); //output 1
let mints = 10;
let chocolates = 5;
let sweets = mints + chocolates;
console.log(sweets); //output 15 becase it adds the nums together
let fname = "Bob";
let lname = "Smith";
let fullname = `${fname} ${lname}`; //make sure you use back ticks above tab
console.log(fullname);
fname = "Imhotep";
console.log(`${fname} is ${fname.length} characters long`);
//booleans
let isTrue = true;
console.log(isTrue); // Output: true
debugger;
let isFalse = false;
console.log(isFalse); // Output: false
function checkIfOdd(myArray) {
  for (let i = 0; i < myArray.length; i++)
    if (myArray[i] % 2 == 0) {
      console.log(`${myArray[i]} is an even number`);
    } else {
      console.log(`${myArray[i]} is an odd number`);
    }
}
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
checkIfOdd(myArray);
