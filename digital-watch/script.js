const timedisplay = document.querySelector("#timeDisplay");
const startbtn = document.querySelector("#startbtn");
const pausebtn = document.querySelector("#pausebtn");
const resetbtn = document.querySelector("#resetbtn");

let startTime = 0;
let elapsedTime = 0;
let intervalId;
let hrs = 0;
let min = 0;
let sec = 0;

startbtn.addEventListener("click", () => {
   if (!intervalId) { // Check if the timer is not already running
      startTime = Date.now() - elapsedTime;
      intervalId = setInterval(updateTime, 75);
   }
});

pausebtn.addEventListener("click", () => {
   if (intervalId) { // Check if the timer is running
      clearInterval(intervalId);
      intervalId = null;
   }
});

resetbtn.addEventListener("click", () => {
   clearInterval(intervalId);
   intervalId = null;
   startTime = 0;
   elapsedTime = 0;
   hrs = 0;
   min = 0;
   sec = 0;
   timedisplay.textContent = "00:00:00";
});

function updateTime() {
   elapsedTime = Date.now() - startTime;
   sec = Math.floor((elapsedTime / 1000) % 60);
   min = Math.floor((elapsedTime / (1000 * 60)) % 60);
   hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
   timedisplay.textContent = `${pad(hrs)}:${pad(min)}:${pad(sec)}`;
}

function pad(unit) {
   return unit.toString().padStart(2, '0');
}
