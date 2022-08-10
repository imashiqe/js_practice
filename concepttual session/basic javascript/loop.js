// for (var i=0; i<= 100; i+=2){
//     console.log(i);
// }

var friends = ["Amin" , "alamin" , "Habib" , "Mirag" , "Milongrtgget"];

var temp = friends[0];

for(var i = 0; i < friends.length; i++){
    var element = friends[i];

    if (element.length > temp.length ) {
        temp = element;
    }
}

console.log(temp);