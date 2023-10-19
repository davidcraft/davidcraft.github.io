const imageFilenames = ['images/day1_1.jpg', 'images/day1_2.jpg']; // Update with the correct image file paths
const hintFilenames = ['hints/day1_1.txt', 'hints/day1_2.txt']; // Update with the correct hint file paths

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
    const playerGuess = guessInput.value.trim();
    // Add logic to check the guess and display feedback
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
