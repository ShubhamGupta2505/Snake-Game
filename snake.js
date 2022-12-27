const grid = document.querySelector('.grid')
const startButton = document.getElementById('start')
const score = document.getElementById('score')
let squares =[]
let currentsnake = [2,1,0]
let direction =1


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
   const tail = currentsnake.pop()
   squares[tail].classList.remove('snake')
   currentsnake.unshift(currentsnake[0] + direction)
   squares[currentsnake[0]].classList.add('snake')

}
move()

let timerId = setInterval(move,1000)
// clearInterval(timerId)

function control(e) {
    if(e.keyCode == 39) {
        console.log('right pressed')
    }
    else if(e.keyCode == 37) {
        console.log('left pressed')
    }
    else if(e.keyCode == 38) {
        console.log('up pressed')
    }
    else if(e.keyCode == 40){
        console.log('down pressed')
    }
}
document.addEventListener('keyup',control)