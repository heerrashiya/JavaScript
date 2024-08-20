function rollDice() {
    // Generate a random number between 1 and 6
    const diceRoll = Math.floor(Math.random() * 6) + 1;

    // Get the dice element
    const dice = document.getElementById('dice');

    // Update the dice element based on the roll
    switch(diceRoll) {
        case 1:
            dice.textContent = '⚀';
            break;
        case 2:
            dice.textContent = '⚁';
            break;
        case 3:
            dice.textContent = '⚂';
            break;
        case 4:
            dice.textContent = '⚃';
            break;
        case 5:
            dice.textContent = '⚄';
            break;
        case 6:
            dice.textContent = '⚅';
            break;
    }
}
