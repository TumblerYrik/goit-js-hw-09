import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startButton = document.querySelector('[data-start]');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');

let countdownInterval;


function updateTimer(endTime) {
    function updateDisplay() {
        const timeLeft = endTime - Date.now();

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        daysValue.textContent = String(days).padStart(2, '0');
        hoursValue.textContent = String(hours).padStart(2, '0');
        minutesValue.textContent = String(minutes).padStart(2, '0');
        secondsValue.textContent = String(seconds).padStart(2, '0');
    }

    updateDisplay();
    countdownInterval = setInterval(updateDisplay, 1000);
}

startButton.addEventListener('click', () => {
    const selectedDate = flatpickr('#datetime-picker', {
        enableTime: true,
        time_24hr: true,
        minuteIncrement: 1,
        onClose(selectedDates) {
            if (!selectedDates[0]) return;

            const chosenDate = selectedDates[0];
            const now = new Date();

            if (chosenDate <= now) {
                window.alert('Please choose a date in the future');
                startButton.disabled = true;
            } else {
                startButton.disabled = false;
                updateTimer(chosenDate.getTime());
            }
        },
    });
});