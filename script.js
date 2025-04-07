console.log("Javascript is successfully connected!");

function getComputerChoise() {
    let compChoise = Math.floor(Math.random() * 3);
    if (compChoise === 0) {
        return "The computer chose rock!";
    } else if (compChoise === 1) {
        return "The computer chose paper!";
    } else if (compChoise === 2) {
        return "The computer chose scissors!";
    }
}

console.log(getComputerChoise());