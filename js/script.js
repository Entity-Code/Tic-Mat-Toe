var playing = true;
var xTurn = true;
var playCount = 0;


// play again button (restart the game)
function resetGame(){
    for (var i = 1; i <= 3; i++) {
        var resetSquare = "a" + i;
        document.getElementById(resetSquare).innerHTML = " ";
        resetSquare = "b" + i;
        document.getElementById(resetSquare).innerHTML = " ";
        resetSquare = "c" + i;
        document.getElementById(resetSquare).innerHTML = " ";
    }
    playing = true;
    xTurn = true;
    document.getElementById("msg").innerHTML = "It's X's turn!";
    document.getElementById("resetButton").disabled = true;
}

//can see if there is any winner combination
function testWin(lastPlayerIsX){
   var pW; //possible winner
   if (lastPlayerIsX === true) {
      pW = "X";
   } else {
      pW = "O";
   }
   if (
      document.getElementById("a1").innerHTML === pW &&
      document.getElementById("a2").innerHTML === pW &&
      document.getElementById("a3").innerHTML === pW ||
      document.getElementById("b1").innerHTML === pW &&
      document.getElementById("b2").innerHTML === pW &&
      document.getElementById("b3").innerHTML === pW ||
      document.getElementById("c1").innerHTML === pW &&
      document.getElementById("c2").innerHTML === pW &&
      document.getElementById("c3").innerHTML === pW
      ||
      document.getElementById("a1").innerHTML === pW &&
      document.getElementById("b1").innerHTML === pW &&
      document.getElementById("c1").innerHTML === pW ||
      document.getElementById("a2").innerHTML === pW &&
      document.getElementById("b2").innerHTML === pW &&
      document.getElementById("c2").innerHTML === pW ||
      document.getElementById("a3").innerHTML === pW &&
      document.getElementById("b3").innerHTML === pW &&
      document.getElementById("c3").innerHTML === pW
      ||
      document.getElementById("a1").innerHTML === pW &&
      document.getElementById("b2").innerHTML === pW &&
      document.getElementById("c3").innerHTML === pW ||
      document.getElementById("a3").innerHTML === pW &&
      document.getElementById("b2").innerHTML === pW &&
      document.getElementById("c1").innerHTML === pW
      ) {

         document.getElementById("msg").innerHTML = pW + " is the winner!";
         playing = false;
         playCount = 0;
         document.getElementById("resetButton").disabled = false;
   }
}

function play(choosenSquare){
   if (document.getElementById(choosenSquare).innerHTML === " " && playing === true) {
      if (xTurn === true) {
         document.getElementById(choosenSquare).innerHTML = "X";
         document.getElementById("msg").innerHTML = "It's O's turn!";
         xTurn = false;
      } else {
         document.getElementById(choosenSquare).innerHTML = "O";
         document.getElementById("msg").innerHTML = "It's X's turn!";
         xTurn = true;
      }
      playCount++;
      testWin(!xTurn);
      if (playCount === 9) {
         document.getElementById("msg").innerHTML = "It's a Tie!";
         document.getElementById("resetButton").disabled = false;
         playCount = 0;
      }
   }
}
