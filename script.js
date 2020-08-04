window.onload = function() {
  $('#startModal').modal('show');
}

function backToHomePage(){
  window.open("index.html","_self");
}

var pl1name = document.getElementById("pl1name");
var pl2name = document.getElementById("pl2name");
var pl1num = document.getElementById("pl1num");
var pl2num = document.getElementById("pl2num");

function startGame(){
  if(pl1name.value == "") document.getElementById("player1name").innerHTML = "Player 1";
  else document.getElementById("player1name").innerHTML = pl1name.value;
  if(pl2name.value == "") document.getElementById("player2name").innerHTML = "Player 2";
  else document.getElementById("player2name").innerHTML = pl2name.value;

  document.getElementById("player1number").innerHTML = pl1num.value;
  document.getElementById("player2number").innerHTML = pl2num.value;
  
  $('#startModal').modal('hide'); 
}

var player1num = eval(document.getElementById("player1number").innerHTML);
var player2num = eval(document.getElementById("player2number").innerHTML);
var infobox = document.getElementById("infobox");
var historyText = document.getElementById("historyText");

function showRes() {
  event.preventDefault();
  var battleResult = document.forms["calculator"]["display"].value;
  var calculate = eval(battleResult); 
  if(calculate > 0) player2num -= calculate;
  else if (calculate < 0) player1num += calculate;
  player1number.innerHTML = player1num; 
  player2number.innerHTML = player2num; 
  infobox.innerHTML = "Previous move: " + calculate;
  historyText.innerHTML += "[time], " + document.getElementById("player1name").innerHTML + " attacks " + document.getElementById("player2name").innerHTML + ", " + calculate + " damage, " + "(" + battleResult + ") <br>";
  $('#battleModal').modal('hide');
  battleResult = "";
}



