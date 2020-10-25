var playing = true;
var xTurn = true;
var playCount = 0;


// play again button (restart the game)
function resetGame(){
    for (var i = 1; i <= 3; i++) {
        var resetSquare = "a" + i;
        document.getElementById(resetSquare).innerHTML = "-";
        resetSquare = "b" + i;
        document.getElementById(resetSquare).innerHTML = "-";
        resetSquare = "c" + i;
        document.getElementById(resetSquare).innerHTML = "-";
    }
    playing = true;
    xTurn = true;
    document.getElementById("msg").innerHTML = "It's X's turn!";
    document.getElementById("resetButton").disabled = true;
}
