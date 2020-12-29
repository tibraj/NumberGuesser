let min = 1, 
    max = 10, 
    winningNumber = getRandomNum(min, max),
    guessesLeft = 3;

const game = document.querySelector('#game'),
      mimNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

mimNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please Enter A Number Between ${min} and ${max}`, 'red');
    }
    if(guess === winningNumber){
        gameOver(true, `${winningNumber} is Correct!`);
    } else {
        guessesLeft -= 1;
        if(guessesLeft === 0){
            gameOver(false, `Game Over. The correct number was ${winningNumber}`);
        } else {
            guessInput.style.borderColor = 'red';
            guessInput.value = "";
            setMessage(`${guess} is not correct. You have ${guessesLeft} guesses left`, `red`);
        }
    }
})

function getRandomNum(min, max) {
    return Math.ceil(Math.random() * ((max - min) + 1));
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg
}

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg);
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

