/// /// task no 1
function first(){
var a = document.getElementById("firstName").value;
var getpara = document.getElementById("first");

var  b = document.getElementById("lastName").value;

var c = document.getElementById("email").value;

var d = document.getElementById("num").value;

var inner = getpara.innerHTML = "Your First Name is: " + a + "<br>Your Last Name is: " + b + "<br> Your Email is: " + c + "<br>Your Phone No is: " + d}


/// /// task no 2
function getPara(){
    var lo = document.getElementById("lorem")
    var add = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ea eveniet maiores suscipit, <br>doloribus commodi ducimus enim cupiditate inventore nihil quaerat neque tempore facilis aliquam<br> nulla molestias, omnis numquam. Unde?"
    var afteradd = lo.innerHTML = add;
}

