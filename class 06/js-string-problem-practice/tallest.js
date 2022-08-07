function maxInArray(numbers){
    let largest = numbers[0];
  for(let i =0; i < numbers.length; i++){
    const index = i;
    const element = numbers[index];
    if(element > largest){
        largest = element ;
    }
   
  }
  return largest;
}

const heights = [167, 190, 120, 165, 137,255];
const tallest = maxInArray(heights);
console.log('tallest person is', tallest);

// lowest
function lowInArray(numbers){
    let lowest = numbers[0];
  for(let i =0; i > numbers.length; i--){
    const index = i;
    const element = numbers[index];
    if(element < lowest){
        lowest = element ;
    }
   
  }
  return lowest;
}

const width = [102,167, 190, 120, 165, 137,255];
const lowest = lowInArray(width);
console.log('Lowest person is', lowest);

//homework: write a function to get the lowest number in an array