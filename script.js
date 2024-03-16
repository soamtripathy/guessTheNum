// Get the DOM elements and initialize the game
const input = document.querySelector("input"),
  guess = document.querySelector(".guess"),
  checkbutton = document.querySelector("button"),
  remainChances = document.querySelector(".chances");

// Set the focus on input field

input.focus();

let randomNum = Math.floor(Math.random() * 100);
chance = 10;


//Listen for the click event on the check button

checkbutton.addEventListener("click", () => {
  // Decrement the chance varibale on every click
  chance--;
  // Get the value from the input field
  let inputValue = input.value;
  // check if the input value is equal to random number
  if (inputValue == randomNum) {
    //update guesed number, disable input, check button text and color
    [guess.textContent, checkbutton.disabled] = ["Congratulations", true];
    [checkbutton.textContent, guess.style.color] = ["Replay", "#333"];
    // Check if input value is > random number and within 1-99 range.
  } else if (inputValue > randomNum && inputValue < 100) {
    // Update the guess text and remaining chances
    [guess.textContent, remainChances.textContent] = [
      "Your guess is high",
      chance,
    ];
    guess.style.color = "#333";
  } else if (inputValue < randomNum && inputValue > 0) {
    [guess.textContent, remainChances.textContent] = [
      "Your guess is low",
      chance,
    ];
    guess.style.color = "#333";
    // If the input value is not within the range of 1 to 99
  } else {
    // Update the guessed number text, color and remaining chances
    [guess.textContent, remainChances.textContent] = [
      "Your number is invalid",
      chance,
    ];
    guess.style.color = "#DE0611";
  }
  // check if the chance is zero
  if (chance == 0) {
    // Update check button, disable input  and clear input value
    // update guessed number text and color to indicate user loss
    [checkbutton.textContent, input.disabled, inputValue] = [
      "Replay",
      true,
      "",
    ];

    [guess.textContent, guess.style.color] = ["You lost the game", "#DE0611"];
    
  }
  if (chance <= 0){
    window.location.reload()
}
});
