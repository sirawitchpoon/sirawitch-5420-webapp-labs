const rdmGrids = document.querySelectorAll('.random');
const fixedGrids = document.querySelectorAll('.fixed')

rdmGrids.forEach(grid => {
    grid.addEventListener('click', () => {
        grid.style.backgroundColor = bgChange();
    })
})

fixedGrids.forEach(grid => {
    grid.addEventListener('click', () => {
        grid.style.backgroundColor = 'yellow';
    })
})

function random(number) {
  return Math.floor(Math.random() * number);
}

function bgChange() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  return rndCol
}
