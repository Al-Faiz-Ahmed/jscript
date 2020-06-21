var a = [];

a[0] = "farhan"
a[2] = "Sammak"
a[1] = "Shayan"
a[3] = "Ahad"

var b = ["Faiz"]
document.write(b + "<br>");
var b = [1]
document.write(b + "<br>");
var b = [1]
document.write(true + "<br>");
var b = [1,"Sammak",false]
document.write(b + "<br>");

document.write("<h2>Qualification:</h2>")
var d =["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"]
document.write("<ol>")
document.write("<li>")
document.write(d[0]);
document.write("</li>")
document.write("<li>")
document.write(d[1]);
document.write("</li>")
document.write("<li>")
document.write(d[2]);
document.write("</li>")
document.write("<li>")
document.write(d[3]);
document.write("</li>")
document.write("<li>")
document.write(d[4]);
document.write("</li>")
document.write("<li>")
document.write(d[5]);
document.write("</li>")
document.write("<li>")
document.write(d[6]);
document.write("</li>")
document.write("<li>")
document.write(d[7]);
document.write("</li>")
document.write("</ol><br><br>")



var t =["Faiz","Sammak","Hamza"]
var s =[320,230,480]
var total = 500;
document.write("Score of " + t[0] + " is " + s[0] + ". Percentage : " +  s[0]/total*100 + "%<br>");
document.write("Score of " + t[1] + " is " + s[1] + ". Percentage : " +  s[1]/total*100 + "%<br>");
document.write("Score of " + t[2] + " is " + s[2] + ". Percentage : " +  s[2]/total*100 + "%<br><br><br>");

var a = [320,230,480,120];
document.write("Scores of Students: " + a + "<br>");

var b = a.sort();
document.write("Ordered Scores of Students: " + b + "<br><br><br>");

var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
document.write("Cities list: " + "<br>" + cities + "<br><br>" );

var selectedCities = cities.slice(2,4)
document.write("Selected cities list: " + "<br>" + selectedCities + "<br><br><br>" );




var i = [" This " , " is " , " my " , " cat " ]
document.write("Array:<br>" + i + "<br><br>")

 var c = i.join("");
document.write("String:<br>" + c + "<br><br>")

var on = ["keyboard","mouse","printer","monitor"];

document.write("Devices: <br>" + on + "<br><br>");
document.write("Out: <br>" +  on[0] + "<br>" +  "Out: <br>" +  on[1] + "<br>" +"Out: <br>" +  on[2] + "<br>" +"Out: <br>" +  on[3] + "<br>" + "<br><br>" );


document.write("Devices: <br>" + on + "<br><br>");
document.write("Out: <br>" +  on[3] + "<br>" +"Out: <br>" +  on[2] + "<br>" +"Out: <br>" +  on[1] + "<br>" +"Out: <br>" +  on[0] + "<br>" + "<br><br>" );

var sd = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"]
document.write("<select>")
document.write("<option>")
document.write(sd[0])
document.write("</option>")
document.write("<option>")
document.write(sd[1])
document.write("</option>")
document.write("<option>")
document.write(sd[2])
document.write("</option>")
document.write("<option>")
document.write(sd[3])
document.write("</option>")
document.write("<option>")
document.write(sd[4])
document.write("</option>")
document.write("<option>")
document.write(sd[5])
document.write("</option>")
document.write("</select>")