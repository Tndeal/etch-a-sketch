const container = document.getElementById("container")
let gridElement
let numRow
let numCol
let toChange

makeGrid(16, 16);

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    var size = window.prompt("Enter no. of squares per side")
    clearGrid()
    makeGrid(size, size)
})

function makeGridElement (numElements) {
    for (let i = 0; i < numElements; i++) {
        gridElement = document.createElement('div');
        gridElement.classList.add('gridElement');
        container.appendChild(gridElement);
    
    }
}

function makeGrid (numRow, numCol) {
    container.style.setProperty('--numRows', numRow);
    container.style.setProperty('--numCols', numCol);
    for (let j = 0; j<numRow; j++) {
        makeGridElement(numCol)
    }
}

function clearGrid () {
    element = document.getElementById('gridElement');
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
}

container.addEventListener('mouseover', function(e){
    if (e.target.matches('.gridElement')){
        e.target.style.backgroundColor = "red"
    }
});







