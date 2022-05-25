const pixels = document.querySelectorAll('.pixel');
const pixelBoard = document.querySelector('#pixel-board');
const white = 'white';
const black = 'black';
const blue = 'blue';
const green = 'green';
const yellow = 'yellow';


function loadPage() {
  let caminhoPreto = document.querySelector('#black');
  caminhoPreto.className = 'color selected';
}

const blackSelected = document.querySelector('#black');
const blueSelected = document.querySelector('#blue');
const yellowSelected = document.querySelector('#yellow');
const greenSelected = document.querySelector('#green');

blackSelected.addEventListener('click', () => {
  blackSelected.classList.add('selected');
  blueSelected.classList.remove('selected');
  yellowSelected.classList.remove('selected');
  greenSelected.classList.remove('selected');

});
blueSelected.addEventListener('click', () => {
  blackSelected.classList.remove('selected');
  blueSelected.classList.add('selected');
  yellowSelected.classList.remove('selected');
  greenSelected.classList.remove('selected');

});
yellowSelected.addEventListener('click', () => {
  blackSelected.classList.remove('selected');
  blueSelected.classList.remove('selected');
  yellowSelected.classList.add('selected');
  greenSelected.classList.remove('selected');

});
greenSelected.addEventListener('click', () => {
  blackSelected.classList.remove('selected');
  blueSelected.classList.remove('selected');
  yellowSelected.classList.remove('selected');
  greenSelected.classList.add('selected');

});

window.addEventListener('load', loadPage);