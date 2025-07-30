//                           normal

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//                           does convertions,thus unpredictable   
// console.log("2" > 2);
// console.log("02" > 1);

//                           avoid these( eq check (==) works differently from comparisons(<,>,<=,>=).
//                           comparisons do conversions,eg:-null is treated as zero)

// console.log(null > 0);
// console.log(null < 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// === (strict equality,it checks along with datatype)

// console.log("2" === 2);