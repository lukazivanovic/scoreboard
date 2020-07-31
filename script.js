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

/** CALCULATION MODAL */
// Get the modal
var modal = document.getElementById("throwModal");
// Get the button that opens the modal
var throwbtn = document.getElementById("throwBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
throwbtn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/** START MODAL */
var modal1 = document.getElementById("startModal");
var newbtn = document.getElementById("newgameBtn");
window.onload = function() {
  modal1.style.display = "block";
}
newbtn.onclick = function() {
  modal1.style.display = "block";
}
span.onclick = function() {
  modal1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}