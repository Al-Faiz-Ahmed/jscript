for ( x=1; x <= 10; x++ ){document.write(x + "<br>")};

var a = +prompt("Enter a number to show its multiplication table")
var b = +prompt ("Enter length multiplication table")
document.write("<br><br>Multiplicaton table of " + a + "<br>Length " + b + "<br><br>");
for(i = 1;i <= b; i++){
    document.write (a + " x " + i + " =" + a*i + "<br>" )
}

var fruits = ["apple","banana","mango","orange","stawberry"]
for (i = 0;i < 5; i++ ){document.write(fruits[i] + "<br>")}
document.write("<br><br><br>Counting:");

for(var count = 1; count <= 15; count++ ){document.write(count + ",")}
document.write("<br><br>Reverse counting:");
for (var rev = 10; rev >= 1; rev--){document.write(rev + ",")}
document.write("<br><br>Even:");
for (var rev = 0; rev <= 20; rev = rev+2){document.write(rev + ",")}
document.write("<br><br>Odd:");
for (var rev = 1; rev <= 20; rev = rev+2){document.write(rev + ",")}
document.write("<br><br>Series:");
for (var rev = 2; rev <= 20; rev = rev+2){document.write(rev + "k,")}
document.write("<br><br><br>");

var a = ["cake","applepie","cookie","chips","patties"]
var b = prompt("Welcome to Our Bakery")

for(var i = 0 ; i < a.length; i++){
    
    if(b == a[i]){
        alert(b  + " is available at index of " + a.indexOf(b)  + " in our bakery" )
    }else{
        alert("We are sorry. " + b + " is not available in our bakery.")
    }
    break
}

document.write("<br><br><br>");

var A = [24, 53, 78, 91, 12]


document.write("Array items: " + A  + "<br>");
document.write("The Largest number is: " +  Math.max(...A));

document.write("<br><br>Array items: " + A  + "<br>");
document.write("The smallest number is: " +  Math.min(...A));

document.write("<br><br><br>");

for(i = 1;i <= 20;i++){document.write(i*5 + ",")}