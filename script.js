let countdownInterval;
let remainingSeconds = 0;

function startCountdown() {
    clearInterval(countdownInterval);

    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    remainingSeconds = hours * 3600 + minutes * 60 + seconds;

    function updateTimerDisplay() {
        const hrs = String(Math.floor(remainingSeconds / 3600)).padStart(2, '0');
        const mins = String(Math.floor((remainingSeconds % 3600) / 60)).padStart(2, '0');
        const secs = String(remainingSeconds % 60).padStart(2, '0');
        document.getElementById('timer').textContent = `${hrs}:${mins}:${secs}`;
    }

    updateTimerDisplay();
    countdownInterval = setInterval(() => {
        if (remainingSeconds <= 0) {
            clearInterval(countdownInterval);
            alert('Time is up!');
        } else {
            remainingSeconds--;
            updateTimerDisplay();
        }
    }, 1000);
}

function resetCountdown() {
    clearInterval(countdownInterval);
    remainingSeconds = 0;
    document.getElementById('hours').value = 0;
    document.getElementById('minutes').value = 0;
    document.getElementById('seconds').value = 0;
    document.getElementById('timer').textContent = "00:00:00";
}
document.getElementById('resetButton').addEventListener('click', resetCountdown);

function pauseCountdown() {
    clearInterval(countdownInterval);
}
document.getElementById('pauseButton').addEventListener('click', pauseCountdown);

function resumeCountdown() {
    clearInterval(countdownInterval);
    if (remainingSeconds > 0) {
        countdownInterval = setInterval(() => {
            if (remainingSeconds <= 0) {
                clearInterval(countdownInterval);
                alert('Time is up!');
            } else {
                remainingSeconds--;
                const hrs = String(Math.floor(remainingSeconds / 3600)).padStart(2, '0');
                const mins = String(Math.floor((remainingSeconds % 3600) / 60)).padStart(2, '0');
                const secs = String(remainingSeconds % 60).padStart(2, '0');
                document.getElementById('timer').textContent = `${hrs}:${mins}:${secs}`;
            }
        }, 1000);
    }
}
document.getElementById('resumeButton').addEventListener('click', resumeCountdown);