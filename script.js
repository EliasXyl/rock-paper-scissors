function getComputerChoice() {
    // Generates a random number from 0 to 2
    let computerAnswer = Math.floor(Math.random() * 3);
    if (computerAnswer === 0) {
        return "rock";
    } else if (computerAnswer === 1) {
        return "paper";
    } else if (computerAnswer === 2) {
        return "scissors";
    }
}


function getHumanChoice() {
    let humanAnswer = prompt("rock, paper or scissors? Pick one!");
    return humanAnswer;
}


let humanScore = 0;
let computerScore = 0;
let totalRounds = 0;


function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        alert(`Computer chose: ${computerChoice}!\nIt's a tie!\nScore - You: ${humanScore}, Computer: ${computerScore}`);
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        alert(`Computer chose: ${computerChoice}.\nYou win!\nScore - You: ${humanScore}, Computer: ${computerScore}`);
        return "You win!";
    } else {
        computerScore++;
        alert(`Computer chose: ${computerChoice}.\nYou lose!\nScore - You: ${humanScore}, Computer: ${computerScore}`);
        return "You lose!";
    }
}

while (totalRounds < 5) {
    const humanSelection = getHumanChoice().toLowerCase();
    const computerSelection = getComputerChoice();

    const result = playRound(humanSelection, computerSelection);
    console.log(`Round ${totalRounds + 1}:`);
    console.log(`You chose: ${humanSelection}`);
    console.log(`Computer chose: ${computerSelection}`);
    console.log(result);
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    

    totalRounds++;
}

console.log("Game over!")
if (humanScore > computerScore) {
    alert("🏆 You won the game!");
    console.log("🏆 You won the game!");
} else if (humanScore < computerScore) {
    alert("💻 You lost the game. Better luck next time!");
    console.log("💻Computer won the game. Better luck next time!");
} else {
    alert("🤝 It's a tie game!");
    console.log("🤝 It's a tie game!");
}



