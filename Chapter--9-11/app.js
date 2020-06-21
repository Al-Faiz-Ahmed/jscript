var a = prompt("Enter Your City Name","Karachi")
if(a == "Karachi"){
    alert("Welcome to city of  lights")
};

 var i = prompt("Gender","Male OR Female") 
 var m = "Male"&&"male";
 var f = "Female"||"female";

 if ( i === m){
     alert ("Good Morning Sir.")}else{
    alert ("Good Morning Ma'am.")
}

var light = prompt("Signal Colour \nHINT! Red, Yellow, Green")

if(light == "Red"){
    alert("Must Stop!")}

else if (light == "Yellow"){
    alert("Ready to move.")}

else if (light == "Green"){
    alert("Move Now.")}

else { alert("Wrong color\nOR Write first letter Capital")}

var lo = prompt("Current Fuel in the vehicle\n write ''L'' at the end of value")

if(lo < "0.25L"){
    alert("Please Refill the fuel")
}else{
    alert("The fuel is enough")
}

var a = 4; if (++a === 5)
{ alert("given condition for variable a is true"); }

var b = 82; if (b++ === 83)
{ alert("given condition for variable b is true"); }

var c = 12; if (c++ === 13)
{ alert("condition 1 is true"); }
if (c === 13){ alert("condition 2 is true"); } 
if (++c < 14){ alert("condition 3 is true"); }
if (c === 14){ alert("condition 4 is true"); }  


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost)
{ alert("The cost equals"); } 

if (true){ alert("True"); } 



if("car" < "cat")
{ alert("car is smaller than cat"); }

var a = +prompt("Total Marks of 3 Subjects")
var b = +prompt("Obtained Marks of 3 Subjects")

var c = b/a*100 + "%";

alert(c);

var g = +prompt ("Enter Percentage")

document.write("<h1>Marks Sheet</h1><br>")

if(g >"100" || g <="0"){
    alert("Please Input Everything Properly")
    document.write("You Wrote Something Wrong<br>Please Try Again<br><br><br>")
}
else if(g >= "80" || g <= "100"){
    document.write("Total marks : " + a + "<br>Marks obtained : " + b +"<br>Percentage : " + g + "%" + "<br>Grade : A-one" + "<br>Remarks : Excellent<br><br><br>" )
}
else if(g >= "70"){
    document.write("Total marks : " + a + "<br>Marks obtained : " + b +"<br>Percentage : " + g + "%"  + "<br>Grade : A" + "<br>Remarks : Good<br><br><br>" )
}
else if(g >= "60"){
    document.write("Total marks : " + a + "<br>Marks obtained : " + b +"<br>Percentage : " + g + "%"  + "<br>Grade : b" + "<br>Remarks : You need to ipmrove<br><br><br>" )
}
else if(g < "60"){
    document.write("Total marks : " + a + "<br>Marks obtained : " + b +"<br>Percentage : " + g + "%"  + "<br>Grade : Fail" + "<br>Remarks : Sorry<br><br><br>" )
}
else{alert("Please Input Everything Properly")}

var ga = 7;
var gu = +prompt("Guess The Number Between 1 to 10")

if (gu == "7"){
    alert("''Bingo! Correct answer''.")
}
else if (gu >10 || gu<0){
    alert ("Input Only between 1 to 10")
}
else { alert("''Close enough to the correct answer''.")}


var t = +prompt ("Type Your City temperature ") 

if(t > 40){
    alert("''It is too hot outside''")
}
else if(t > 30){
    alert("''The weather today is Normal''")
}
else if(t > 20){
    alert("''Today's Weather is Cool''")
}
else  if(t > 10){
    alert("''OMG! Today's weather is so Cool''")
}

else {alert ("Hello Mehmood")}

var _1 = +prompt("First Number")
var _3 = prompt("Operation +, _, /,  *, %")
var _2 = +prompt("Second Number")
var add = _1 + _2;
var sub = _1 - _2;
var mul = _1 * _2;
var div = _1 / _2;
var per = _1 / _2 *100;

if(_3 === "+"){
    alert( add)}
else if(_3 == "-"){
    alert( sub)}
else if(_3 == "*"){
    alert( mul)}
else if(_3 == "/"){
    alert( div)}
else if(_3 == "%"){
    alert( div *100 + "%")}
else {
    alert("Not a number inserted!")
}