// // Ques1
var firstName = prompt("Enter your first name:");
var lastName  = prompt("Enter your last name")
var fullName = firstName.concat("  "+ lastName)

console.log(fullName);

// Ques2
var fvrtPhone = prompt("Enter your favourite phone ")

console.log("My favourite Phone is " + fvrtPhone);
console.log("length of string " + fvrtPhone.length );

// Ques3
var country = "Pakistan"

var num = country.indexOf("n")
console.log(num);

// Ques4
var word = "Hello World"
var final = word.lastIndexOf("l")
console.log(final);

// // Ques5
var value = "Pakistani"
var index = value.charAt(3)
console.log(index);

// Ques6
var city = "Hyderabad"
var replaceCity = city.replace("Hyder", "Islam")

console.log(city);
console.log(replaceCity);

// Ques7
var sentence = "Ali and Sami are best friends. They play cricket and football together."
var replaceSntnce = sentence.replace(/and/g, "&")

console.log(sentence)
console.log(replaceSntnce)

// Ques8
var str = "472"

var final = parseInt(str)

console.log(str)
console.log(typeof(str))
console.log(final)
console.log(typeof(final))

Ques9
var input = prompt("Enter the input")
var change = input.toUpperCase()
console.log(change)

// ques10
var input = prompt("Enter the value")
var final  = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()

console.log(input)
console.log(final);

Ques11
var num = 35.36
var final = num.toString()
var result = final.replace(".", "")

console.log(num);
console.log(result);

// Ques13
var arr = ["cake", "apple pie", "cookie", "chips", "patties"]
var input = prompt("Welcome to the bakery what do you want to buy").toLowerCase()
var flag = true;

for(var i = 0; i<arr.length; i++){
    if(input === arr[i]){
        alert(arr[i] + " is available to index " + i)
        flag = false;
    }
}

if(flag){
    console.log("Invalid item")
}

// Ques14
var username = prompt("Enter your username");
var isValid = true;

for (var i = 0; i < username.length; i++) {
    var charCode = username.charCodeAt(i);
    if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
        isValid = false;
        break;
    }
}

if (!isValid) {
    alert("Please enter a valid username without special characters [@ . , !]");
} else {
    alert("Username accepted: " + username);
}


// Ques15
var  university = "University of Karachi"

var change = university.split("")

for(var i = 0; i < change.length; i++){
    console.log(change[i]);
}

// Ques16
var input = prompt("Enter input value")

var final = input.charAt(input.length - 1)

alert(final)

// Ques17
var sentence = "The quick brown fox jumps over the lazy dog"
var find = "the"
var lower = sentence.toLowerCase()

var wordArray = lower.split(" ")
var count = 0


for(var i = 0; i < wordArray.length; i++){
    if(wordArray[i] === find){
        count++;
    }
}

console.log("this word use in a sentence in "+ count)