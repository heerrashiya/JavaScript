function rollDice() {
  
    
    const dice = document.getElementById('dice');

    const diceRoll = Math.floor(Math.random() * 6) + 1;

    const diceNumbers = ['1', '2', '3', '4', '5', '6'];

    dice.textContent = diceNumbers[diceRoll - 1];
}
document.getElementById('rollButton').addEventListener('click', rollDice);