//randomly generates rock, paper, or scissors
function getComputerChoice() {
    let value;
    let result;
    value = Math.random();
    value = value * 3;
    value = Math.floor(value);
    // value = value * 3;
    // value = value%3;
    switch(value) {
        case 0:
            result = "rock";
            break;
        case 1:
            result = "paper";
            break;
        case 2:
            result = "scissors";
            break;
    }
    return result;
}

// propmpts user for an input
// returns rock, paper, scissors, invalid, or "no action"
function getHumanChoice() {
    let input = prompt("Rock, paper, or scissors? SHOOT!");
    if (!input){
        return "no action"
    }
    //this switch is unneccessary
    switch(input.toLowerCase()){
        case "rock": 
            return "rock";
        case "paper": 
            return "paper";
        case "scissors": 
            return "scissors";
        default:
            return "invalid";
    }
}

// calculates the results of this round:
//   computerWin, playerWin, or tie
function playRound(humanChoice,computerChoice) {
    switch(humanChoice){
        case "rock":
            switch(computerChoice){
                case "rock":
                    return "tie";
                case "paper":
                    return "computerWin";
                case "scissors":
                    return "playerWin";
            }
            break;
        case "paper":
            switch(computerChoice){
                case "rock":
                    return "playerWin";
                case "paper":
                    return "tie";
                case "scissors":
                    return "computerWin";
            }
            break;
        case "scissors":
            switch(computerChoice){
                case "rock":
                    return "computerWin";
                case "paper":
                    return "playerWin";
                case "scissors":
                    return "tie";
            }
            break;
    }
}


function playGame() {
//<to do>
}

// welcome message and instructions
function welcome() {
    alert("Welcome! Let's play some rock, paper, scissors. You will compete against the computer. First to 5 points wins. Ready? Let's go.")
}
function currentScore(humanScore,computerScore) {
    alert("The current score: " + humanScore + " You, " + computerScore + " Computer.");
}


welcome();


let humanScore;
let computerScore;
let leader;

let playerInput;
let computerInput;
let roundResult;

while(1){
    humanScore = 0;
    computerScore = 0;
    leader = 0;
    while (leader < 5) {
        currentScore(humanScore,computerScore);
        playerInput = getHumanChoice();
        //no action will just loop back.
        if (playerInput === "invalid"){
            alert("invalid input");
        }
        computerInput = getComputerChoice();
        retry:
        roundResult = playRound(playerInput,computerInput);
        if (roundResult === "tie"){
            alert("tie.");
            //need to go 
        }
        else if (roundResult === "playerWin") {
            alert("You: " + playerInput + ", Computer: " + computerInput +". A win!");
            humanScore = humanScore + 1;
        }
        else if (roundResult === "computerWin") {
            alert("You: " + playerInput + ", Computer: " + computerInput +". A loss.")
            computerScore = computerScore + 1;
        }
        leader = Math.max(humanScore,computerScore);
    }
    if (humanScore === 5){
        alert("You Win!!!!!!!");
        alert("That was fun. Let's go again!");
    }
    else if(computerScore === 5){
        alert("Oh no. You lost...");
        alert("Try again?");
    }
}