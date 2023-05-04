//declarations
let heads;
let msg;

//Heads and Tails buttons will trigger gameStart and pass its name as an argument
function gameStart(guess) {
    let randomNum = Math.random();
    console.log(randomNum);
    if (randomNum > 0.5) {
        heads = true;
    } else {
        heads = false;
    }
    console.log(`heads = ${heads}`);
    console.log(`guess = ${guess}`);
    if (guess === heads) {
        if (guess === true) {
            msg = "The coin came up Heads. you win!";
        } else {
            msg = "The coin came up Tails. you win!";
        }
    } else {
        if (guess === true) {
            msg = "The coin came up Tails. you lose.";
        } else {
            msg = "The coin came up Heads. you lose.";
        }
    }
    console.log(msg);
    results(msg);
}

//build feedback section
function results(msg) {
    let targetNode = document.getElementById("results");
    let feedback = document.createElement("feedback");
    feedback.innerText = `${msg}`;
    while (targetNode.hasChildNodes()) {
        targetNode.removeChild(targetNode.firstElementChild);
    }
    targetNode.appendChild(feedback);

    let targetForPlayAgain = document.getElementById("playAgain");
    let playAgain = document.createElement("playAgain");
    playAgain.innerText = "Choose again to play again.";
    while (targetForPlayAgain.hasChildNodes()) {
        targetForPlayAgain.removeChild(targetForPlayAgain.firstElementChild);
    }
    targetForPlayAgain.appendChild(playAgain);
}
