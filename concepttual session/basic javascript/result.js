var result = "101";

if (result < 33 && result > 0) {
    console.log( "Your Mark :", result," You Are Failed Your Exam")
}
else if(result >= 33 && result < 40){
    console.log( "Your Mark :", result," Your Grade :  D");
}
else if (result >= 40 && result < 50){
    console.log( "Your Mark :", result," Your Grade is:  C");
}
else if (result >= 50 && result < 60){
    console.log( "Your Mark :", result," Your Grade is : B");
}
else if (result >= 60 && result < 79){
    console.log( "Your Mark :", result," Your Grade is : A");
}
else if (result >= 80 && result < 99){
    console.log( "Your Mark :", result," Your Grade is:  A+");
}
else if (result >= 99 && result < 100){
    console.log( "Your Mark :", result," Your Grade is: Golden A+");
}
else{
    console.log("Result Not Found Try Again")
}