// // ques1 addition
var num1 = 10
var num2 = 20
var num3 = num1 + num2
document.write(num3 + "<br>")


// // ques2 subtraction
var num1 = 10
var num2 = 20
var num3 = num2 - num1
document.write(num3 + "<br>")

// multiplication
var num1 = 10
var num2 = 20
var num3 = num1 * num2
document.write(num3 + "<br>")

// division
var num1 = 10
var num2 = 20
var num3 = num2 / num1
document.write(num3 + "<br>")

// modulus
var num1 = 10
var num2 = 20
var num3 = num2 % num1
document.write(num3)


// ques3
var initialValue = 5
document.write("Initial Value is  " + initialValue++ + "<br>")
document.write("after increment value is  "+initialValue + "<br>")

var additional = initialValue + 7;
document.write("Value after addition is "+ additional)
document.write("value after decrement is "+ --additional + "<br>") //pre decrement

var final = additional % 3
document.write("The reminder is" + final)


// ques4

var ticket = 600
var calcult = 5
var total = ticket * calcult
document.write("Total cost to buy " + calcult + " tickets price is " + total +"PKR" )

// // ques5
var table = 4
document.write("Table of " + table +"<br>")
document.write(table + "x" + 1 + "=" + table +"<br>" )
document.write(table + "x" + 2 + "=" + table * 2 + "<br>")
document.write(table + "x" + 3 + "=" + table * 3 + "<br>")
document.write(table + "x" + 4 + "=" + table * 4 + "<br>")
document.write(table + "x" + 5 + "=" + table * 5 + "<br>")
document.write(table + "x" + 6 + "=" + table * 6 + "<br>")
document.write(table + "x" + 7 + "=" + table * 7 + "<br>")
document.write(table + "x" + 8 + "=" + table * 8 + "<br>")
document.write(table + "x" + 9 + "=" + table * 9 + "<br>")
document.write(table + "x" + 10 + "=" + table * 10 )

// ques6
var celcuis = 25
var convertC = (celcuis * 9 / 5) + 32
document.write(celcuis + "°c is " + convertC +"°F <br>");

// °f to °c
var farhen = 77
var convertF = (farhen - 32) * 5 / 9
document.write(farhen + "°F is " + convertF +" °c");

// ques7
var item1 = 650
var quan1 = 3
var item2 = 100
var quan2 = 7
var shipCharge = 100
var total = (item1*quan1) + (item2*quan2) + shipCharge
document.write("Price of item 1 is " + item1 +"<br>")
document.write("Quantity of item 1 is "+ quan1 +"<br>")
document.write("Price of item 2 is " + item2 +"<br>")
document.write("Quantity of item 2 is "+ quan2 +"<br>")
document.write("Shipping charges is "+ shipCharge +"<br>")
document.write("Total cost of your order "+ total +"<br>")


// ques8
var totalMarks = 980
var obtainedMarks = 920
var percentage = (obtainedMarks / totalMarks) * 100
document.write(percentage)

//ques9
var dollar = 10
var pak = 104.80
var saudi = 28
var riyal = 25
var total = ( dollar * pak ) + ( riyal * saudi )
document.write("Total currency in PKR" + total)

// ques10
var a = 5
var total = ((a + 5)*10)/2
document.write(total)

// ques11
var ageYear = Number(prompt("Enter  current year"))
var birthYear = Number(prompt("Enter your birth year"))
var total = ageYear - birthYear
document.write("Your age is " + total)

// // ques12
var raddius = Number(prompt("Enter value of radius"))
var cir = 2*(raddius * 3.142)
var area = raddius**2
document.write("The circumference of circle is "+cir + "<br>")
document.write("The area is "+ (3.142 * area))

// ques13
var frtsnack = prompt("Enter Favourite snack")
var crtage = Number(prompt("Enter current age"))
var maxage = Number(prompt("Enter maximum age"))
var amout = Number(prompt("Enter per day snack amount"))
var total = (crtage - maxage) * amout
document.write("Your favourite snack "+ frtsnack + "<br>")
document.write("Current age " +crtage + "<br>")
document.write("Maximum age " + maxage + "<br>")
document.write("Amount snacks per day " + amout + "<br>")
document.write("you will need " + total+ " " + + frtsnack +" to last you you until ripe old age of " + amout )