const pixels = document.querySelectorAll('.pixel');
const pixelBoard = document.querySelector('#pixel-board');
const white = 'white';
const black = 'black';
const blue = 'blue';
const green = 'green';
const yellow = 'yellow';

// window.onload = loadPage;

function loadPage() {
  for (let i in pixels) {
    if (pixels[i].style.background !== white) {
      pixels[i].style.background = white;
    }
  }
}