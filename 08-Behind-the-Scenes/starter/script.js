// 'use strict';

// ///////////////////////////////////////
// // Scoping in Practice


// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Steven';

//       // Reasssigning outer scope's variable
//       output = 'NEW OUTPUT!';

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);
// // console.log(age);
// // printAge();


// ///////////////////////////////////////
// // Hoisting and TDZ in Practice

// // Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// // Functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// console.log(addArrow);
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // Example
// console.log(undefined);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);


// /////////////////this key word//////////////
// // console.log(this);//return window object

// const age = function(birhtyr){
//   console.log(2024-birhtyr);//will give some output
//   // console.log(this);//will return undefined
// }
// age(1998);

// const agearrow = birhtyr =>{
//   console.log(2024-birhtyr);//will give some output
//   // console.log(this);//will return window object
// }
// agearrow(1998);

// const jonass= {
//   year:1990,
//   calcAge: function(){
//       console.log(this);
//     console.log(2023-this.year);
//   }
// }
// jonass.calcAge();

// const matilda = {
//   year:1996,
// };
// matilda.calcAge = jonass.calcAge;
// matilda.calcAge();
// const f =jonass.calcAge;

// var sfirstName= "Raveena";
// const Raveena ={
//   year:1998,
//   firstName: 'Raveena',
//   calcage: function(){
//     console.log(this);
//     console.log(this.firstName);

//     // const print = function(){
//     //   console.log(this);//regular function defined inside method still give undefined
//     // }
//     // print();  
//       const print = () =>{
//       console.log(this.year);//arrow function defined will check for parent scope
//     }
//     print();  
//   },
   
//   greet:()=>{
//     console.log(this);
//     console.log(`Hey ${this.sfirstName}`)//arrow function will check for parent scope this hence undefined
//   },
//    printer : function(){
//     console.log(this);//regular function defined inside object will give output
//   }
    
// };
// Raveena.calcage();
// Raveena.greet();
// Raveena.printer();

// ////////////////////////////////////////////////////////////
// //Primitive objects (primitive vs reference type)
// let myage = 30;
// let oldAge = myage;
// myage= 32;
// console.log(myage);//32 value change after declaration
// console.log(oldAge);//30 value is assign before update
// ///primitive value is stored in call stack 

// const mee={
// name:"joja",
// age:23
// };
// const friend = mee;
// friend.age=27;

// console.log('Friend', friend);
// console.log('me:', mee);
// ///reference datatypes stored value in heap


//primitive
let lastName="patil";
let oldlastName = lastName;
lastName = "patill";
console.log(lastName,oldlastName);

//reference
const Mona={
first:"mona",
last:'patil',
age:24,
};
const marriedmona = Mona;//copying original object into new variable
marriedmona.last='david';
console.log('before:', Mona.last);
console.log('after:', marriedmona.last);//value change in og object


//copying objects
const Mona2={
  first:"mona",
  last:'patil',
  age:24,
  family:['prem'],
  };
const monacopy = Object.assign({},Mona2);
monacopy.last='ffff';
monacopy.family.push('mary');
console.log('before:', Mona2);//array values are added to og object
console.log('before:', Mona2.last);
console.log('after:', monacopy.last);//value change in og object
