// 75.25, 65, 80 , 35 , 45 , 99 , 50
// mathmatics , biology , chemistry , physics , and Bangla
var mathMark = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglaMarks = 99.50;

var totalMarks = mathMark + biologyMarks + chemistryMarks + physicsMarks + banglaMarks ;
console.log(totalMarks);

var average = totalMarks / 5 ;
var averageTwoDecimal = average.toFixed(2);
console.log(averageTwoDecimal);