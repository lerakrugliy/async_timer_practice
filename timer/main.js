const timer = document.querySelector(".timer");
const btnStart = document.querySelector(".start");
const btnStop = document.querySelector(".stop");
const btnReset = document.querySelector(".reset");

let seconds = 0;
let intervalId = null;

const formatTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const formattedMin = String(minutes).padStart(2, "0");
  const formattedSec = String(seconds).padStart(2, "0");
  return `${formattedMin} : ${formattedSec}`;
};

btnStart.addEventListener("click", () => {
  if (intervalId !== null) {
    return;
  }

  intervalId = setInterval(() => {
    seconds += 1;
    timer.textContent = formatTime(seconds);
  }, 1000);
});

btnStop.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

btnReset.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  seconds = 0;
  timer.textContent = formatTime(seconds);
});

const countDown = document.querySelector(".cound_down_timer");
const btnStartCountDown = document.querySelector(".start_count_down");

let minutesCountDown = 5;
let secondsCountDown = minutesCountDown * 60;
let coundDownIsActive = false;

const onClickStartCountDown = () => {
  if (coundDownIsActive) {
    return;
  }

  const id = setInterval(() => {
    secondsCountDown -= 1;
    countDown.textContent = formatTime(secondsCountDown);
    if (secondsCountDown <= 0) {
      clearInterval(id);
    }
  }, 1000);

  coundDownIsActive = true;
};

btnStartCountDown.addEventListener("click", onClickStartCountDown);

//hw

const countDownHw = document.querySelector(".cound_down_timer_hw");
const btnStartCountDownHw = document.querySelector(".start_count_down_hw");

let coundDownIsActiveHw = false;

const onClickStartCountDownHw = () => {
  if (coundDownIsActiveHw) {
    return;
  }

  coundDownIsActiveHw = true;
  btnStartCountDownHw.disabled = true;

  let milliseconds = 30000;

  const id = setInterval(() => {
    milliseconds -= 10;

    const seconds = Math.floor(milliseconds / 1000);
    const remainingMilliseconds = milliseconds % 1000;

    countDownHw.textContent =
      formatTime(seconds) +
      " : " +
      String(Math.floor(remainingMilliseconds / 10)).padStart(2, "0");

    if (seconds === 10 && remainingMilliseconds === 0) {
      countDownHw.style.color = "red";
    }

    if (milliseconds <= 0) {
      clearInterval(id);
      countDownHw.style.color = "black";
      setTimeout(() => {
        milliseconds = 30000;
        countDownHw.textContent = formatTime(30) + " : 00";
        coundDownIsActiveHw = false;
        btnStartCountDownHw.disabled = false;
      }, 2000);
    }
  }, 10);
};

btnStartCountDownHw.addEventListener("click", onClickStartCountDownHw);
