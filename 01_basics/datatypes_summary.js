//                                      I) Primitive(call by value type)

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

//symbol is used for unique things,so its giving false for equality of below two even if both/any one are symbol
const id = Symbol('123')       
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n



//                                      II) Reference (Non primitive)

// Array, Objects, Functions

const heros = ["car", "bike", "plane"];

let myObj = {
    name: "afzal",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof userEmail);
//bigNumber = bigint
//heros = object
//myFunction = function
//score = number
//scoreValue = number
//userEmail = undefined

// https://262.ecma-international.org/5.1/#sec-11.4.3