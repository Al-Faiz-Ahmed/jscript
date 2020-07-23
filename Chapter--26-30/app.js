///CHAPTER- 26 # Task-1

var a = +prompt("Enter Number")
document.write("Number: " + a)
document.write("<br>round off value: " + Math.round(a))
document.write("<br>floor value: " + Math.floor(a))
// document.write("<br>ceil value: " + Math.ceil(a))



/// ////CHAPTER- 26 # Task-2


var a = +prompt("Enter a Negative Number")
document.write("Number: " + a)
document.write("<br>round off value: " + Math.round(a))
document.write("<br>floor value: " + Math.floor(a))
document.write("<br>ceil value: " + Math.ceil(a))



//////CHAPTER- 26 # Task-3

var x = 45
var y = -85
document.write("The absolute value of " + x + " is " + Math.abs(x))
document.write("<br>The absolute value of " + y + " is " + Math.abs(y))



//CHAPTER- 26 # Task-4

var x = Math.random()*7
x = Math.floor(x)
alert("RAndom Dice value: " + x)



//CHAPTER- 26 # Task-5

var x = Math.random()*3
var d = Math.floor(x)
if(d == 2){alert(d + "\nrandom coin value: Heads")}
else{alert("1\nrandom coin value: Tails")}



/// CHAPTER- 26 # Task-6

var x = Math.random()*101
var d = Math.floor(x)
document.write("random number between 1 to 100: " + d)



/// CHAPTER- 26 # Task-8

var gAf = 5
var pr = +prompt("Enter a number between 1 and 10")
if (gAf == pr){alert("Congratulations! Correct Ans " + gAf)}
else{alert(pr + " is Wrong Ans ''TRY AGAIN!'' ")}
