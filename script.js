const DEFAULT_COLOR = '#333333'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = getComputedStyle(document.documentElement).getPropertyValue('--squareNumber');

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

function setCurrentColor(newColor) {
    currentColor = newColor
}

function setCurrentMode(newMode) {
    currentMode = newMode;
    activateButton(newMode);       
}

const gameDisplay = document.getElementById('container');
const colorPicker = document.getElementById('colorPicker');
const colorButton = document.getElementById('colorButton');
const rainbowButton = document.getElementById('rainbowButton');
const clearButton = document.getElementById('clearButton');
const gridButton = document.getElementById('gridButton');

colorPicker.onchange = (e) => setCurrentColor(e.target.value);
colorButton.onclick = () => setCurrentMode('color');
rainbowButton.onclick = () => setCurrentMode('rainbow');
clearButton.addEventListener("click", clear)
gridButton.addEventListener("click", changeGrid);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function createGrid(currentSize) {
    for (a = 0; a < (currentSize * currentSize); a++) {
        const squares = document.createElement('div');
        squares.setAttribute('class', 'squares');
        gameDisplay.appendChild(squares);
    }
    const squares = gameDisplay.querySelectorAll('div');
    squares.forEach(squares => squares.addEventListener ('mouseover', paint));
    squares.forEach(squares => squares.addEventListener ('mousedown', paint));
}

function changeGrid(){
    const squares = gameDisplay.querySelectorAll('div');
    let currentSize = window.prompt("Number of squares per side:", "16");
    let newValue = Number(currentSize);
    document.documentElement.style.setProperty('--squareNumber', newValue);
    squares.forEach(square => {
        square.remove();
    })
    createGrid(currentSize);    
    squares.forEach(squares => squares.addEventListener ('mouseover', paint));
    squares.forEach(squares => squares.addEventListener ('mousedown', paint));
}

function paint(e) {
    if (e.type ==='mouseover' && !mouseDown) return
    if (currentMode === 'rainbow') {
      e.target.style.backgroundColor = randomColor();
    } else if (currentMode === 'color') {
      e.target.style.backgroundColor = currentColor
    } else if (currentMode === 'eraser') {
      e.target.style.backgroundColor = '#fefefe'
    }
  }

function randomColor () {
    let characters = '0123456789ABCDEF';
    let hash = '#';
    for (let i = 0; i < 6; i++) {
        color = hash += characters [Math.floor(Math.random()*16)];
    }
    return color;
}

function clear () {
    const squares = gameDisplay.querySelectorAll('div');
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = 'white';
    }    
}

function activateButton(newMode) {
    if (currentMode === 'rainbow') {
        colorButton.classList.remove('active');
    } else if (currentMode === 'color') {
        rainbowButton.classList.remove('active')
    }

    if (currentMode === 'rainbow') {
        rainbowButton.classList.add('active');
    } else if (currentMode === 'color') {
        colorButton.classList.add('active')
    }
}

createGrid(currentSize);
activateButton(DEFAULT_MODE)
