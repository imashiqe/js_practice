// function functionname(parameters) {
//     //function body
//     //return
// }

function getAverage(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3 ;
    return average;
}

const assignmentMarks = 60;
const assignment2Marks = 58;
const assignment3Marks = 59;

var myAverage = getAverage(assignmentMarks, assignment2Marks , assignment3Marks);
console.log('my average so far:' , myAverage);
