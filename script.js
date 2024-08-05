const progressBar = document.getElementById('progress-fill');
const percentageText = document.querySelector('.percentage');
const remainingDaysText = document.createElement('p'); // Create a new element for remaining days
const totalDays = 366;
remainingDaysText.classList.add('remaining-days'); // Add a class for styling
document.querySelector('.progress-bar').appendChild(remainingDaysText); // Append it to the progress bar

function updateProgressBar() {
  const today = new Date();
  const startDate = new Date(today.getFullYear(), 0, 1);
  const daysPassed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
  const totalDays = 366; // Correct for leap year 2024
  const percentage = (daysPassed / totalDays) * 100;

  progressBar.style.width = percentage + '%';
  percentageText.textContent = percentage.toFixed(1) + '%';

  // Calculate remaining days percentage
  const remainingDaysPercentage = 100 - percentage;
  remainingDaysText.textContent = 'Remaining: ' + remainingDaysPercentage.toFixed(1) + '%';
}

updateProgressBar(); // Initial update
setInterval(updateProgressBar, 1000); // Update every second

const progressBarCovered = document.querySelector('.progress-bar-covered');
const percentageCovered = document.querySelector('#percentage');

function updatePercentagePosition() {
  // Calculate the width of the progress bar
  const progressBarWidth = progressBarCovered.offsetWidth;

  // Set the left property of the percentage element
  percentageCovered.style.left = `${progressBarWidth - 40}px`;
}function calculatePercentage() {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const percentage = (currentDay / totalDays) * 100;

  // Update the width of the container1
  document.getElementById('container1').style.width = percentage + '%';
}

// Call the function initially
calculatePercentage();

// Update the percentage every second (adjust as needed)
setInterval(calculatePercentage, 1000);

// Update the percentage position whenever the progress bar expands
progressBarCovered.addEventListener('transitionend', updatePercentagePosition);