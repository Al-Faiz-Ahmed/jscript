var a = document.getElementById("main-content")
console.log(a.childNodes);

var b = document.getElementsByClassName("render")
console.log(b);

var get = document.getElementById("firstname").value = "Alex"
var get1 = document.getElementById("last-name").value = "Bank"
var get2 = document.getElementById("email").value = "alexbank@example.com";

var forMa = document.getElementById("form-content").nodeType;
console.log(forMa);

var  lastName = document.getElementById("lastName")
var  lasTnametype = console.log(lastName.nodeType)
var  lasTnamechiLd = console.log(lastName.childNodes);


var conTent = document.getElementById("main-content");
var firstChild = console.log(conTent.firstChild);

var preSib = console.log(lastName.previousSibling)
var nextSib = console.log(lastName.nextSibling)

var emaL = document.getElementById("email")
var gettype = console.log(emaL.nodeType)
var getPA = console.log(emaL.parentNode)