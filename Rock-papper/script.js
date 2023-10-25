// Get the buttons and result elements
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const resultText = document.getElementById("resultText");

rockButton.addEventListener('click', ()=> playgame('ROCK'));
paperButton.addEventListener('click', ()=> playgame('PAPER'));
scissorsButton.addEventListener('click', ()=> playgame('SCISSORS'));

function playgame(playerChoice) {
    //generate random choice
    const choices=["ROCK","PAPER","SCISSORS"];
    const computerChoice=choices[Math.floor(Math.random()*3)];

    // update the displayrd choices
    playerText.textContent=`Player's Choice: ${playerChoice}`;
    computerChoice.textContent=`Computer's choice: ${computerChoice}`;

    // determine the result
    if(playerChoice ===computerChoice){
        resultText.textContent="It's A Tie!";
    }else if((playerChoice ==="ROCK"&& computerChoice ==="SCISSORS") ||
            (playerChoice === "PAPER" && computerChoice === "ROCK") ||
            (playerChoice === "SCISSORS" && computerChoice === "PAPER")
            ){
                resultText.textContent="Player wins!";
            }else {
                resultText.textContent="computer Wins!";
            }

}