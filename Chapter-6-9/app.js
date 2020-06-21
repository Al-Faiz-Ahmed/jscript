document.write("Result:<br>")
var a = 10; 
document.write("The value of a is: " + a +"<br><br>")

document.write("The value of ++a is: " + ++a +"<br>")
document.write("Now The value of a is: " + a +"<br><br>")

document.write("The value of a++ is: " + a++ +"<br>")
document.write("Now The value of a is: " + a +"<br><br>")

document.write("The value of --a is: " + --a +"<br>")
document.write("Now The value of a is: " + a +"<br><br>")

document.write("The value of --a is: " + a-- +"<br>")
document.write("Now The value of a is: " + a +"<br><br><br><br>")


var a =2;
var b =1;



document.write("a is: "+ a + "<br>")
document.write("b is: "+ b + "<br>")
document.write("What will be the result: --a - --b + ++b + b-- <br><br>")

document.write("a=2, b=1 , --a(1) - --b(0) <br> + ++b(1) + b--(1) <br> Now the Value of <br> a=1 <br> b=1 <br><br>")

var c = --a - --b + ++b + b--;

document.write("The result is " + c + "<br><br><br>")

var sub1 = prompt("Enter Subject 1");
var sub2 = prompt("Enter Subject 2");
var sub3 =  prompt("Enter Subject 3");

var tMarks = 100;

var  oMarks1 = +prompt ("Obtained marks of " + sub1)
var  oMarks2 = +prompt ("Obtained marks of " + sub2)
var  oMarks3 = +prompt ("Obtained marks of " + sub3)



document.write("<table>")
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>")
document.write("<tr>")
document.write("<td>")
document.write(sub1)
document.write("</td>")
document.write("<td>")
document.write(tMarks)
document.write("</td>")
document.write("<td>")
document.write(oMarks1)
document.write("</td>")
document.write("<td>")
document.write(oMarks1/tMarks*100 + "%")
document.write("</td>")
document.write("</tr>")
document.write("<tr>")
document.write("<td>")
document.write(sub2)
document.write("</td>")
document.write("<td>")
document.write(tMarks)
document.write("</td>")
document.write("<td>")
document.write(oMarks2)
document.write("</td>")
document.write("<td>")
document.write(oMarks2/tMarks*100 + "%")
document.write("</td>")
document.write("</tr>")
document.write("<tr>")
document.write("<td>")
document.write(sub3)
document.write("</td>")
document.write("<td>")
document.write(tMarks)
document.write("</td>")
document.write("<td>")
document.write(oMarks3)
document.write("</td>")
document.write("<td>")
document.write(oMarks3/tMarks*100 + "%")
document.write("</td>")
document.write("</tr>")
document.write("<tr>")
document.write("<td>")
document.write("</td>")
document.write("<th>")
document.write(100*3 )
document.write("</th>")
document.write("<th>")
document.write(oMarks1 + oMarks2 + oMarks3)
document.write("</th>")
document.write("<th>")
document.write(( oMarks1+oMarks2+oMarks3)/300*100 + "%")
document.write("</th>")
document.write("</tr>")
document.write("</table>")


