
function subscribe_button() {
    const buttonElement = document.querySelector('.js-subscribe-button');

    if (buttonElement.innerText === 'SUBSCRIBE') {
        buttonElement.innerHTML = 'SUBSCRIBED';
      } else {
        buttonElement.innerHTML = 'SUBSCRIBE';
      }
}


const moves = ['rock', 'paper', 'scissors'];

// Загружаем счет из localStorage или создаем новый
let score = JSON.parse(localStorage.getItem('score')) || {
  total_ties: 0,
  total_wins: 0,
  total_loses: 0,
  reset_scores: 0

};


function rando() {
  const randomIndex = Math.floor(Math.random() * 3);
  return moves[randomIndex];
}
function playGame(playerMove) {
  const computerMove = rando();
  let result = '';
  if (playerMove === 'resetscores') {
    score.total_ties = 0
    score.total_loses = 0
    score.total_wins = 0
  }
  else if (playerMove === computerMove) {
    result = 'Tie';
    score.total_ties += 1;
  } else if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ) {
    result = 'You won';
    score.total_wins += 1;
  } else {
    result = 'You lose';
    score.total_loses += 1;
  }

  // Сохраняем счет
  localStorage.setItem('score', JSON.stringify(score));

  // О wовляем HTML
  const resultElement = document.getElementById('gameResult');
  const scoreElement = document.getElementById('scoreBoard');

  resultElement.innerText = `You picked ${playerMove}. Computer picked ${computerMove}. ${result}.`;
  scoreElement.innerText = `Wins: ${score.total_wins} | Losses: ${score.total_loses} | Ties: ${score.total_ties}`;
}

// Чтобы при загрузке сразу показать счет
window.onload = function() {
  const scoreElement = document.getElementById('scoreBoard');
  scoreElement.innerText = `Wins: ${score.total_wins} | Losses: ${score.total_loses} | Ties: ${score.total_ties}`;
};


function shipcalc() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value); // convert to number

  if (cost < 40) {
    cost = cost + 10;
  }

  document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
}


function handleCostKeydown(event) {
  console.log(event)
  if (event.key === 'Enter' || event.key === ' '){
    shipcalc()
  }
}

function heads_tails(move) {
  let result = ''
  if (move === 'heads') {
    result = 'heads'
  }
  else {
    result = 'tails'
  }
    const resultEl = document.getElementById('result_of_two');
  resultEl.innerText = `You picked: ${move}.`;

}

function get_name() {
  const inputElement = document.querySelector('.js-name-input');
  const resultEl = document.querySelector('.js-output');
  
  const name = inputElement.value;
  resultEl.innerText = `Your name: ${name}`;
}

function handleCostKeydown2(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    get_name();
  }
}
