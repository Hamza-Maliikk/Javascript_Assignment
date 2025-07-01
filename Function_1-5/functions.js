// // Ques1

// function sumArray(number){
//     var sum = 0
//     for(var i = 0; i<arr.length; i++){
//         sum += arr[i]
        
//     } 
//     return sum
// }
// var arr = [1, 20, 40]
// console.log(sumArray(arr))

// Ques2


// function strRev(){
//     var value = ""
//     for(var i = str.length - 1; i >= 0; i--){
//        value += str[i]
//     }
//     return value
// }

// var str = prompt("Enter string")
// console.log(strRev(str))

// Ques3
// function largestNum(val){
//     var largest = 0
//     for(var i = 0; i<arr.length; i++){
//         if(arr[i] > largest){
//             largest = arr[i]
//         }
//     }
//     return largest
// }

// var arr = [1, 2, 3, 50]
// console.log("The largets number is " + largestNum(arr))

// Ques4

// function vowelsCheck(string){
//     var vowels = "aeiou"
//     var count = 0
//     for(var i = 0; i<string.length; i++){
//         var str = string.toLowerCase()
//         if(vowels.includes(str[i])){
//             count++
//         }
//     }
//     return count
// }

// console.log("The volwels in a sentence is " + vowelsCheck("HAMZAMALIK"))

// Ques5
// function duplicateNum(arr){
//     var duplicate = []
//     var seen = []

//     for(var i=0; i<arr.length; i++){
//         if(seen.includes(arr[i])){
//             if(!duplicate.includes(arr[i])){
//                 duplicate.push(arr[i])
//             }
            
//         }else{
//             seen.push(arr[i])
//         }
//     }
//     return duplicate;   

// }


// var arr = [1, 2, 2, 3, 3, 4, 5]
// console.log("The duplicate number is " ,duplicateNum(arr))

// Ques6


function capitalWord(sentence){
    var words = sentence.split(" ");
    var capital = [];

    for(var i = 0; i<words.length; i++){
        var word = words[i];

        if(word.length > 0){
            var capitalized = word[0].toUpperCase() + word.slice(1).toLowerCase()
            capital.push(capitalized)
        }else{
            capital.push("")
        }
    }
    return capital.join(" ");
    

}

var sentence = "Hello world i am capatalized"
console.log(capitalWord(sentence))