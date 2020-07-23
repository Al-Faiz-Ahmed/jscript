///CHAPTER- 21 # Task-1

var a = prompt("Enter Your First Name");
var b = prompt("Enter Your Last Name");
var c = a + b;
alert("Hello " + c);



///CHAPTER- 21 # Task-2

var str = "Samsung Galaxy S6 Edge Plus "
document.write("My Favourite Phone is: " + str);
document.write("<br>Length of string:  " + str.length);





///CHAPTER- 21 # Task-3

var du = "Pakistani"
var uDu = du.indexOf("n");
document.write("String: " + du)
document.write("<br>Index of 'n': " + uDu)



///CHAPTER- 21 # Task-4

var ty = "Hello World"
var tYt = ty.lastIndexOf("l");
document.write("String: " + ty)
document.write("<br>Index of 'l': " + tYt)



///CHAPTER- 21 # Task-5

var _yt = "Pakistani"
var i = _yt.charAt(3)
document.write("String: " + _yt)
document.write("<br>Character at index 3: " + i) 


///CHAPTER - 21 # TASK - 6 "Completed in Q-1"



///CHAPTER- 21 # Task-7

var _a = "Hyderabad"
var _b = _a.replace("Hyder","Islam")
document.write("City: " + _a)
document.write("<br>After replacement: " + _b)




///CHAPTER- 21 # Task-8

var _a = "Ali and Sami are best friends. They play cricket and football together."
var _b = _a.replace(/and/g,"&")
document.write("City: " + _a)
document.write("<br>After replacement: " + _b)



///CHAPTER- 21 # Task-9

var s = "472"
document.write("Value: " + s)
document.write("<br>Type: " + typeof(s))
var s = Number("472")
document.write("<br><br>Value: " + s)
document.write("<br>Type: " + typeof(s))



///CHAPTER- 21 # Task-10

var goOd = prompt("Enter a word")
var _gOod = goOd.toUpperCase()
document.write("User Input: " + goOd)
document.write("<br>Upper case: " + _gOod)



///CHAPTER- 21 # Task-11

var x = prompt("Enter Any Word")
var y = x.slice(0,1)
var _y = y.toUpperCase()
var z = x.slice(1) 
var _z = z.toLowerCase()
var ty = _y + _z
document.write("User Input: " + x)
document.write("<br>Title case: " + ty)



///CHAPTER- 21 # Task-12

var rEx = 35.36;
var xEr = rEx.toString()
document.write("Number: " + rEx)
document.write("<br>Result: " + xEr)



///CHAPTER- 21 # Task-13 !So MUCH DIFFICUT, I Can't COmplete it!



///CHAPTER- 21 # Task-14

var arr = ["cake","applepie","cookie","chips","patties"];
var se = prompt("welcome");
var cop = se.slice(0)
var loWe = cop.toLowerCase();

for (var i = 0 ; i < arr.length; i++ ){
 if(loWe == arr[i]){
     alert(loWe + " is available at index of " + arr.indexOf(loWe) + " in our bakery")
}else{alert("We are Sorry. " + se + " is not available in our bakery")}



///CHAPTER- 21 # Task-15 !So MUCH DIFFICUT, I Can't COmplete it!



///CHAPTER- 21 # Task-16

var deF = "University of karachi"
var fEd = deF.split(" ")
document.write(deF.charAt(0) + "<br>" + deF.charAt(1) + "<br>" + deF.charAt(2) + "<br>" + deF.charAt(3) + "<br>")
document.write(deF.charAt(4) + "<br>" + deF.charAt(5) + "<br>" +deF.charAt(6) + "<br>" + deF.charAt(7) + "<br>" + deF.charAt(8) + "<br>" + deF.charAt(9) + "<br>" + deF.charAt(10) + "<br><br>")

document.write(deF.charAt(11) + "<br>" + deF.charAt(12) + "<br><br>"  )

document.write(deF.charAt(13) + "<br>" + deF.charAt(14) + "<br>" + deF.charAt(15) + "<br>" + deF.charAt(16) + "<br>"  + deF.charAt(17) + "<br>" + deF.charAt(18) + "<br>" + deF.charAt(19) + "<br>" + deF.charAt(20) + "<br>" )



///CHAPTER- 21 # Task-17

var a = "Pakistan"
var b = a.charAt(7)
document.write("User input: " + a)
document.write("<br>Last character of input: " + b)



///CHAPTER- 21 # Task-18


var temp ="The quick brown fox jumps over the lazy do."
var low = temp.toLowerCase()
var d = (low.match(/the/g) || []).length;
document.write("TEXT: " + temp)
document.write("<br>There are : " + d + " occurrence(s) of word 'the'")
