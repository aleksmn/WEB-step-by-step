const hoursInput = document.querySelector("#hours");
const minutesInput = document.querySelector("#minutes");
const secondsInput = document.querySelector("#seconds");
const startButton = document.querySelector(".button__start");
const stopButton = document.querySelector(".button__stop");
const timer = document.querySelector('.timer');

console.log(hoursInput, minutesInput, secondsInput)
console.log(startButton, stopButton, timer)


let interval;
let remainingTime;


function startTimer(event) {
    event.preventDefault();
    const hours = parseInt(hoursInput.value ? hoursInput.value : 0);
    const minutes = parseInt(minutesInput.value ? minutesInput.value : 0);
    const seconds = parseInt(secondsInput.value ? secondsInput.value : 0);
    remainingTime = hours * 3600 + minutes * 60 + seconds;

    interval = setInterval(updateTimer, 1000);
    hideElement(startButton);
    showElement(stopButton);

}

function stopTimer(event) {
    event.preventDefault();
    clearInterval(interval);

    hideElement(stopButton);
    showElement(startButton);

}

function hideElement(element) {
    element.classList.add('hide');
}

function showElement(element) {
    element.classList.remove('hide');
}

function updateTimer() {
    if (remainingTime >= 0) {
        const hours = Math.floor(remainingTime / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;

        hoursInput.value = hours.toString().padStart(2, '0');
        minutesInput.value = minutes.toString().padStart(2, '0');
        secondsInput.value = seconds.toString().padStart(2, '0');

        remainingTime--;
    } else {
        stopTimer();
    }
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);