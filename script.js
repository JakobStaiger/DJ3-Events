// script.js
const partyStart = new Date(2026, 9, 17, 19, 0, 0).getTime();
const partyEnd   = new Date(2026, 9, 18, 5, 0, 0).getTime();

const updateCountdown = setInterval(function() {
  const now = new Date().getTime();

  if (now < partyStart) {
    const distance = partyStart - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
      days + "d " + hours + "h " + minutes + "m " + seconds + "s";

  } else if (now >= partyStart && now < partyEnd) {
    document.getElementById("countdown").innerHTML = "PARTY LÄUFT!";

  } else {
    clearInterval(updateCountdown);
    document.getElementById("countdown").innerHTML = "Die Party ist bereits vorbei!";
  }
}, 1000);