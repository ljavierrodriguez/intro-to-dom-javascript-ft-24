let gameBoard = document.querySelector('#gameBoard');
let tablero = [
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
];

function dibujarTablero(tablero = []){
    for(let i = 0; i < tablero.length; i++){
        for(let j = 0; j < tablero[i].length; j++){
            let div = document.createElement('div')
            //div.innerHTML = j+1;
            div.style.color = j % 2 === 0 ? 'white' : 'black'
            div.style.backgroundColor = i % 2 === 0 && j % 2 === 0  ? 'black' : 'white'
            gameBoard.appendChild(div)
        }
    }
}

dibujarTablero(tablero);