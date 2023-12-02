document.addEventListener('DOMContentLoaded', function () {
  const guessInput = document.getElementById('guessInput');
  const guessBtn = document.getElementById('guessBtn');
  const message = document.getElementById('message');
  let secretNumber;
  let attempts;

  initializeGame();

  function initializeGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 1000;
    message.textContent = '';
  }

  guessBtn.addEventListener('click', function () {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      message.textContent = 'Введіть число від 1 до 100.';
    } else {
      attempts++;
      checkGuess(userGuess);
    }
  });

  function checkGuess(guess) {
    if (guess === secretNumber) {
      message.textContent = `Вітаємо! Ви вгадали число ${secretNumber} за ${attempts} спроб!`;
      initializeGame();
    } else if (guess < secretNumber) {
      message.textContent = 'Спробуйте число більше.';
    } else {
      message.textContent = 'Спробуйте число меньше.';
    }
  }
});
