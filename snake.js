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
   console.log(tail)
   console.log(currentsnake)
   squares[tail].classList.remove('snake')
   currentsnake.unshift(currentsnake[0] + direction)
   console.log(currentsnake)
   squares[currentsnake[0]].classList.add('snake')

}
move()