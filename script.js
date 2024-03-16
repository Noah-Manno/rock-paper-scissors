choice = ["R", "P", "S"]
wins = []
losses = []
ties = []
rocks = []
papers = []
scissors = []
playAgain = true;

function userPrompt() {
let userChoice = prompt("enter R, P, or S for Rock Paper Scissors");
userChoice = userChoice.toUpperCase()
if (!choice.includes(userChoice)) {
alert("invalid input")
} 
return userChoice
}

function computerPlay() {
return choice[Math.floor(Math.random() * choice.length)]
};
    
function playGame(userChoice, computerChoice) {
if (userChoice == computerChoice) {
    alert("the result is a tie")
    ties.push("tie")
} 
if ((userChoice == "R" && computerChoice == "S") 
|| (userChoice == "P" && computerChoice == "R")
|| (userChoice == "S" && computerChoice == "P"))  {
    alert(`The computer chose ${computerChoice}, You Win!`)
    wins.push("win")
}
if (userChoice == "R" && computerChoice == "P" 
|| (userChoice == "P" && computerChoice == "S" )
|| (userChoice == "S" && computerChoice == "R" )) {
    alert(`The computer chose ${computerChoice}, You Lose!`)
    losses.push("loss")
} 
if (userChoice == "R") {rocks.push("rock")} 
if (userChoice == "S") {scissors.push("scissor")} 
if (userChoice == "P") {papers.push("paper")}
}

gamePlay()

function gamePlay() {
while (playAgain) {
const userChoice = userPrompt();
const computerChoice = computerPlay();
playGame (userChoice, computerChoice);
playAgain = confirm("would you like to play again?");
}



console.log (`you tied ${ties.length} many times`)
console.log (`you won ${wins.length} many times`)
console.log (`you lost ${losses.length} many times`)
console.log (`you chose ROCK ${rocks.length} many times`)
console.log (`you chose PAPER ${papers.length} many times`)
console.log (`you chose SCISSORS ${scissors.length} many times`)

document.getElementById('your-results1').innerHTML = "";
document.getElementById('your-results2').innerHTML = "";
document.getElementById('your-results3').innerHTML = "";
document.getElementById('your-results4').innerHTML = "";
document.getElementById('your-results5').innerHTML = "";
document.getElementById('your-results6').innerHTML = "";
document.getElementById('greeting').innerHTML = "";


let element = document.getElementById('your-results1')
const textNode1 = document.createTextNode(`you tied ${ties.length} times`);
element.appendChild(textNode1);
element = document.getElementById('your-results2')
const textNode2 = document.createTextNode(`you won ${wins.length} times`);
element.appendChild(textNode2);
element = document.getElementById('your-results3')
const textNode3 = document.createTextNode(`you lost ${losses.length} times`);
element.appendChild(textNode3);
element = document.getElementById('your-results4')
const textNode4 = document.createTextNode(`you chose ROCK ${rocks.length} times`);
element.appendChild(textNode4);
element = document.getElementById('your-results5')
const textNode5 = document.createTextNode(`you chose PAPER ${papers.length} times`);
element.appendChild(textNode5);
element = document.getElementById('your-results6')
const textNode6 = document.createTextNode(`you chose SCISSORS ${scissors.length} times`);
element.appendChild(textNode6);
element = document.getElementById('greeting')
const textNode7 = document.createTextNode(`Thanks for Playing!`);
element.appendChild(textNode7);
}



document.getElementById("continue").addEventListener("click", continuePlaying);

function continuePlaying () {
    playAgain = true;
    gamePlay()
}
