const cells=document.querySelectorAll('.cell');

let currentPlayer='X';
let gameBoard=['','','','','','','','',''];

// Add click event listeners
for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    cell.addEventListener('click', () => makeMove(cell, i));
}

// Function To make a move

function makeMove(cell,index){
    if(cell.textContent ==='' &&!checkWinner()){
        cell.textContent=currentPlayer;
        gameBoard[index]=currentPlayer;

        if(checkWinner()){
            alert(`Player ${currentPlayer} Wins`);
        }else if(!gameBoard.includes('')){
            alert("It's Draw!");
        }else{
            currentPlayer=currentPlayer==='X'?'0':'X';
        }
    }
}


// function to check for Winner
function checkWinner(){
    const winningCombos=[[0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
    ];

    for(const combo of winningCombos){
        const [a,b,c]=combo;
        if(gameBoard[a] &&gameBoard[a] ===gameBoard[b] &&gameBoard[b] ===gameBoard[c]){
           return true; 
        }
        return false;
    }
}

// new button
document.getElementById("resetButton").addEventListener("click",resetGame);

function resetGame(){
    cells.forEach((cell) => {
        cell.textContent='';
    })

    gameBoard=['','','','','','','','',''];
    currentPlayer='X';
}