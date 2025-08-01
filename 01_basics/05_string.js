const name="afzal"
const repoCnt=10

console.log(name + " " + repoCnt)
console.log(`hello my name is ${name} and repo count is ${repoCnt}`)

//creating as object

const gameName=new String("afzal-bashir-musliyar")    //run this in chrome>inspect>console and see its functions

console.log(gameName[0])       //they are not index as of array...they are keys
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(9))
console.log(gameName.indexOf('m'))

const newGamename=gameName.substring(0,5)  //2nd number is excluded
console.log(newGamename);

const anotherGamename=gameName.slice(-12,21)  //similar to substring but can use -ve numbers
console.log(anotherGamename);

const ajeebString="      afzal     "
console.log(ajeebString);
console.log(ajeebString.trim());       //remove extra spaces of both end

const url="https://afzal.com/afzal%20musliyar"
console.log(url.replace('%20','-'));     

console.log(url.includes('20m'));     

//split strings into array...
// syntax: ('charecter/s about which to split',max limit of elements)
console.log(gameName.split('a',10)); 

