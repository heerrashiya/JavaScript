function rollDice() {
  
    
    const dice = document.getElementById('dice');

    const diceRoll = Math.floor(Math.random() * 5) + 1;

    const diceNumbers = ['1', '2', '3', '4', '5', '6'];

    dice.textContent = diceNumbers[diceRoll - 1];
}
