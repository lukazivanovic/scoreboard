window.onbeforeunload = function(event) {
  event.returnValue = "This will stop the current game.";
};

var pl1name = document.getElementById("pl1name");
var pl2name = document.getElementById("pl2name");
var pl1num = document.getElementById("pl1num");
var pl2num = document.getElementById("pl2num");

var infobox = document.getElementById("infobox");
var historyText = document.getElementById("historyText");

/** START MODAL */
function startGame(){
  var player1name = document.getElementById("player1name");
  var player2name = document.getElementById("player2name");
  
  if(pl1name.value == "") player1name.innerHTML = "Player 1";
  else player1name.innerHTML = pl1name.value;
  if(pl2name.value == "") player2name.innerHTML = "Player 2";
  else player2name.innerHTML = pl2name.value;
  
  var player1number = document.getElementById("player1number");
  var player2number = document.getElementById("player2number");
  
  player1number.innerHTML = pl1num.value;
  player2number.innerHTML = pl2num.value;
  
  historyText.innerHTML = "Game started! Player 1 name (left): " + player1name.innerHTML + ", Player 1 points: " + player1number.innerHTML + " / Player 2 (right) name: " + player2name.innerHTML + ", Player 2 points: " + player2number.innerHTML + "<br>";
  infobox.innerHTML = "Game started! Player 1 name (left): " + player1name.innerHTML + ", Player 1 points: " + player1number.innerHTML + " / Player 2 (right) name: " + player2name.innerHTML + ", Player 2 points: " + player2number.innerHTML + "<br>";
  
  $('#startModal').modal('hide');
}

/** THROW MODAL */
function throwCoin(){
  var coinValue = Math.floor(Math.random() * 2);
  if (coinValue == 0) {
    document.getElementById("coinResult").innerHTML = "heads";
  } else {
    document.getElementById("coinResult").innerHTML = "tails";
  }
  historyText.innerHTML += "Coin throw: " + document.getElementById("coinResult").innerHTML + "<br>";
  infobox.innerHTML = "Previous move: Coin throw: " + document.getElementById("coinResult").innerHTML + "<br>";
}

function throwDie(){
  var dieValue = Math.floor(Math.random()*6) + 1;
  document.getElementById("dieResult").innerHTML = dieValue;
  historyText.innerHTML += "Roll a die: " + dieValue + "<br>";
  infobox.innerHTML = "Previous move: Roll a die: " + dieValue + "<br>";
}

/** CUSTOM MODAL TITLES */
function modalText1(){
  document.getElementById("exampleModalLabel1").innerHTML = player1name.innerHTML + ": add or remove points...";
}
function modalText2(){
  document.getElementById("exampleModalLabel2").innerHTML = player2name.innerHTML + ": add or remove points...";
}
function modalText12(){
  document.getElementById("exampleModalLabel12").innerHTML = player1name.innerHTML + " attacking " + player2name.innerHTML + "...";
}
function modalText21(){
  document.getElementById("exampleModalLabel21").innerHTML = player2name.innerHTML + " attacking " + player1name.innerHTML + "...";
}

/** CALCULATORS */
function showRes1() {
  event.preventDefault();
  var display1 = document.forms["calculator1"]["display1"];
  var battleResult1 = display1.value;
  var calculate1 = eval(battleResult1); 
  if(calculate1 < 0) {
    player1number.innerHTML = eval(player1number.innerHTML) + calculate1;
    historyText.innerHTML += "[" + player1name.innerHTML + "] " + calculate1 + ", [" + player1name.innerHTML + ": " + player1number.innerHTML + " / " + player2name.innerHTML + ": " + player2number.innerHTML + "] <br>";
    
    infobox.innerHTML = "Previous move: [" + player1name.innerHTML + "] " + calculate1 + ", [" + player1name.innerHTML + ": " + player1number.innerHTML + " / " + player2name.innerHTML + ": " + player2number.innerHTML + "] <br>";
  }
  else if (calculate1 > 0) {
    player1number.innerHTML = eval(player1number.innerHTML) + calculate1;
    historyText.innerHTML += "[" + player1name.innerHTML + "] +" + calculate1 + ", [" + player1name.innerHTML + ": " + player1number.innerHTML + " / " + player2name.innerHTML + ": " + player2number.innerHTML + "] <br>";
    
    infobox.innerHTML = "Previous move: [" + player1name.innerHTML + "] +" + calculate1 + ", [" + player1name.innerHTML + ": " + player1number.innerHTML + " / " + player2name.innerHTML + ": " + player2number.innerHTML + "] <br>";
  }
  $('#att1Modal').modal('hide');
  battleResult1 = "";
  display1.value = "";
  checkWinConditions();
}

function showRes2() {
  event.preventDefault();
  var display2 = document.forms["calculator2"]["display2"];
  var battleResult2 = display2.value;
  var calculate2 = eval(battleResult2); 
  if(calculate2 < 0) {
    player2number.innerHTML = eval(player2number.innerHTML) + calculate2;
    historyText.innerHTML += "[" + player2name.innerHTML + "] " + calculate2 + ", [" + player1name.innerHTML + ": " + player1number.innerHTML + " / " + player2name.innerHTML + ": " + player2number.innerHTML + "] <br>";
    
    infobox.innerHTML = "Previous move: [" + player2name.innerHTML + "] " + calculate2 + ", [" + player1name.innerHTML + ": " + player1number.innerHTML + " / " + player2name.innerHTML + ": " + player2number.innerHTML + "] <br>";
  }
  else if (calculate2 > 0) {
    player2number.innerHTML = eval(player2number.innerHTML) + calculate2;
    historyText.innerHTML += "[" + player2name.innerHTML + "] +" + calculate2 + ", [" + player1name.innerHTML + ": " + player1number.innerHTML + " / " + player2name.innerHTML + ": " + player2number.innerHTML + "] <br>";
    
    infobox.innerHTML = "Previous move: [" + player2name.innerHTML + "] +" + calculate2 + ", [" + player1name.innerHTML + ": " + player1number.innerHTML + " / " + player2name.innerHTML + ": " + player2number.innerHTML + "] <br>";
  }
  $('#att2Modal').modal('hide');
  battleResult2 = "";
  display2.value = "";
  checkWinConditions();
}

