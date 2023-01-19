const yearEL = document.querySelector(".year");
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

function updateCountdown() {
  const now = new Date();
  const nextYear = now.getFullYear() + 1;
  const nextYearTime = new Date(`January 01 ${nextYear} 00:00:00`).getTime();
  const gap = nextYearTime - now.getTime();

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  yearEL.innerText = nextYear;
  dayEl.innerText = d;
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
}

setInterval(updateCountdown, 1000);
