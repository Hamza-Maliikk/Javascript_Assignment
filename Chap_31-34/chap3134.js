// Ques 1
// var dt = new Date()
// console.log(dt)

// Ques2
// var crtmonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octobor", "November", "December"]
// var dt = new Date()
// var month = crtmonth[dt.getMonth()]
// console.log("Current month " + month)

// Ques3
// var crtday = ["Sun","Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
// var day = new Date()
// var today  = day.getDay()
// console.log("Today is " + crtday[today])

// Ques4
// var date = new Date().getDay()
// console.log(date)

// if(date === 0 || date === 6){
//     document.write("Its Funday")
// }else{
//     document.write("Its not a Funday")
// }

// Ques5
// var date = new Date().getDate()
// console.log(date)

// if(date < 16){
//     alert("First fifteen day of the month")
// }else if(date > 30){
//     alert("Last fifteen days of the month")
// }

// Ques6
// var date  = new Date()
// document.write(date + "<br>")

// var milli = date.getTime()
// document.write(milli + "<br>")

// var minutes = milli / (1000 * 60)
// document.write(minutes)

// Ques7
// var time = new Date().getHours()
// console.log(time)

// if(time<12){
//     alert("Its AM")
// }else {
//     alert("Its PM")
// }

// Ques8
// var lastDate = new Date(2020, 11, 31)
// console.log("Later date " + lastDate)


// Ques9
// var rmzndt = new Date(2015, 5, 18)

// var rightdays = new Date()

// var remaining = rightdays - rmzndt

// var final = Math.floor(remaining / (1000 * 60 * 60 * 24))

// console.log(final + " have passed 1st Ramzan since 2015")

// Ques10
// var rmzndt = new Date(2015)

// var rightdays = new Date()

// var remaining = rightdays - rmzndt

// var final = Math.floor(remaining / 1000)

// console.log(final + " had passed")

// Ques11
// var hours = new Date()
// console.log(hours)

// hours.setFullYear(hours.getFullYear() - 100);

// console.log(hours)

// Ques12
// var age = Number(prompt("Enter your age "))
// console.log(age)
// var current  = new Date()
// current.setFullYear(current.getFullYear() - age)

// console.log(current.getFullYear())

// Ques13
var name = prompt("Enter name")
document.write("Name: "+name + "<br>")

var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octobor", "November", "December"]
var user = prompt("Enter Month in number")
document.write("Month "+month[user] + "<br>")

var number = Number(prompt("Enter number of units"))
document.write("Number of units "+number + "<br>")

var charges = 16
document.write("number of charges per unit " + charges + "<br>")

var netAmount = number * charges
document.write("Net amount payable in (Due Date) "+ netAmount + "<br>")

var lateCharge = 350
document.write("Late charges "+ lateCharge + "<br>")

var gross = netAmount + lateCharge
document.write("Gross amount payable (after Due Date) "+ gross)
