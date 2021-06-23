const playerChoice = document.querySelector('#playerchoice');
const computerChoice = document.querySelector('#computerchoice')
const result = document.querySelector('#result');
const playerScores = document.querySelector('#playerscores');
const computerScores = document.querySelector('#computerscores');

/*variables for tracking computer&player scores*/
let computerWins = 0;
let playerWins = 0;
let playDraws = 0;

/*variables for computer&player choices */
let computerSelection = '';
let playerSelection = '';

/*get computer choice*/
function computerPlay(){
  computerSelection = Math.floor(Math.random() * Math.floor(3));

  switch (computerSelection) {
  case 0:
    return computerSelection = 'ROCK';
    break;
  case 1:
    return computerSelection = 'PAPER';
    break;
  case 2:
    return computerSelection = 'SCISSORS';
    break;
  }
};


/*starting game by clicking buttons*/
const weapons = document.getElementsByClassName('weapon');

Array.from(weapons).forEach((weapon)=>{

  weapon.addEventListener('click',(e)=>{
    playerSelection = weapon.id; playRound(computerSelection,playerSelection);   
    });
  
});

/*single-round play function*/
 function playRound(computerSelection,playerSelection){

  computerPlay();            
      if(
        (computerSelection==='ROCK'&& playerSelection==='SCISSOR')||
        (computerSelection==='SCISSOR'&& playerSelection==='PAPER')||
        (computerSelection==='PAPER'&& playerSelection==='ROCK')
      ) {computerWins++;
        
        }
         
      else if(
        (computerSelection==='ROCK'&& playerSelection==='PAPER')||
        (computerSelection==='PAPER'&& playerSelection==='SCISSOR')||
        (computerSelection==='SCISSOR'&& playerSelection==='ROCK')
      ) {playerWins++;
        } 
         
      else if(computerSelection===playerSelection){
         playDraws++;
         };

       playerScores.textContent= "player "+playerWins;
       computerScores.textContent= "comp " +computerWins;
       computerChoice.textContent= computerPlay(); 
       playerChoice.textContent= playerSelection;
       
      
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











  
