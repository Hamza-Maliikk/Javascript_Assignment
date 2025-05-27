var a = +prompt("Enter the percentage")



if (a >= 90 && a <= 99){
    document.write("A one")
}
else if(a >= 80 && a <= 89){
    document.write("A")
}
else if(a >= 70 && a <= 79){
    document.write("B")
}
else if(a >= 60 && a <= 69){
    document.write("C")
}
else if(a >= 50 && a <= 59){
    document.write("Fail")
}
else{
    document.write("Invalid Number")
}
