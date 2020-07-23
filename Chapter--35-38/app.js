/////task no1

function date(){
    var a = new Date
    document.write(a)
}
date();



//////task no2
function greet(){
    var a = prompt("Enter First Name")
    var b = prompt("Enter Last Name")
    var c = "Hy " + a +" " + b
    alert(c)
}
greet();

//////task  no 3
function sum(){
        var a = +prompt("1st Integer")
        var b = +prompt("2nd Integer")
        alert(a + b)
    }
sum()


//// ////task no 4
function calculate(){
    var a = +prompt("1st integer")
    var b = prompt("Operator")
    var ca = +prompt("2nd integer")
    if(b == "+"){
        alert(a + ca)
    }else if(b == "-"){
        alert(a - ca)
    }else if(b == "*"){
        alert(a * ca)
    }else if(b == "/"){
        alert(a / ca)
    }else{
        alert("Write Correct Format")
    }
}
calculate();



// ////task no 6
function factorial(n){
    var answer = 1;
    if (n == 0 || n == 1){
    return answer;
    }else{
    for(var i = n; i >= 1; i--){
    answer = answer * i;}}}

/ //// //task no 7
function count(){
var a = +prompt("Start Count")
var b = +prompt("End Count")
for(var i = a;i <= b; i++){
    document.write(i + "<br>")
}}

count();

/// task no 9

function calcRact(){
var heighT = 20
var width = 60
var a = width*heighT
document.write("Width of Rectangle " + width + "<br>Height of Rectangle " + heighT + "<br> Total Area of Rectangle " + a )
}
calcRact();