function showRes12() {
  event.preventDefault();
  var display12 = document.forms["calculator12"]["display12"];
  var battleResult12 = display12.value;
  var calculate12 = eval(battleResult12); 
  if(calculate12 > 0) {
    player2number.innerHTML = eval((player2number.innerHTML) - calculate12);
    historyText.innerHTML += player1name.innerHTML + " -> " + player2name.innerHTML + ", " + player2name.innerHTML + " -" + calculate12 +  " (" + battleResult12 + "), [" + player1name.innerHTML + ": " + player1number.innerHTML + " / " + player2name.innerHTML + ": " + player2number.innerHTML + "] <br>";
    
    infobox.innerHTML = "Previous move: " + player1name.innerHTML + " -> " + player2name.innerHTML + ", " + player2name.innerHTML + " -" + calculate12 +  " (" + battleResult12 + "), [" + player1name.innerHTML + ": " + player1number.innerHTML + " / " + player2name.innerHTML + ": " + player2number.innerHTML + "] <br>";
  }
  else if (calculate12 < 0) {
    player1number.innerHTML = eval((player1number.innerHTML) + calculate12);
    historyText.innerHTML += player1name.innerHTML + " -> " + player2name.innerHTML + ", " + player1name.innerHTML + " " + calculate12 +  " (" + battleResult12 + "), [" + player1name.innerHTML + ": " + player1number.innerHTML + " / " + player2name.innerHTML + ": " + player2number.innerHTML + "] <br>";
    
    infobox.innerHTML = "Previous move: " + player1name.innerHTML + " -> " + player2name.innerHTML + ", " + player1name.innerHTML + " " + calculate12 +  " (" + battleResult12 + "), [" + player1name.innerHTML + ": " + player1number.innerHTML + " / " + player2name.innerHTML + ": " + player2number.innerHTML + "] <br>";
  }
  $('#att12Modal').modal('hide');
  battleResult12 = "";
  display12.value = "";
  checkWinConditions();
}

function showRes21() {
  event.preventDefault();
  var display21 = document.forms["calculator21"]["display21"];
  var battleResult21 = display21.value;
  var calculate21 = eval(battleResult21); 
  if(calculate21 > 0) {
    player1number.innerHTML = eval((player1number.innerHTML) - calculate21);
    historyText.innerHTML += player2name.innerHTML + " -> " + player1name.innerHTML + ", " + player1name.innerHTML + " -" + calculate21 +  " (" + battleResult21 + "), [" + player1name.innerHTML + ": " + player1number.innerHTML + " / " + player2name.innerHTML + ": " + player2number.innerHTML + "] <br>";
    
    infobox.innerHTML = "Previous move: " + player2name.innerHTML + " -> " + player1name.innerHTML + ", " + player1name.innerHTML + " -" + calculate21 +  " (" + battleResult21 + "), [" + player1name.innerHTML + ": " + player1number.innerHTML + " / " + player2name.innerHTML + ": " + player2number.innerHTML + "] <br>";
  }
  else if (calculate21 < 0) {
    player2number.innerHTML = eval((player2number.innerHTML) + calculate21);
    historyText.innerHTML += player2name.innerHTML + " -> " + player1name.innerHTML + ", " + player2name.innerHTML + " " + calculate21 +  " (" + battleResult21 + "), [" + player1name.innerHTML + ": " + player1number.innerHTML + " / " + player2name.innerHTML + ": " + player2number.innerHTML + "] <br>";
    
    infobox.innerHTML = "Previous move: " + player2name.innerHTML + " -> " + player1name.innerHTML + ", " + player2name.innerHTML + " " + calculate21 +  " (" + battleResult21 + "), [" + player1name.innerHTML + ": " + player1number.innerHTML + " / " + player2name.innerHTML + ": " + player2number.innerHTML + "] <br>";
  }
  $('#att21Modal').modal('hide');
  battleResult21 = "";
  display21.value = "";
  checkWinConditions();
}

/** END OF GAME */
function checkWinConditions(){
  if(eval(player1number.innerHTML) <= 0){
    document.getElementById("exampleModalLabelHis").innerHTML = player2name.innerHTML + " wins! P1:" + player1number.innerHTML + "/P2:" + player2number.innerHTML;
    historyText.innerHTML += player2name.innerHTML + " wins! P1:" + player1number.innerHTML + "/P2:" + player2number.innerHTML;
    $('#historyModal').modal('show');
  }
  else if(eval(player2number.innerHTML) <= 0){
    document.getElementById("exampleModalLabelHis").innerHTML = player1name.innerHTML + " wins! P1:" + player1number.innerHTML + "/P2:" + player2number.innerHTML;
    historyText.innerHTML += player1name.innerHTML + " wins! P1:" + player1number.innerHTML + "/P2:" + player2number.innerHTML;
    $('#historyModal').modal('show');
  }
}
