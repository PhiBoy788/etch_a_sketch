const board = document.getElementById("board")
const newDiv = document.createElement("div")


function createBoard(size){   
    removeAllChildNodes(board)
    boardSize = board.style.height
    console.log(boardSize)
    for (i = 1; i <= size; i++) {
        newRow = document.createElement("div")
        newRow.id = ("row" + i)
        //console.log(typeof newRow.id)
        for (j = 1; j <= size; j++) {
            cell = document.createElement("div")
            cell.className = "cell"
            cell.id = (String(i) + String(j))
            cell.addEventListener("mouseover",changeColor)
            sizeofCell = (String(500 / size) + "px")
            //console.log(sizeofCell)
            //sizeofCell = "50px"
            console.log(sizeofCell)
            cell.style.height = sizeofCell
            cell.style.width = sizeofCell
            newRow.appendChild(cell)
        }
        board.appendChild(newRow)
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function randomColor(){
    x = Math.floor(Math.random() * 256)
    y = Math.floor(Math.random() * 256)
    z = Math.floor(Math.random() * 256)
    bgColor = "rgba(" + x + "," + y + "," + z + ")"
    return bgColor
}
function changeColor() {
    color = randomColor()
    this.style.background = (color)
}

function removeColor() {
    const cells = Array.from(document.querySelectorAll('.cell'))
    cells.forEach(cell => cell.style.background = "white")
}

function resize() {
    size = prompt("How large would you like your canvas? Select a number between 1-100")
    while(size > 100 || size < 1){
        alert("I can't let you do that, Starfox")
        size = prompt("Can't you read? The number has to be between 1 and 100. Try again, Einstein.")
    }
    if (size == 69){
        alert("hehehe")
    }
    createBoard(size)
}



createBoard(16)