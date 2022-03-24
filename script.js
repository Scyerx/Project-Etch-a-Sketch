gameDisplay = document.getElementById('container');
const squares = document.getElementsByClassName('squares');
const clearButton = document.getElementById ('clearButton');
clearButton.addEventListener("click", clear);
var r = document.querySelector(':root');
const rainbowButton = document.getElementById('rainbowButton');
rainbowButton.addEventListener("click", rainbow);
const gridButton = document.getElementById('gridButton');
gridButton.addEventListener("click", changeGrid);
let squaresPerSide = getComputedStyle(document.documentElement).getPropertyValue('--squareNumber');

function createGrid(squaresPerSide) {
    for (a = 0; a < (squaresPerSide * squaresPerSide); a++) {
        const squares = document.createElement('div');
        squares.setAttribute('class', 'squares');
        gameDisplay.appendChild(squares);
    }
    paint ('black')
}

function changeGrid(){
    const squares = gameDisplay.querySelectorAll('div');
    let squaresPerSide = window.prompt("Number of squares per side:", "16");
    let original = getComputedStyle(document.documentElement).getPropertyValue('--squareNumber');
    let newValue = Number(squaresPerSide);
    document.documentElement.style.setProperty('--squareNumber', newValue);
    squares.forEach(square => {
        square.remove();
    })
    createGrid(squaresPerSide);
}

function clear () {
    const squares = gameDisplay.querySelectorAll('div');
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = 'white';
    }    
}

function paint(color) {
    if (color == 'rainbow') {
        const squares = gameDisplay.querySelectorAll('div');
        squares.forEach(squares => squares.addEventListener ('mouseenter', changeColorRainbow));
    } else {
        const squares = gameDisplay.querySelectorAll('div');
        squares.forEach(squares => squares.addEventListener ('mouseenter', changeColorBlack));
    }
    
}



function rainbow(){
    paint('rainbow');
}
function black(){
    paint('black');
    
}



function changeColorRainbow () {
    this.style.backgroundColor = randomColor();
}
function changeColorBlack () {
    this.style.backgroundColor = 'black';
}

function randomColor () {
    let characters = '0123456789ABCDEF';
    let hash = '#';
    for (let i = 0; i < 6; i++) {
        color = hash += characters [Math.floor(Math.random()*16)];
    }
    return color;
}


createGrid(squaresPerSide);


/*gameDisplay = document.getElementById('container');
const squares = document.getElementsByClassName('squares');
const clearButton = document.getElementById ('clearButton');
clearButton.addEventListener("click", clear);
var r = document.querySelector(':root');
const rainbowButton = document.getElementById('rainbowButton');
rainbowButton.addEventListener("click", rainbow);


let squaresPerSide = getComputedStyle(document.documentElement).getPropertyValue('--squareNumber');


function startGame (squaresPerSide, color) {
    if (color == 'rainbow') {
        for (a = 0; a < (squaresPerSide * squaresPerSide); a++) {
            const squares = document.createElement('div');
            squares.setAttribute('class', 'squares');
            gameDisplay.appendChild(squares);
        }
        const squares = gameDisplay.querySelectorAll('div');
        squares.forEach(squares => squares.addEventListener ('mouseover', changeColorRainbow));
    } else {
        for (a = 0; a < (squaresPerSide * squaresPerSide); a++) {
            const squares = document.createElement('div');
            squares.setAttribute('class', 'squares');
            gameDisplay.appendChild(squares);
        }
        const squares = gameDisplay.querySelectorAll('div');
        squares.forEach(squares => squares.addEventListener ('mouseover', changeColorBlack));
    }
    

}

function changeColorRainbow () {
    this.style.backgroundColor = randomColor();
}
function changeColorBlack () {
    this.style.backgroundColor = 'black';
}

function clear (color) {
    const squares = gameDisplay.querySelectorAll('div');
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = 'white';
    }
    let squaresPerSide = window.prompt("Number of squares per side:", "16");
    let original = getComputedStyle(document.documentElement).getPropertyValue('--squareNumber');
    let newValue = Number(squaresPerSide);
    document.documentElement.style.setProperty('--squareNumber', newValue);
    squares.forEach(square => {
        square.remove();
    })
    startGame(squaresPerSide, color);

}

function rainbow() {
    clear ('rainbow');
}


function randomColor () {
    let characters = '0123456789ABCDEF';
    let hash = '#';
    for (let i = 0; i < 6; i++) {
        color = hash += characters [Math.floor(Math.random()*16)];
    }
    return color;
}


startGame(squaresPerSide, 'black');*/








