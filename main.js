

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
    let computerChoice = getComputerChoice();

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
                console.log("\n######################\n");
                console.log("Computer Wins This Round!\n");
                console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
                break;
            case 1:
                playerScore++;
                console.log("\n######################\n");
                console.log("Player Wins This Round!\n");
                console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
                break;
            case 2:
                console.log("\n######################\n");
                console.log("This Round Is A Tie!\n");
                console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
                break;
        }
}

// Player and computer Scores
let playerScore = 0;
let computerScore = 0;

// Dom Selectors
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


