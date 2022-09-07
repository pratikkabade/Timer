// DECLARATIONS
const playSound = () => {
  const audio = new Audio("./src/sound.mp3");
  audio.volume = 0.4;
  audio.loop = true;
  audio.play();
};
let root = document.documentElement;
const progressBar = document.querySelector("#ProgressBar");

var seconds,
  countDiv = document.getElementById("countdown"),
  countdown;

// BASIC FUNCTIONS
function clearButton() {
  document.getElementById("workTimer").style.boxShadow = "none";
  document.getElementById("workTimer").style.filter = "brightness(1)";
  document.getElementById("workTimer").style.transform = "scale(1)";

  document.getElementById("breakTimer").style.boxShadow = "none";
  document.getElementById("breakTimer").style.filter = "brightness(1)";
  document.getElementById("breakTimer").style.transform = "scale(1)";

  document.getElementById("customTimer").style.boxShadow = "none";
  document.getElementById("customTimer").style.filter = "brightness(1)";
  document.getElementById("customTimer").style.transform = "scale(1)";
}
function restart() {
  window.location.reload();
}
function workColors() {
  document.getElementById("countdown").innerHTML = "Work";
  document.getElementById("countdown").style.color = "var(--red)";

  document.getElementById("workTimer").style.boxShadow = "var(--shadowsmall)";
  document.getElementById("workTimer").style.filter = "brightness(1.5)";
  document.getElementById("workTimer").style.scale = "1.1";
  document.getElementById("workTimer").style.borderRadius = "10px";
}
function breakColors() {
  document.getElementById("countdown").innerHTML = "Break";
  document.getElementById("countdown").style.color = "var(--green)";

  document.getElementById("breakTimer").style.boxShadow = "var(--shadowsmall)";
  document.getElementById("breakTimer").style.filter = "brightness(1.5)";
  document.getElementById("breakTimer").style.scale = "1.1";
  document.getElementById("breakTimer").style.borderRadius = "10px";
}
function customColors() {
  document.getElementById("countdown").innerHTML = "On!";
  document.getElementById("countdown").style.color = "var(--accentdark)";

  document.getElementById("customTimer").style.boxShadow = "var(--shadowsmall)";
  document.getElementById("customTimer").style.filter = "brightness(1.5)";
  document.getElementById("customTimer").style.scale = "1.1";
  document.getElementById("customTimer").style.borderRadius = "10px";
}

// ADVANCED FUNCTIONS
function workTimer() {
  seconds = setSeconds = 3120;
  clearButton();
  workColors();

  countdown = setInterval(function () {
    "use strict";
    secondPass();
  }, 1000);
}

function breakTimer() {
  seconds = setSeconds = 1020;
  clearButton();
  breakColors();

  countdown = setInterval(function () {
    "use strict";
    secondPass();
  }, 1000);
}

function customTimer() {
  var seconds,
    countDiv = document.getElementById("countdown"),
    secondPass,
    countdown;

  seconds = setSeconds = prompt("enter time by seconds");
  countdown = setInterval(function () {
    "use strict";

    secondPass();
  }, 1000);
  customColors();

  function secondPass() {
    "use strict";

    var percentAge = (seconds / setSeconds) * 100;
    progressBar.style.width = percentAge + "%";

    var minute = Math.floor(seconds / 60),
      remSeconds = seconds % 60;

    if (remSeconds < 10) {
      remSeconds = "0" + remSeconds;
    }

    if (minute < 10) {
      minute = "0" + minute;
    }
    countDiv.innerHTML = minute + " : " + remSeconds;

    if (seconds > 0) {
      seconds--;
    } else {
      clearInterval(countdown);
      countDiv.innerHTML = "Done";
      playSound();
    }
  }
}

//TIME FUNCTION
function secondPass() {
  "use strict";

  var percentAge = (seconds / setSeconds) * 100;
  progressBar.style.width = percentAge + "%";

  var minute = Math.floor(seconds / 60),
    remSeconds = seconds % 60;

  if (remSeconds < 10) {
    remSeconds = "0" + remSeconds;
  }

  if (minute < 10) {
    minute = "0" + minute;
  }
  countDiv.innerHTML = minute + " : " + remSeconds;

  if (seconds > 0) {
    seconds--;
  } else {
    clearInterval(countdown);
    countDiv.innerHTML = "Done";
    playSound();
  }
}

// EVENT LISTENERS
var moveThis = document.getElementById("moveThis");
var moveBTN = document.getElementById("moveBTN");
var ShowMoveBTN = document.getElementById("ShowMoveBTN");
var timeDate = document.getElementById("timeDate");

timeDate.addEventListener("click", function () {
  moveThis.style.display = "none";
  moveBTN.style.display = "none";
  ShowMoveBTN.style.display = "block";
});
moveBTN.addEventListener("click", function () {
  moveThis.style.display = "none";
  moveBTN.style.display = "none";
  ShowMoveBTN.style.display = "block";
});
ShowMoveBTN.addEventListener("click", function () {
  ShowMoveBTN.style.display = "none";
  moveThis.style.display = "block";
  moveBTN.style.display = "block";
});

// TIME
function setCurrentTime() {
  var myDate = new Date();

  let amOrPm;
  let twelveHours = function () {
    if (myDate.getHours() > 12) {
      amOrPm = "PM";
      let twentyFourHourTime = myDate.getHours();
      let conversion = twentyFourHourTime - 12;
      return `${conversion}`;
    } else {
      amOrPm = "AM";
      return `${myDate.getHours()}`;
    }
  };
  let hours = twelveHours();
  let minutes = myDate.getMinutes();
  let seconds = myDate.getSeconds();

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }

  let currentTime = `${hours}:${minutes}:${seconds}`;
  let currentShortTime = `${hours}:${minutes}`;

  document.getElementById("timeTime").innerText = currentTime;
  document.getElementById("timeTimeShort").innerText = currentShortTime;
}

setInterval(function () {
  setCurrentTime();
}, 1000);

var myDate = new Date();

let daysList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let monthsList = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Aug",
  "Oct",
  "Nov",
  "Dec",
];

let date = myDate.getDate();
let month = monthsList[myDate.getMonth()];
let year = myDate.getFullYear();
let day = daysList[myDate.getDay()];

let today = `${date} ${month} ${year}, ${day}`;

document.getElementById("timeDate").innerText = today;
