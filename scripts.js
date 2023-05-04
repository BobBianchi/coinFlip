//declarations
let heads;
let userWin;

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
            alert("The coin came up Heads. you win!");
            // console.log("The coin came up Heads. you win!");
        } else {
            alert("The coin came up Tails. you win!");
            // console.log("The coin came up Tails. you win!");
        }
    } else {
        if (guess === true) {
            alert("The coin came up Tails. you lose.");
            // console.log("The coin came up Tails. you lose.");
        } else {
            alert("The coin came up Heads. you lose.");
            // console.log("The coin came up Heads. you lose.");
        }
    }
}
