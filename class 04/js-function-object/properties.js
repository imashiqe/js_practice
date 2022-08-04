var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse:1,
    pen: 25
}
// when you know the propert name, use dot notation to get the property value
//alternative system
// when you know the specific property name, use dot notation to get property value
// var propertyValue =[propertyName]
var penCount = shoppingCart.pen;
var penCount2 = shoppingCart['pen'];
var properties = Object.keys(shoppingCart);
var propertiesValues = Object.values(shoppingCart);
console.log(properties);

//Set Property Values
shoppingCart.mouse =15;
shoppingCart['mouse'] = 29;
console.log(shoppingCart);

