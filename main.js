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

//creation du boutton de check
var myList = document.getElementsByClassName("list")
var i
for(i = 0; i < myList.length; i++){
    var span = document.createElement("span")
    var txt = document.createTextNode("\u2713")
    span.className = "check"
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

//barrer l'items
var check = document.getElementsByClassName("check")
var i
for(i = 0; i < check.length; i++){
  check[i].onclick = function(){
    var div = this.parentElement
    div.style.textDecoration = "line-through"
  }
}





//creation de la liste
//Il me manque l'ajout avec tous les inputs (que j'eassaie de faire comme vous m'aviez dit)
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var inputValue2 = document.getElementById("myInput2").value;
    var inputValue3 = document.getElementById("myInput3").value;
    var inputValue4 = document.getElementById("myInput4").value;
    
    //input 1
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Vous devez écrire quelque chose!");
    } else {
      document.getElementById("myUl").appendChild(li);
    }
    document.getElementById("myInput").value = " ";

    //input 2
    var t = document.createTextNode(inputValue2);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Vous devez écrire quelque chose!");
    } else {
      document.getElementById("myUl").appendChild(li);
    }
    document.getElementById("myInput2").value = " ";

    //input 3
    var t = document.createTextNode(inputValue3);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Vous devez écrire quelque chose!");
    } else {
      document.getElementById("myUl").appendChild(li);
    }
    document.getElementById("myInput3").value = " ";

    //input 4
    var t = document.createTextNode(inputValue4);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Vous devez écrire quelque chose!");
    } else {
      document.getElementById("myUl").appendChild(li);
    }
    document.getElementById("myInput4").value = " ";

  

    // supprimer
    var span = document.createElement("span");
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

    //check
    var span = document.createElement("span");
    var txt = document.createTextNode("\u2713");
    span.className = "check";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < check.length; i++) {
      check[i].onclick = function() {
        var div = this.parentElement;
        div.style.textDecoration = "line-through"
      }
    }
  }
