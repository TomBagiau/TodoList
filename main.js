//creation du boutton de suppression
var myList = document.getElementsByClassName("list")
var i
for(i = 0; i < myList.length; i++){
    var span = document.createElement("span")
    var txt = document.createTextNode("\u00D7") //X
    span.className = "close"
    span.appendChild(txt)
    myList[i].appendChild(span)
}

//fermer l'item
var close = document.getElementsByClassName("close")
var i
for(i = 0; i < close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none"
    }
}

// creation de la liste
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;

    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Vous devez écrire quelque chose!");
    } else {
      document.getElementById("myUl").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }