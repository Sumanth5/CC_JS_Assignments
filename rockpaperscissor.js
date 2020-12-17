const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock'|| userInput === 'paper'|| userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  }
  else{
    console.log('error');
  }
}; 

const getComputerChoice = () => {
 let randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors'
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){ 
    return('Game Tie');}
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'computer won';
    }
    else {return 'you won';}
  }
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'computer won';
    }
    else {return 'you won';}
}
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'computer won';
    }
    else {return 'you won';}
}
if(userChoice === 'bomb'){
    if(computerChoice === 'rock'){
      return 'you won';
    }
    else {return 'you won';}
}
};
const playGame = () => {
  const userChoice = getUserChoice('bombs');
  const computerChoice = getComputerChoice();
  console.log('Yours: ' + userChoice);
  console.log('Computer\'s: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();

