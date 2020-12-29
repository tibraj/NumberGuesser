let min = 1, 
    max = 10, 
    winningNumber = 2,
    guessesLeft = 3;

const game = document.getElementById('#game'),
      mimNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');