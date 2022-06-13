
const squares = document.querySelectorAll('.square')
const resetbut = document.querySelector('button')
const square1 = document.querySelector('#square1')
const square2 = document.querySelector('#square2')
const square3 = document.querySelector('#square3')
const square4 = document.querySelector('#square4')
const square5 = document.querySelector('#square5')
const square6 = document.querySelector('#square6')
const square7 = document.querySelector('#square7')
const square8 = document.querySelector('#square8')
const square9 = document.querySelector('#square9')

const clearBoard = () => {
    for (let i = 0; i < squares.length; i++) {
        squares[i].innerHTML = ''
        squares[i].addEventListener('click', addMark)
    }
}

let move = 1
let player1wins = 0
let player2wins = 0

const checkForWin = () => {
    const win1x = (square1.innerHTML === '<h1>X</h1>') && (square2.innerHTML === '<h1>X</h1>') && (square3.innerHTML === '<h1>X</h1>')
    const win2x = (square4.innerHTML === '<h1>X</h1>') && (square5.innerHTML === '<h1>X</h1>') && (square6.innerHTML === '<h1>X</h1>')
    const win3x = (square7.innerHTML === '<h1>X</h1>') && (square8.innerHTML === '<h1>X</h1>') && (square9.innerHTML === '<h1>X</h1>')
    const win4x = (square1.innerHTML === '<h1>X</h1>') && (square4.innerHTML === '<h1>X</h1>') && (square7.innerHTML === '<h1>X</h1>')
    const win5x = (square2.innerHTML === '<h1>X</h1>') && (square5.innerHTML === '<h1>X</h1>') && (square8.innerHTML === '<h1>X</h1>')
    const win6x = (square3.innerHTML === '<h1>X</h1>') && (square6.innerHTML === '<h1>X</h1>') && (square9.innerHTML === '<h1>X</h1>')
    const win7x = (square1.innerHTML === '<h1>X</h1>') && (square5.innerHTML === '<h1>X</h1>') && (square9.innerHTML === '<h1>X</h1>')
    const win8x = (square3.innerHTML === '<h1>X</h1>') && (square5.innerHTML === '<h1>X</h1>') && (square7.innerHTML === '<h1>X</h1>')

    const win1y = (square1.innerHTML === '<h1>O</h1>') && (square2.innerHTML === '<h1>O</h1>') && (square3.innerHTML === '<h1>O</h1>')
    const win2y = (square4.innerHTML === '<h1>O</h1>') && (square5.innerHTML === '<h1>O</h1>') && (square6.innerHTML === '<h1>O</h1>')
    const win3y = (square7.innerHTML === '<h1>O</h1>') && (square8.innerHTML === '<h1>O</h1>') && (square9.innerHTML === '<h1>O</h1>')
    const win4y = (square1.innerHTML === '<h1>O</h1>') && (square4.innerHTML === '<h1>O</h1>') && (square7.innerHTML === '<h1>O</h1>')
    const win5y = (square2.innerHTML === '<h1>O</h1>') && (square5.innerHTML === '<h1>O</h1>') && (square8.innerHTML === '<h1>O</h1>')
    const win6y = (square3.innerHTML === '<h1>O</h1>') && (square6.innerHTML === '<h1>O</h1>') && (square9.innerHTML === '<h1>O</h1>') 
    const win7y = (square1.innerHTML === '<h1>O</h1>') && (square5.innerHTML === '<h1>O</h1>') && (square9.innerHTML === '<h1>O</h1>')
    const win8y = (square3.innerHTML === '<h1>O</h1>') && (square5.innerHTML === '<h1>O</h1>') && (square7.innerHTML === '<h1>O</h1>')
    if (win1x || win2x || win3x || win4x || win5x || win6x || win7x || win8x) {
        player1wins++
        move = 1
        alert(`X wins!`)
        clearBoard()
        return true
    } else if (win1y || win2y || win3y || win4y || win5y || win6y || win7y || win8y) {
        player2wins++
        move = 1
        alert(`O wins!`)
        clearBoard()
        return true
    } else {
        if (move > 9) {
            console.log('draw')
            move = 1
            alert('draw')
            clearBoard()
        }
    }
}

const addMark = (event) => {
    const squareMark = document.createElement('h1')
    if (move % 2 === 0) {
        squareMark.innerHTML = 'O'
        player = 2
        move++
        event.target.appendChild(squareMark)
        checkForWin()
        alert('Player ' + (player - 1) + "'s turn")
        event.target.removeEventListener('click', addMark)
    } else {
        squareMark.innerHTML = 'X'
        player = 1
        move++
        event.target.appendChild(squareMark)
        checkForWin()
        alert('Player ' + (player + 1) + "'s turn")
        event.target.removeEventListener('click', addMark)
    }
    checkForWin()
}


for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', addMark)
}

resetbut.addEventListener('click', clearBoard)


