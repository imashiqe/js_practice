function factorial(number) {
    let result = 0;
    for(let i = 1; i <= number; i++){
        result = result * i;
    }
    return result;
}

const result = factorial(9);
console.log(result);