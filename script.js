const board = document.getElementById("board")
const newDiv = document.createElement("div")


function createBoard(size){   

    for (i = 1; i <= size; i++) {
        newRow = document.createElement("div")
        newRow.id = ("row" + i)
        console.log(typeof newRow.id)
        for (j = 1; j <= size; j++) {
            cell = document.createElement("div")
            cell.className = "cell"
            cell.id = (String(i) + String(j))
            cell.addEventListener("mouseover",changeColor)
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

function changeColor() {
    console.log(this)
    this.classList.add('filled')
}

function removeColor() {
    const cells = Array.from(document.querySelectorAll('.cell'))
    cells.forEach(cell => cell.classList.remove("filled"))
}





createBoard(16)