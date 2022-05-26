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

const color = document.querySelectorAll('.color');
color[0].style.background = black;
color[1].style.background = green;
color[2].style.background = yellow;
color[3].style.background = blue;

function preencherPixel(e) {
  let corSelecionada;
  for (let i = 0; i < color.length; i += 1) {
    if (color[i].className === 'color selected') {
      corSelecionada = color[i].style.background;
      e.target.style.background = corSelecionada;
    }
  }
}
// const pixels = document.querySelectorAll('.pixel');
for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', preencherPixel);
}

const botao = document.querySelector('#clear-board');
function clear() {
  for (let i = 0; i < pixels.length; i += 1) {
    if (pixels[i].style.background !== 'white') {
      pixels[i].style.background = 'white';
    }
  }
}
botao.addEventListener('click', clear);
window.addEventListener('load', loadPage);