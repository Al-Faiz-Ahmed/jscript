var a = prompt("Enter A Letter\neg; A or d or C");
var b = a.charCodeAt(0);
alert("The ASCII CODE of " + a + " is " +  b);


var c = +prompt("Enter First integer");
var d = +prompt("Enter Second integer");

if(c === d){
    alert("Both Are Equal")
}

else if (c >= d){
    alert(c + " is greater than " + d)
}
else if (d >= c){
    alert(d + " is greater than " + c)
}

else {
    alert("Type properly");
};

var a = +prompt("Enter Your integer");

if(a === 0){
    alert(a + " is ZERO")
}
else if (a <= -1 ){alert(a + " is NEGATIVE")}
else if (a >=  1 ){alert(a + " is POSITVE")}
else {alert("Please Enter A Number")}

s = "Muhammad";

g = prompt("Enter your Password")
if (s == g){
    alert("''Correct! The password you entered \nmatches the original password.''")
}
else if (s !== g){alert("''Incorrect password''")}
else {alert("''Please enter your password''")}


var greeting; 
var hour = 13; 
if (hour < 18) { alert(greeting = "Good day"); }
else { alert(greeting = "Good evening"); } 


var time;
var t = +prompt("Enter time 24 hour Format")

if (t >= 0000 && t < 1200){alert("Good Morning")}
else if (t >= 1200 && t < 1700){alert("Good Afternoon")}
else if (t >= 1700 && t < 2100){alert("Good Evening")}
else if (t >= 2100 && t < 2359){alert("Good night")}
else{alert("Type in 24 hour Format")}