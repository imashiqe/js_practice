const numbers = [45,65,23,98,19];

for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    // console.log(number);
}

for(const number of numbers){
    // console.log(number)
}

const products = [
    {id: 1, name: 'walton  laptop' , price: 19000},
    {id: 2, name: 'xiomi  phone' , price: 190000},
    {id: 3, name: 'nokia  phone' , price: 55000},
    {id: 4, name: 'samsung laptop  ' , price: 33000},
    {id: 5, name: 'iphone  phone' , price: 66000},
    {id: 6, name: 'soony laptop ' , price: 85000},
    {id: 7, name: 'oppo  phone' , price: 95000},
    {id: 8, name: 'poco  phone' , price: 70000},
];

// for(const product of products){
//     console.log(product);
// }

function matchedProducts (products, search){
    const matched = [];
    for(const product of products){
        // console.log(product.name.includes(search))
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'laptop');
console.log(result);
