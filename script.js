/*get computer choice*/
function computerPlay(){
    let randomValues=['ROCK','PAPER','SCISSOR'];
    return randomValues[Math.floor(Math.random()*randomValues.length)];
}

/*variables for tracking computer&player scores*/
let computerWins = 0;
let playerWins = 0;
let playDraws = 0;

const playerChoice = document.querySelector('#playerchoice');
const computerChoice = document.querySelector('#computerchoice')
const result = document.querySelector('#result');
const playerScores = document.querySelector('#playerscores');
const computerScores = document.querySelector('#computerscores');

/*variables for computer&player choices */
const computerSelection = computerPlay();
let playerSelection = '';

/*starting game by clicking buttons*/
const weapons = document.getElementsByClassName('weapon');


Array.from(weapons).forEach((weapon)=>{
  weapon.addEventListener('click',(e)=>{
    playerSelection = weapon.id; playRound(computerSelection,playerSelection);   
    playerChoice.textContent= " "+playerSelection;
    computerChoice.textContent=" "+computerSelection;
    });
});


/*single-round play function*/
function playRound(computerSelection,playerSelection){
      if(
        (computerSelection==='ROCK'&& playerSelection==='SCISSOR')||
        (computerSelection==='SCISSOR'&& playerSelection==='PAPER')||
        (computerSelection==='PAPER'&& playerSelection==='ROCK')
      ) {computerWins++; computerScores.textContent="Computer: "+computerWins;
         result.textContent="You lose! Try again "}
      else if(
        (computerSelection==='ROCK'&& playerSelection==='PAPER')||
        (computerSelection==='PAPER'&& playerSelection==='SCISSOR')||
        (computerSelection==='SCISSOR'&& playerSelection==='ROCK')
      ) {playerWins++; playerScores.textContent="Player: "+playerWins;
        result.textContent="You win! Gratulations!"}
      else if (
        (computerSelection==='ROCK'&& playerSelection==='ROCK')||
        (computerSelection==='PAPER'&& playerSelection==='PAPER')||
        (computerSelection==='SCISSOR'&& playerSelection==='SCISSOR')
      ){playDraws++; result.textContent= "It's draw"}
      else {result.textContent="Check your choice please"};
}



/*multi-rounds play game and define of the winner
const playGame=()=>{
  for(let i=0;i<5;i++){
    const computerSelection = computerPlay();
    const playerSelection = prompt('Enter ROCK/PAPER/SCISSOR', "").toUpperCase();
    let result = playRound(computerSelection,playerSelection);
    console.log("Computer choice is " +computerSelection);
    console.log("Your choice is " +playerSelection);
    console.log(result);
    console.log("Computer wins: "+computerWins, "Your wins: "+playerWins, "Draws: "+playDraws);
  }
  console.log((playerWins>computerWins)?"You won!":
        (computerWins>playerWins)?"You lost:(":
        "It's draw");
}

playGame();
 */











  

