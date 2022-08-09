var result = "17";

if (result < 33 && result > 0) {
    console.log("You Are Failed Your Exam")
}
else if(result >= 33 && result < 40){
    console.log("Your Grade D");
}
else if (result >= 40 && result < 50){
    console.log("Your Grade is C");
}
else if (result >= 50 && result < 60){
    console.log("Your Grade is B");
}
else if (result >= 60 && result < 79){
    console.log("Your Grade is A");
}
else if (result >= 80 && result < 100){
    console.log("Your Grade is A+");
}
else{
    console.log("Result Not Found Try Again")
}