// chapter9-11
// Q1
// var city = prompt("Enter your city")

// if(city ==="karachi"){
// alert("Welcome to the city of lights");

// } else{
// alert("welcome user from " + city);
// }

// Q2

// var gender = prompt("Enter your gender")

// if( gender=== "male"){
//     alert("Good Morning Sir");
// } else if (gender === "female"){if( gender=== "female")
//     alert("Good Morning Ma'am");}

//  else{
//     alert("Welcome!");  
// }

// Q3
// var color = prompt("Enter a color of traffic signal")

// if(color === "red"){
// alert("Must Stop")
// } else if(color === "blue"){
// alert("Ready to move");
// } else if(color === "green"){
// alert("Move Now");
// } else{
// alert("this is not a traffic color");
// }




// Q4
// var fuel = prompt("Enter the fuel in your car (in liters)")

// if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
// } else {
//     alert("You have enough fuel");
// }

// Q5
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }
// if (true){
//     alert("True");
// }
// if (false){
//     alert("False");
// } 
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }





// Q6
// var marks1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
// var marks2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
// var marks3 = parseFloat(prompt("Enter marks obtained in subject 3:"));

// var totalMarks = 300;
// var obtainedMarks = marks1 + marks2 + marks3;
// var percentage = (obtainedMarks / totalMarks) * 100;

// var grade, remarks;

// if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
// } else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// } else {
//     grade = "Fail";
//     remarks = "Sorry";
// }

// alert("Marks Sheet\n" +
//       "Total marks: " + totalMarks + "\n" +
//       "Marks obtained: " + obtainedMarks + "\n" +
//       "Percentage: " + percentage.toFixed(2) + "%\n" +
//       "Grade: " + grade + "\n" +
//       "Remarks: " + remarks);

// var marks1= +prompt("Enter your obtained marks in subject 1")
// var marks2= +prompt("Enter your obtained marks in subject 2")
// var marks3= +prompt("Enter your obtained marks in subject 3")
// var grade,remarks
// var totalmarks=300;
// var marksobtained= marks1 + marks2 + marks3
// var percentage= marksobtained/totalmarks*100

// if(percentage >= 80){
//     grade = "A-one";
//     remarks = "Excellent";
// } else if(percentage >= 70){
//     grade = "A";
//     remarks = "Good";
// }  else if (percentage >= 60) {
//         grade = "B";
//         remarks = "You need to improve";
//     }  else {
//             grade = "Fail";
//             remarks = "Sorry";
//         }
//         alert("Marks Sheet\n" +
//                   "Total marks: " + totalmarks + "\n" +
//                   "Marks obtained: " + marksobtained + "\n" +
//                   "Percentage: " + percentage.toFixed(2) + "%\n" +
//                   "Grade: " + grade + "\n" +
//                   "Remarks: " + remarks);


// Q7
// var secretnumber=4;
// var userguess = prompt("Guess the number between (1 and 10)")
// if(secretnumber===userguess){
//     alert("Bingo! Correct answer.");
// }  else if (userguess + 1 === secretnumber) {
//     alert("Close enough to the correct answer.");
// } else {
//     alert("Sorry, try again! The secret number was " +secretnumber);
// }

// Q8
// var number = +(prompt("Enter a number:"));

// // Check if the number is divisible by 3
// if (number % 3 === 0) {
//     alert("The number " + number + " is divisible by 3.");
// } else {
//     alert("The number " + number + " is not divisible by 3.");
// }
// Q9
// var number = +(prompt("Enter a number:"));
// // Check if the number is even or odd
// if (number % 2 === 0) {
//     alert("The number " + number + " is even.");
// } else {
//     alert("The number " + number + " is odd.");
// }
// Q10
// var temperature= +prompt("Enter the temperature at your place")

// if(temperature >=40 ){
//     alert("It is too hot outside.")
// } else if(temperature >=30 ){
//     alert("The today weather is normal.")
// }  else if(temperature >=20 ){
//     alert("Today's weather is cold.")
// } else if(temperature >=10 ){
//     alert("OMG! Today's weather is so cold.")
// }
// else{
//      alert("Error" + " this is not a valid temperature" +temperature)
// }


// Q11
// var num1 = prompt("Enter the first number")
// var num2 = prompt("Enter the Second number")
// var opearation = prompt("Enter the opearation you want")
// var result;
// if(opearation === "+"){
//     alert(result = num1 + num2)
// } else if(opearation === "-"){
//     alert(result = num1 - num2)
// }  else if(opearation === "*"){
//     alert(result = num1 * num2)
// }  else if(opearation === "/"){
//     alert(result = num1 / num2)
// }  else if(opearation === "%"){
//     alert(result= num1 % num2)
// } else {
//         result = "Invalid operation";


// } alert("The result is"+ result