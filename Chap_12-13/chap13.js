// Ques1

var num = prompt("Enter the character")
var final = num.charCodeAt()

if(final >= 65 && final <= 90){
    document.write("It's a uppercase letter ")
}else if(final >= 97 && final <= 122 ){
    document.write("it's lower case")
}else{
    alert("Please enter proper value")
}


// ques2
var num_1 = Number(prompt("Enter number"))
var num_2 = Number(prompt("Enter number"))

if(num_1 > num_2 ){
    document.write("The larger value is " + num_1 )
}else if (num_2 > num_1){
    document.write("The larger value is " + num_2)
}else if(num_2 === num_1){
    document.write("Number is equal")
}else{
    alert("Please enter proper value")
}

// ques3
var num = Number(prompt("Enter the number"))

if(num > 0){
    document.write("Number is positive.")
}else if(num < 0){
    document.write("Number is negative")
}else{
    document.write("Number is zero")
}

// ques4
var vowel = prompt("Enter a vowel")

if(vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u" ){
    document.write("True")
}else if(vowel.length !== 1){
    document.write("False")
}


// ques5
var savPass = "Hamza"
var pass = prompt("Enter a correct password")

if(pass == savPass){
    document.write("Correct! The password you entered matches original password")
}else if(pass == ""){
    document.write("Please enter your password")
}else{
    document.write("Incorrect password")
}


// ques6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";

}else{
greeting = "Good evening";
}

console.log(greeting);


// ques7
var time = Number(prompt("Enter current timing"))

var hour = Math.floor(time / 100)
var minute = (time % 100)

if(hour < 0 || hour > 23 || minute < 0 || minute > 0){
    document.write("Invalid time")
}else if(hour >= 5 && hour<= 12 ){
    document.write("Good morning")
}else if(hour >= 12 && hour <=17 ){
    document.write("Good afternoon")
}else if(hour >= 17 && hour >= 21){
    document.write("good evening")
}else{
    document.write("Good night")
}