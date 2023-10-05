let timer;
let totalSeconds;
let isPaused = false;

function startTimer() {
    if (!isPaused) {
        const hours = parseInt(document.getElementById('hoursInput').value) || 0;
        const minutes = parseInt(document.getElementById('minutesInput').value) || 0;
        const seconds = parseInt(document.getElementById('secondsInput').value) || 0;

        totalSeconds = hours * 3600 + minutes * 60 + seconds;

        if (totalSeconds <= 0) {
            alert("Please enter a valid duration.");
            return;
        }
    }

    timer = setInterval(updateTimer, 1000);
    disableInputs(true);
    isPaused = false;
}

function pauseTimer() {
    clearInterval(timer);
    isPaused = true;
}

function resetTimer() {
    clearInterval(timer);
    document.getElementById('timer').textContent = '00:00:00';
    disableInputs(false);
    isPaused = false;
}

function updateTimer() {
    if (totalSeconds <= 0) {
        clearInterval(timer);
        alert('Time is up!');
        resetTimer();
        return;
    }

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    document.getElementById('timer').textContent = formattedTime;

    totalSeconds--;
}

function pad(num) {
    return num.toString().padStart(2, '0');
}

function disableInputs(disabled) {
    document.getElementById('hoursInput').disabled = disabled;
    document.getElementById('minutesInput').disabled = disabled;
    document.getElementById('secondsInput').disabled = disabled;
}
