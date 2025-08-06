const moves = ['rock', 'paper', 'scissors'];
let total_ties = 0;
let total_wins = 0;
let total_loses = 0;

function rando() {
  const randomIndex = Math.floor(Math.random() * 3);
  return moves[randomIndex];
}

function playGame(playerMove) {
  const computerMove = rando();
  let result = '';

  if (playerMove === computerMove) {
    result = 'Tie';
    total_ties += 1;
  } else if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ) {
    result = 'You won';
    total_wins += 1;
  } else {
    result = 'You lose';
    total_loses += 1;
  }

  const resultElement = document.getElementById('gameResult');
  const scoreElement = document.getElementById('scoreBoard');

  resultElement.innerText = `You picked ${playerMove}. Computer picked ${computerMove}. ${result}.`;
  scoreElement.innerText = `Wins: ${total_wins} | Losses: ${total_loses} | Ties: ${total_ties}`;
}