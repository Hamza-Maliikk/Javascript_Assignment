// Ques1
var birthYear = +prompt("Enter your Birth year")
var currentYear = 2025
var totalAge = currentYear - birthYear

var finalResult = alert(totalAge)

// Ques2
var arr = [] 
for(var i = 0; i < 5; i++){
    var numbers = +prompt("Enter five numbers")
    arr.push(numbers)

}
var sum = 0
for(i = 0; i < 5; i++){
    sum = sum + arr[i]
}

var avg = sum/arr.length
alert(avg)
console.log(arr);

// Ques3
var num = [1, 2, 2, 2, 25, 4, 8, 6, 9, 6]

for(var i = 0; i < num.length; i++){
    
    if(num[i] % 3 == 0){
        alert("Number is divisible by 3 is " + num[i])
    }
}

// Ques4
var factNum = +prompt("Enter Your Number")
var fac = 1

for(var i = 1; i <= factNum; i++){
    fac *= i
}

console.log(fac)

// Ques5
var str = prompt("Enter any word")
var a = []
for(var i = str.length; i >= 0; i--){
    a.push(str[i])
}
console.log(a);

// ques6
var text = prompt("Enter a sentence:");
var letter = prompt("Enter the letter to count:");
var count = 0;

for (var i = 0; i < text.length; i++) {
    if (text[i].toLowerCase() === letter.toLowerCase()) {
        count++;
    }
}

alert("The letter '" + letter + "' appears " + count + " times.");



// ques7
var arr = []
for(var i = 0; i < 5; i++){
    var names = prompt('Enter name')
    arr.push(names) 
    arr.sort()
}
console.log(arr);

// ques8
var input = Number(prompt("Enter a number"))

for(var i = 1; i <= 10; i++){
    console.log(input + " x " + i + " = " + input*i  )
}

// ques9
var input = prompt("Enter sentence")
var vowel = 0

input = input.toLowerCase()

for(var  i = 0; i < input.length; i++){
    var char = input[i]
    if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
        vowel++
    }

}

console.log("Number of vowels in a sentence" + vowel);

// ques10

var arr1 = ["Milk", "chocolate", "Biscuit"]
var arr2 = [10, 20, 30]

for(var i = 0; i<arr1.length; i++){
    console.log("products " + arr1[i] + " " + "price " + arr2[i])
}


// ques 11
var celcius = prompt("Enter centigrade")
var fahrenheit = (celcius * 9/5)*32

var result = alert("The converted value is " + fahrenheit)

ques12
var input = prompt("Enter word").toLowerCase()
var reversed = ""

for(var i = input.length - 1; i>=0; i--){
    reversed += input[i]
}

if(input === reversed){
    console.log("Word is palindrome")
}else{
    console.log("Word is not palindrome")
}

// ques13
var num = Number(prompt("Enter Number"))

if(num%2 == 0 ){
    console.log(num +" is a prime number")
}else{
    console.log(num + " is not a prime number")
}

// ques14
var numbers = []

for(var i = 0; i<10; i++){
    var radomNumber = Math.floor(Math.random() * 100) + 1;
    numbers.push(radomNumber);
}

var largest = numbers[0]

for(var i = 0; i<numbers.length; i++){
    if(numbers[i] > largest){
        largest = numbers[i]
    }
}
console.log("The Random array is "+ numbers )
console.log("The largest number is "+ largest )


// ques15
var firstVal = Number(prompt("Enter first number"))
var secVal = Number(prompt("Enter Second number"))

var operator = prompt("Enter operator")

if(operator == "+"){
    document.write("Answer is " + (firstVal+secVal) )
}else if(operator == "-"){
    document.write("Answer is " + firstVal-secVal )
}else if(operator == "*"){
    document.write("Answer is " + firstVal*secVal) 
}else if(operator == "/"){
    document.write("Answer is " + firstVal/secVal )
}else{
    alert("Invalid operator")
}

// ques16
var inputNum = [22, 33, 45, 55, 65, 75, 85]
var greater = []

for(var i = 0; i<inputNum.length; i++){
    if(inputNum[i] > 50){
        greater.push(inputNum[i])
    }

}
console.log(greater)