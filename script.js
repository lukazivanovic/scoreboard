function backToHomePage(){
  window.open("index.html","_self");
}

function showRes(){
  var battleResult = document.getElementById("display").value;
  var calculate = eval(battleResult);
  document.getElementById("result").innerHTML = calculate;
}

function startGame(){
  var pl1name = document.getElementById("pl1name").value;
  var pl2name = document.getElementById("pl2name").value;
  var pl1num = document.getElementById("pl1num").value;
  var pl2num = document.getElementById("pl2num").value;
  document.getElementById("player1name").innerHTML = pl1name;
  document.getElementById("player2name").innerHTML = pl2name;
  document.getElementById("player1number").innerHTML = pl1num;
  document.getElementById("player2number").innerHTML = pl2num;
  var pl1nameGame = document.getElementById("pl1name").value;
  var pl2nameGame = document.getElementById("pl2name").value;
  var pl1numGame = document.getElementById("player1num").value;
  var pl2numGame = document.getElementById("player2num").value;
  modal1.style.display = "none";
}

window.onload = function() {
  $('#startModal').modal('show');
}
