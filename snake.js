const grid = document.querySelector('.grid')
const startButton = document.getElementById('start')
const score = document.getElementById('score')
let squares =[]
let currentsnake = [0,1,2]

function createGrid() {
    for (let i = 0; i < 100; i++) {
        const square = document.createElement('div')
        
        square.classList.add('square')  
        grid.appendChild(square)

        squares.push(square)
        
    }
    
}

createGrid()

currentsnake.forEach(index => squares[index].classList.add('snake'))
function move() {

}