// Ques1
function crntTime(){
    var time =  new Date()
    return time
}
document.write(crntTime())

// Ques2
function fullName(first, last){
    alert("Welcome " + first + " "+ last)
}

fullName("Hamza", "Malik")

// Ques3
function addNumbers(num1, num2){
var add = num1 + num2
return add

}

console.log( addNumbers(1, 10))

// Ques4
function calculator (num1, num2, operator){
var result;
if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2
    } else {
        result = "Invalid operator";
    }

    return result
}

document.write(calculator(10, 20, "*" ))

// // Ques5
function square(num){
var number = num**2
return number
}

console.log(square(10))

// Ques6
function factorial(num){
    
    if(num < 0){
        alert("please don't enter negative number")
    }else if(num === 0 || num === 1){
        return 1
    }

    var result = 1
    for(var i = 2; i<=num; i++){
        result *= i
    }

    return result
}

console.log(factorial(5))

// Ques7
function counting(start, end){
    var counting = "";
    for(var i = start; i<=end; i++){
        counting = counting + i + "<br>"  
    }
    return counting
}

document.write(counting(1, 10))

// Ques8
function outer(base, perpendicular){
    function inner(x){
       return x ** 2
    }

    var base = inner(base)
    var perpendicular = inner(perpendicular)
    var final = Math.sqrt(base + perpendicular)

    return final
}

document.write("Hypothesis is: " + outer(3, 4))

// Ques9(i)
function areaTraingle(width, heigth){
    var area = width * heigth;
    return area;
}

document.write("The area of triangle is: ", areaTraingle(3 , 5))

// // Ques9 (ii)
function areaTraingle(width, heigth){
    var area = width * heigth;
    return area;
}

var w = 8
var h = 5
var result = areaTraingle(w, h)

document.write("The area of triangle is: ", result)


// Ques10
function palindrome(str){
    var first = str.toLowerCase()

    var second = first.split('').reverse().join('')
    return first === second;
}

console.log(palindrome("madam"))

// Ques12
function bigChar(str){
    var words = str.split(' ')

    for(var i = 0; i<words.length; i++){
        if(words[i].length > 0){
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
    }
    return words.join(' ')

}

var input = "the fox green match"
var result = bigChar(input)
console.log(result)