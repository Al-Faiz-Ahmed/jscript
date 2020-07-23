////chapter - 31  Task#1

var a  = new Date()
document.write(a);



////chapter - 31  Task#2

var a  = new Date()
var b  = ["January","February","March","April","May","June","July","August","September","Octuber","November","December"]
var c = a.getMonth()
document.write("Current Month: " + b[c]);



////chapter - 31  Task#3

var a  = new Date()
var b  = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Satday"]
var c = a.getDay()
var d = b[c]
var e = d.slice(0,3)
document.write("Today is " + e);



////chapter - 31  Task#4


var a  = new Date()
var b  = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var c = a.getDay()
var d = b[c]
if(d === "Saturday" || d == "Sunday"){document.write("It's Fun day")}



////chapter - 31  Task # 5

var a = new Date()
var b = a.toString()
var c = b.slice(8,10)
if(c < 16){document.write("First Fifteen days of the month")}
else{
    document.write("Last days of the month ")
}



////chapter - 31  Task # 6

var a = new Date()
var b = a.getTime()
var c = b / (1000 *60 *60) 
var e = Math.round(c)
document.write("Current Date: " + a)
document.write("<br>Elapsed milliseconds since January 1 , 1970: " + b)
document.write("<br>Elapsed minutes since January 1 , 1970: " + e)



////chapter - 31  Task # 7

var a = new Date()
var b = a.getHours()
if(b < 12){document.write("It's AM")}
else{
    document.write("It's PM")
}


// //////chapter - 31  Task # 11

var b = new Date()
var a = new Date()
b.setHours(20)
document.write("Current Date: " + a)
document.write("<br>1 Hour ago, it was." + b )



// //////chapter - 31  Task # 12

var b = new Date()
var a = new Date()
b.setFullYear(1920)
document.write("Current Date: " + a)
document.write("<br>100 Years Back, it was." + b )



////////chapter - 31  Task # 13

var a  = 2002
var b  = 2020
var c =  b-a
document.write("Your Age is: " + c)
document.write("<br>Your BirthYear is: " + a)



//////chapter - 31  Task # 14

var a = "Muhammad Danish"
var b = "February"
var c = 410
var d = 16
var e = 350
var netaMou = c * d
var gross = netaMou + e;
document.write("<h1>K-Electric</h1>")
document.write("<br>Customer Number: " + b)
document.write("<br>Number of Units: " + c)
document.write("<br>Charges per Units: " + d)
document.write("<br><br>NEt Amount PAyable (within due date): " + netaMou)
document.write("<br>Late Payment Surcharge: " + e)
document.write("<br>Gross Amount Payable (after due date): " + gross)