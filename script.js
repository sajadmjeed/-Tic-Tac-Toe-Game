var player = "X";
var cells = document.querySelectorAll(".cell");

cells.forEach(function(cell) {
    cell.addEventListener("click", function() {
        if (cell.innerHTML == "") {
            cell.innerHTML = player;
            if (checkWin()) {
                alert(player + " wins!");
                reset();
            } else if (checkDraw()) {
                alert("It's a draw!");
                reset();
            } else {
                player = player == "X" ? "O" : "X";
            }
        }
    });
});

function checkWin() {
    var winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (var i = 0; i < winCombos.length; i++) {
        if (cells[winCombos[i][0]].innerHTML == player &&
            cells[winCombos[i][1]].innerHTML == player &&
            cells[winCombos[i][2]].innerHTML == player) {
            return true;
        }
    }

    return false;
}

function checkDraw() {
    for (var i = 0; i < cells.length; i++) {
        if (cells[i].innerHTML == "") {
            return false;
        }
    }

    return true;
}

function reset() {
    cells.forEach(function(cell) {
        cell.innerHTML = "";
    });
    player = "X";
}