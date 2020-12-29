let min = 1, 
    max = 10, 
    winningNumber = 2,
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
        guessInput.disabled = true;
        guessInput.style.borderColor = 'green';
        setMessage(`${winningNumber} is Correct!`, 'green');
    } else {
        guessesLeft -= 1;
        if(guessesLeft === 0){
            guessInput.disabled = true;
            guessInput.style.borderColor = 'red';
            setMessage(`Game Over. The correct number was ${winningNumber}`, 'red');
        } else {

        }
    }
})

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg
}
