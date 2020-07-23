// ///task no 1` and 2
function onclicK(){
    alert("Thanks for Purchashing a Phone from us..")}



/////// / / / / / task no 3
 
var arr = ["jhone 10","Doe 9","Mark 10","James 8"]
var tab = document.getElementById("table")

  for(var i = 0; i<arr.length ; i++ ){
      var tr = document.createElement("tr")
      tab.appendChild(tr)
      for(var t = 1; t<=1 ; t++){
         var td = document.createElement("td")
         tr.appendChild(td)
         td.innerText = i
      }
      for(var p = 1; p<=1 ; p++){
         var td = document.createElement("td")
         tr.appendChild(td)
         td.innerText = arr[i]
      }
      for(var bt = 1; bt<=1; bt++){
          var td = document.createElement("td")
          tr.appendChild(td)
          var btn = document.createElement("button")
          btn.innerText = "DELETE"
          td.appendChild(btn)
          btn.setAttribute("onclick","del(this)")
      }
      function del (e){
        e.parentNode.parentNode.remove()
      }
      
  }
  console.log(tab)

   





///tsak no 4

var para = document.getElementById("count");
var p = 1;

function count(){
  var sum = para.innerHTML = p++
}
function minus(){
  var min = para.innerHTML = p--}





// ////task no 5

function mouseover(){
  var fir = document.getElementById("first") 
  fir.src = "https://unitedmobile.com.pk/wp-content/uploads/2018/09/united-mobile-voice-v2000-display.jpg"}
function mouseout(){
  var fir = document.getElementById("first") 
  fir.src = "https://www.pakmobizone.pk/wp-content/uploads/2019/12/Figi-fx-1.jpg"}