
let today = new Date().getDay();

let startTime = new Date();
startTime.setHours(9);
startTime.setMinutes(0);
startTime.setSeconds(0);

let endTime = new Date();
endTime.setHours(20);
endTime.setMinutes(0);
endTime.setSeconds(0);

let timeDiff = endTime.getTime() - new Date().getTime();

let hoursLeft = Math.floor((new Date().setHours(12) - new Date().getTime()) / 3600000);
let minutesLeft = Math.floor((new Date().setHours(12) - new Date().getTime()) / 60000);

let hoursLeft2 = Math.floor(timeDiff / 3600000);
let minutesLeft2 = Math.floor(timeDiff / 60000);


let now = new Date();
let lunchBreak = now.getHours() >= 12 && now.getHours() < 13;

let sundayBreak = today === 0 && now.getHours() >= 12 && now.getHours() < 14;


let warning = minutesLeft <= 30;


let danger = minutesLeft <= 15;


let warning2 = minutesLeft2 <= 30;


let danger2 = minutesLeft2 <= 15;


if (warning) {
  document.getElementById("timeleft").style.background = '#ffc524';
} else if (danger) {
  document.getElementById("timeleft").style.background = '#f44336';
} else if (warning2) {
  document.getElementById("timeleft").style.background = '#ffc524';
} else if (danger2) {
  document.getElementById("timeleft").style.background = '#f44336';
} else {
  document.getElementById("timeleft").style.background = '#04AA6D';
}


let timerText;
if (lunchBreak || sundayBreak) {
  timerText = 'BREAK';
} else if (now.getTime() < startTime.getTime()) {
  timerText = hoursLeft + ":" + minutesLeft;
} else if (now.getTime() >= startTime.getTime() && now.getTime() < endTime.getTime()) {
  timerText = hoursLeft2 + ':' + minutesLeft2;
} else {
  timerText = 'BREAK';
}

let timer = document.getElementById('timeleft');
timer.innerHTML = timerText;


