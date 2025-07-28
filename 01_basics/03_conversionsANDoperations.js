// *********************** Conversions ***********************

let score = "afzal"

//console.log(typeof score);
//console.log(typeof(score));  //just one more syntax

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = -5

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "afzal" => true

let someNumber = undefined

let stringNumber = String(someNumber)
//console.log(typeof stringNumber);
//console.log(stringNumber);


// *********************** Operations ***********************

let value = 3
let negValue = -value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);        //power
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " afzal"

let str3 = str1 + str2
//console.log(str3);

/*  confusions in string and num*/
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( 3 + 4 * 5 % 3);     //not prefered

console.log(-true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2        //kaiko,readability badhaoooo!!!
//console.log(num1);

let gameCounter = 100
console.log(++gameCounter);
console.log(gameCounter++);


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion