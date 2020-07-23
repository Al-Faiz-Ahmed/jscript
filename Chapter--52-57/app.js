
//// task no1 JAVAScript
var getModal = document.getElementById("modaldiv")


var giveImage = document.getElementById("img")
var giveImgSrc = giveImage.src;

function big(e){
    giveImage.src = e.src
    var seTcss = getModal.style.display = "flex"
    
}
function dis(){
    var seTcss = getModal.style.display = "none"
}


//// TASk no 2 JavaScript
var a = document.getElementById("para");
var zo = document.getElementById("zo")
var c = 1
var d = 10
function zoomin(){
    c++
    var b = 10 * c
    var zoom = a.style.fontSize = b + "px"
    zo.removeAttribute("disabled","disabled")}

function zoomout(){
var b =  d * c - 10
var zoomo = a.style.fontSize = b + "px"
c--}

