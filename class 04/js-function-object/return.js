function add(number1, number2){
   console.log(number1,number2);
   var sum = number1 + number2;
//    console.log(sum);
return sum;

}

var total = add(80, 20);
console.log('total' , total);

function bringSingara(money) {
    var SingaraPrice =10;
    var quantity = money / SingaraPrice;
    return quantity;
}

var myTaka =150
var singaras = bringSingara(myTaka);
console.log('Eting singaras:' , singaras);