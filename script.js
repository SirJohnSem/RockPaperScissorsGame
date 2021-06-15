/*get computer choice*/
function computerPlay(){
    let randomValues=['ROCK','PAPER','SCISSOR'];
    return randomValues[Math.floor(Math.random()*randomValues.length)];
}

const computerSelection = computerPlay();
const playerSelection = prompt('Enter ROCK/PAPER/SCISSOR', "").toUpperCase();
let computerWins = 0;
let playerWins = 0;
let playDraws = 0;
let gameRounds = 0;

function game(){
 
/*single-round play function*/
    function playRound(computerSelection,playerSelection){
      if(
        (computerSelection==='ROCK'&& playerSelection==='SCISSOR')||
        (computerSelection==='SCISSOR'&& playerSelection==='PAPER')||
        (computerSelection==='PAPER'&& playerSelection==='ROCK')
      ) {computerWins++; return "You lose! Try again "}
      else if(
        (computerSelection==='ROCK'&& playerSelection==='PAPER')||
        (computerSelection==='PAPER'&& playerSelection==='SCISSOR')||
        (computerSelection==='SCISSOR'&& playerSelection==='ROCK')
      ) {playerWins++;  return "You win! Gratulations!"}
      else if (
        (computerSelection==='ROCK'&& playerSelection==='ROCK')||
        (computerSelection==='PAPER'&& playerSelection==='PAPER')||
        (computerSelection==='SCISSOR'&& playerSelection==='SCISSOR')
      ){playDraws++; return "It's draw"}
      else {return "Check your choice please"};
   
    }
 
 return playRound(computerSelection,playerSelection);
}

console.log("Computer choice is " +computerSelection);    
console.log("Your choice is " +playerSelection);
console.log(game());
console.log("Computer wins: "+computerWins, "Your wins: "+playerWins, "Draws: "+playDraws);









  

