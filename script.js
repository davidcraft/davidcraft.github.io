const imageFiles = ['images/day1_1.jpg', 'images/day1_2.jpg']; // Update with the correct image file paths
const hintFiles = ['hints/hint1_1.txt', 'hints/hint1_2.txt']; // Update with the correct hint file paths

let currentDay = 0; // Start with day 1

const celebrityImage = document.getElementById('celebrity-image');
const hintText = document.getElementById('hint-text');
const guessInput = document.getElementById('guess-input');
const submitButton = document.getElementById('submit-button');
const nextHintButton = document.getElementById('next-hint-button');

function loadDay(day) {
    // Set the image source and hint text based on the current day
    celebrityImage.src = imageFiles[day];
    fetch(hintFiles[day])
        .then((response) => response.text())
        .then((hint) => {
            hintText.textContent = hint;
        });
}

submitButton.addEventListener('click', () => {
    const playerGuess = guessInput.value.trim().toLowerCase(); // Convert the guess to lowercase for case-insensitive comparison
    const correctGuess = "harry styles"; // The correct guess

    if (playerGuess === correctGuess) {
        alert('You Got It!');
    } else {
        alert('Sorry, that\'s not correct. Try again!');
    }
});

nextHintButton.addEventListener('click', () => {
    currentDay++;
    if (currentDay < imageFiles.length) {
        loadDay(currentDay);
    } else {
        alert('You have seen all hints for this day.');
    }
});

loadDay(currentDay);
