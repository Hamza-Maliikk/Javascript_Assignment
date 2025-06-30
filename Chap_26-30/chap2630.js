// Ques1
var input = Number(prompt("Enter number"))

console.log("Number "+ input)

var round = Math.round(input)
console.log("Rounded number "+ round)

var floor = Math.floor(input)
console.log("Floor number "+ floor)

var ceil = Math.ceil(input)
console.log("Ceil number "+ ceil)


// Ques2
var input = Number(prompt("Enter number"))

console.log("Number "+ input)

var round = Math.round(input)
console.log("Rounded number "+ round)

var floor = Math.floor(input)
console.log("Floor number "+ floor)

var ceil = Math.ceil(input)
console.log("Ceil number "+ ceil)

// Ques3
var input = Number(prompt("Enter the value"))

var final  = Math.abs(input)
console.log("Absolute value of number is "+ final)

// Ques4
var input = Math.floor(Math.random() * 6) + 1
console.log(input)

// Ques5
var randomValue = Math.floor(Math.random() * 2) + 1

if(randomValue === 1){
    alert("Tails")
}else if(randomValue === 2){
    alert("Heads")
}else{
    alert("Invalid")
}

// Ques6

var num = Math.floor(Math.random() * 100 ) + 1
console.log("Random numbers between 1 to 100 is "+ num)

// Ques7
var user_input = prompt("Enter you weight")
console.log(user_input)
console.log(typeof(user_input))

var weight = parseFloat(user_input)
console.log(weight)
console.log(typeof(weight))

document.write("The weight of the user is "+ weight + " kilograms.")

// Ques8
var num = Math.floor(Math.random()* 10)  + 1
console.log(num)

var user = Number(prompt("Enter secret number between 1 to 10"))
if(user === num){
    alert("congratulate")
}else{
    alert("try again")
}


