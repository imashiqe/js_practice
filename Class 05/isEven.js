// console.log(7/2);
// console.log(83/2);
// console.log(87/2);
// console.log(5431/2);

// console.log(4%2);
// console.log(77%2);
// console.log(144%2);
// console.log(1286%2);

// function isEven(number){
//     const remainder = number % 2;
//     // console.log(remainder);
//    if (remainder === 0) {
//          console.log('number is even')
//    }
//    else{
//     console.log('number is odd');
//    }

// }
function isEven(number){
    const remainder = number % 2;
    // console.log(remainder);
   if (remainder === 0) {
         return true;
   }
   else{
   return false;
   }

}

const myNumberIsEven = isEven(301);
console.log(myNumberIsEven);
// const herNumberIsEven = isEven(33);