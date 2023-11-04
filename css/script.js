document.addEventListener("DOMContentLoaded", function () {
    const timeDisplay = document.getElementById("time-display");
    const startButton = document.getElementById("start");
    const resetButton = document.getElementById("reset");
    const customDurationInput = document.getElementById("custom-duration");
  
    let timer;
    let duration = 25 * 60; // Initial Pomodoro duration in seconds
    let running = false;
  
    function updateDisplay() {
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;
      timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
  
function startPomodoro() {
    if (!running) {
    running = true;
    startButton.textContent = "Pause";
    timer = setInterval(function () {
    if (duration > 0) {
    duration--;
    updateDisplay();
} else {
    clearInterval(timer);
    running = false;
    startButton.textContent = "Start";
    alert("Pomodoro session complete!");
}
    }, 1000);
} else {
    running = false;
    startButton.textContent = "Start";
    clearInterval(timer);
}
   }
  
function resetPomodoro() {
    clearInterval(timer);
    running = false;
    startButton.textContent = "Start";
    duration = parseInt(customDurationInput.value) * 60;
    updateDisplay();
  }
  
startButton.addEventListener("click", startPomodoro);
resetButton.addEventListener("click", resetPomodoro);
customDurationInput.addEventListener("change", function () {
    duration = parseInt(customDurationInput.value) * 60;
    updateDisplay();
});
  
updateDisplay();
});