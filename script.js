console.log("Javascript is successfully connected!");

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    if (compChoice === 0) {
        return "The computer chose rock!";
    } else if (compChoice === 1) {
        return "The computer chose paper!";
    } else if (compChoice === 2) {
        return "The computer chose scissors!";
    }
}

console.log(getComputerChoice());