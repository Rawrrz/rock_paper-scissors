

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
function playRound()
{
    let playerChoice = prompt("Enter choice: ");
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

function playGame()
{
    let playerScore = 0;
    let computerScore = 0;

    console.log("######################\n");
    console.log("WELCOME TO ROCK-PAPER-SCISSORS\n")
    console.log("######################\n\n");
    // Play 5 Rounds
    for(let i = 0; i < 5; i++)
    {
        switch(playRound())
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

    console.log("\n######################\n");
    console.log("GAME OVER! ")

    if(playerScore > computerScore)
    {
        console.log("Player has won the game!\n")
        console.log("######################\n");
    }
    else if(computerScore > playerScore)
    {
        console.log("Computer has won the game!\n")
        console.log("######################\n");
    }
    else
    {
        console.log("This game ended in a Tie!\n")
        console.log("######################\n");
    }

    console.log("Final Score\n");
    console.log("######################\n");
    console.log("Player Score: " + playerScore + " Computer Score: " + computerScore + "\n");
}


playGame();

