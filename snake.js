const grid = document.querySelector('.grid')
const startButton = document.getElementById('start')
const scoreDisplay = document.getElementById('score')
let squares =[]
let currentsnake = [2,1,0]
let direction =1
const width = 10
let appleIndex = 0
let score = 0

function createGrid() {
    for (let i = 0; i < width*width; i++) {
        const square = document.createElement('div')
        
        square.classList.add('square')  
        grid.appendChild(square)

        squares.push(square)
        
    }
    
}

createGrid()

currentsnake.forEach(index => squares[index].classList.add('snake'))
function move() {
    if(
        (currentsnake[0] + width >= width*width && direction === width ) ||
        (currentsnake[0] % width === width-1 && direction === 1) ||
        (currentsnake[0] % width === 0 && direction === -1) ||
        (currentsnake[0] - width < 0 && direction === -width) ||
        squares[currentsnake[0] + direction].classList.contains('snake')
    )
    return clearInterval(timerId)
   const tail = currentsnake.pop()
   squares[tail].classList.remove('snake')
   currentsnake.unshift(currentsnake[0] + direction)

   if(squares[currentsnake[0]].classList.contains('apple')){
    //remove the class appple
    squares[currentsnake[0]].classList.remove('apple')
    //grow snake by one by adding class of snake to it
    squares[tail].classList.add('snake')
    console.log(tail)
    //groe aour snake arrray
    currentsnake.push(tail)
    console.log(currentsnake)
    //generate a new apple
    generateApples()

    score++
    scoreDisplay.textContent = score
    //speed up our snake


   }

   squares[currentsnake[0]].classList.add('snake')

}
move()

let timerId = setInterval(move,1000)
// clearInterval(timerId)

function generateApples(){
    do{
        //generate random numbers 
        appleIndex = Math.floor(Math.random() * squares.length)
    }
    while(squares[appleIndex].classList.contains('snake'))
    squares[appleIndex].classList.add('apple')
}

generateApples()

function control(e) {
    if(e.keyCode === 39) {
        console.log('right pressed')
        direction = 1  
    }
    else if(e.keyCode === 37) {
        console.log('left pressed')
        direction =-1
    }
    else if(e.keyCode === 38) {
        console.log('up pressed')
        direction = -width
    }
    else if(e.keyCode === 40){
        console.log('down pressed')
        direction = +width
    }
}
document.addEventListener('keyup',control)