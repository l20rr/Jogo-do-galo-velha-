// interface

document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })
})

jogador1 = prompt("qual seu nome? jogador 1");
jogador2 = prompt("qual seu nome? jogador 2");

function handleClick(event) {

    let square = event.target;
    let position = square.id;


    if (handlemove(position)) {
        //document.getElementById("Final").innerHTML = "O vencedor foi" + playerTime
        if (jogador1 == gameover) {
            document.getElementById("Final").innerHTML = "O vencedor foi " + jogador2
        } else {
            document.getElementById("Final").innerHTML = "O vencedor foi " + jogador1
        }
    }
    updateSquares()


}




function updateSquares() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];


        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}

let btn = document.getElementById("NJ");
btn.addEventListener("click", () => {
    location.reload()
})