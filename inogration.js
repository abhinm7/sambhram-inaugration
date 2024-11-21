document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.title');
    const button = document.getElementById('startButton');
    
    title.classList.add('fade-in');
    button.classList.add('fade-in');
});

document.getElementById('startButton').addEventListener('click', function() {
    // Hide the button
    this.style.display = 'none';

    // Show the timer container
    document.getElementById('timerContainer').style.display = 'flex';

    // Get timer element
    const timerElement = document.getElementById('timer');

    // Initial timer value
    let timeLeft = 5;

    // Set initial timer text
    timerElement.textContent = timeLeft;

    // Create timer interval
    const countdownInterval = setInterval(() => {
        // Decrease time
        timeLeft--;

        // Update timer display
        timerElement.textContent = timeLeft;

        // When timer reaches 0
        if (timeLeft <= 0) {
            // Clear the interval
            clearInterval(countdownInterval);

            // Redirect to another page
            window.location.href = 'http://shreedevisambhram.in.s3-website.ap-south-1.amazonaws.com/'; // Replace with your actual redirect page
        }
    }, 1000);
});