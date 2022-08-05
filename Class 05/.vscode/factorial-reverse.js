function factorial(number){
    let result = 1;
    for(let i = number; i >= 1; i--){
        result = result * i;
        console.log(i);
    }
    return result;
}

const number = 6;
const fact = factorial(9);
console.log('factorial of 9:',number, fact);