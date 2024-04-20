

// Returns Either rock, paper or scissors
function getComputerChoice()
{
    let val = Math.floor(Math.random() * 3);

    if(val == 0)
        return "rock";
    else if(val == 1)
        return "paper";
    else
        return "scissors";
}

// Return 0 == Lose, Return 1 == Win Return 2 == Tie
function playRound(playerChoice)
{
    computerChoice = getComputerChoice();

    switch(playerChoice)
    {
        case computerChoice:
                return 2;
            break;

        case "rock":
            if(computerChoice == "paper")
                return 0;
            else if(computerChoice == "scissors")
                return 1;
            break;
        
        case "paper":
            if(computerChoice == "scissors")
                return 0;
            else if(computerChoice == "rock")
                return 1;
            break;
        
        case "scissors":
            if(computerChoice == "rock")
                return 0;
            else if(computerChoice == "paper")
                return 1;
            break;
    }
}

function playGame(playerChoice)
{
        let gameResult = playRound(playerChoice)

        switch(gameResult)
        {
            case 0:
                computerScore++;
                face.textContent = "^o^";
                output.textContent = "I picked " + computerChoice + " I win!"
                break;
            case 1:
                playerScore++;
                face.textContent = "0_0";
                output.textContent = "I picked " + computerChoice + " I lose!"
                break;
            case 2:
                console.log("\n######################\n");
                face.textContent = "-_-";
                output.textContent = "I picked " + computerChoice + " It's a freakin tie!"
                break;
        }
        score.textContent = "Player " + playerScore + " || AI " + computerScore;

        checkScore(playerScore, computerScore);
}

function checkScore(playerScore, computerChoice)
{
    if(playerScore == 5)
    {
        face.textContent = "0w0";
        output.textContent = "You made it to a score of 5 you win the game!";
        resetScores();
    }
    else if(computerScore == 5)
    {
        face.textContent = "0w0";
        output.textContent = "I made it to a score of 5 I win the game!";
        resetScores();
    }
}

function resetScores() 
{
    // Reset scores to 0
    playerScore = 0;
    computerScore = 0;

    // Update score on DOM
    score.textContent = "Player " + playerScore + " || AI " + computerScore;
}

// Player and computer Scores
let playerScore = 0;
let computerScore = 0;

let computerChoice;

// Dom Selectors
let score = document.querySelector('.score');
let face = document.querySelector('.face');
let output = document.querySelector('.output');
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorButton = document.querySelector('.scissors');

// Rock button logic
rockButton.addEventListener("click", () => 
{
    playGame("rock");
})

// Paper button logic
paperButton.addEventListener("click", () => 
{
    playGame("paper");
})

// Scissors button logic
scissorButton.addEventListener("click", () => 
{
    playGame("scissors");
})


