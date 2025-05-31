// // Ques1
var city = prompt("Enter city name ")

if (city == "Karachi"){
    alert("Welcome to the city of lights")
}else if( city == "Lahore" ){
    alert("Welcome to the city of gardens")
}else if(city == "Islamabad"){
    alert("Welcome to the capital of Pakistan")
}else{
    alert("Invalid")
}

// Ques2
var gender = prompt("Enter your gender ")

if (gender == "male" || gender == "Male"){
    alert("Good morning Sir")
}else if( gender == "female" || gender == "Female"){
    alert("Good morning Mam")
}else{
    alert("Invalid")
}

// Ques3
var colour = prompt("Enter Colour ")

if (colour == "red" || colour == "Red"){
    alert("Must Stop")
}else if( colour == "yellow" || colour == "Yellow"){
    alert("Ready to move")
}else if( colour == "green" || colour == "Green"){
    alert("Ready to move")
}else{
    alert("Invalid")
}

// ques4
var fuel = +prompt("Enter your fuel litre")

if (fuel < 0.25){
document.write("Please refill the fuel in the car")
}else{
    document.write("You have enough fuel in the car")
}

//  ques5\
var a = 4;

if (++a === 5){
alert("given condition for variable a is true")
}

// b
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

// c
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

// // d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// e
if (true){
alert("True");
}
if (false){
alert("False");
}

// f
if("car" < "cat"){
alert("car is smaller than cat");
}

// ques6
var total = 300
var obtained = Number(prompt("Enter obtained number"))
var percentage = (obtained / total) * 100

document.write("Total marks "+ total + "<br>" )
document.write("Marks obatined " + obtained + "<br>" )
document.write("Percentage: " + percentage + "%" + "<br>" )

if(percentage >= 80){
    document.write("Grade A-one " + "<br>" )
    document.write("Remarks : Excellent")
}else if(percentage >= 70){
    document.write("Grade A" + "<br>" )
    document.write("Remarks : Good")
}else if(percentage >= 60){
    document.write("Grade B" + "<br>" )
    document.write("Remarks : You need to improve.")
}else if(percentage < 60){
    document.write("Fail" + "<br>" )
    document.write("Remarks : Sorry")
}else{
    document.write("Invalid number")
}

// ques7
var sec_num = 8;
var guess = Number(prompt("Enter your guess number"));

if (guess === sec_num) {
  document.write("Bingo! Correct Answer");
} else if (guess + 1 === sec_num || guess - 1 === sec_num) {
  document.write("Close enough to the correct answer");
} else {
  document.write("Invalid number");
}

// ques 8
var div_num = Number(prompt("Enter the number"))

if(div_num % 3 === 0){
    document.write("Number is divisible by 3")
}else{
    document.write("Number is not divisible by 3")
}

// // ques 9
var num = Number(prompt("Enter number"))

if(num % 2 === 0){
    document.write("Even number")
}else{
    document.write("Odd number")
}

// ques10
var temp = Number(prompt("Enter Temperature"))

if(temp > 40){
    document.write("Its too hot")
}else if(temp > 30){
    document.write("the weather today is normal")
}else if(temp > 20){
    document.write("Today weather is cool.")
}else if(temp > 10){
    document.write("OMG! Today weather is so cool")
}else{
    document.write("Invalid number")
}

// ques11
var first_num = +prompt("Enter the first number")
var sec_num = +prompt("Enter the second number")
var operation = prompt("Enter operation")

if(operation === "+"){
    document.write("Result: " + (first_num + sec_num))
}else if(operation === "-"){
    document.write("Result: " + (first_num - sec_num))
}else if(operation === "*"){
    document.write("Result: " + (first_num * sec_num))
}else if(operation === "/"){
    document.write("Result: " + (first_num / sec_num))
}else if(operation === "%"){
    document.write("Result: " + (first_num % sec_num))    
}else{
    document.write("Invalid operation")
}    