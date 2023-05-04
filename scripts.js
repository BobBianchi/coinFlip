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
    if (targetNode.hasChildNodes()) {
        targetNode.removeChild(targetNode.firstElementChild);
    }
    targetNode.appendChild(feedback);
}
