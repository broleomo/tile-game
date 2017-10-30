//

// css transform/translate property

// lay out board positions
let board = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
let row = [1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4]
let col = [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4]

let imageRow = [0,0,3,2,1,0,3,2,1,0,3,2,1,0,3,2,1,0]
let imageCol = [0,0,0,0,0,3,3,3,3,2,2,2,2,1,1,1,1]

let copyImageRow = [...imageRow]
let copyImageCol = [...imageCol]

let width = 100;

function handleTile(e){
  console.log(this.id);
}


// Creating shuffled puzzle

function handleShuffle(){
  let outline = document.getElementById('tile-outline')
  let board2 = [...board]
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
let board3 = shuffle(board2)
for (var i = 0; i < board3.length; i++) {
  let tile = document.createElement('div');
  tile.id = 't' + board3[i];
  tile.className = 'tile';
  tile.style.top = row[i] * 100 + "px" ;
  tile.style.left = col[i] * 100 + "px";
  tile.addEventListener("click", swapTiles);
  tile.style.backgroundImage = "url('img/Cat.jpg')";

  if(board3[i] == 16){
    tile.id = "blank";
    tile.style.background = '#A9E4EF';
  }
  tile.style.backgroundPosition = copyImageRow[board3[i]] * 100 + 'px' + " " + copyImageCol[board3[i]] * 100 + 'px';
  outline.appendChild(tile);
    }
}

function handleSolve(){
let outline = document.getElementById('tile-outline')
for (var i = 0; i < board.length; i++) {
  let tile = document.createElement('div');
  tile.id = 't' + board[i];
  tile.className = 'tile';
  tile.style.top = row[i] * 100 + "px" ;
  tile.style.left = col[i] * 100 + "px";
  tile.addEventListener("click", swapTiles);
  tile.innerHTML = board[i]
  tile.style.backgroundImage = "url('img/Cat.jpg')";
  outline.appendChild(tile);
  if(board[i] == 16){
    tile.id = "blank";
    tile.innerHTML = ' ';
    tile.style.background = '#A9E4EF';
  }
  tile.style.backgroundPosition = imageRow[board[i]] * 100 + 'px' + " " + imageCol[board[i]] * 100 + 'px';
    }
}

//
// function handleShuffle(){
//   let blanky = document.getElementById("blank").style.top;
//   let blankx = document.getElementById("blank").style.left;
//
//   for (var i = 0; i < array.length; i++) {
//     array[i]
//   }
//   if(parseInt(tile.style.left) == parseInt(blankx) - 100  && parseInt(e.target.style.top) == parseInt(blanky)){
//     let newTilex = e.target.style.left;
//     e.target.style.left = blankx;
//     document.getElementById('blank').style.left = newTilex;
//   }
// }

// create function for checking blank with clicked tile
function swapTiles(e){
  let blanky = document.getElementById("blank").style.top;
  let blankx = document.getElementById("blank").style.left;

  if(parseInt(e.target.style.left) == parseInt(blankx) - 100  && parseInt(e.target.style.top) == parseInt(blanky)){
    let newTilex = e.target.style.left;
    e.target.style.left = blankx;
    document.getElementById('blank').style.left = newTilex;
  }
  else if (parseInt(e.target.style.left) == parseInt(blankx) + 100  && parseInt(e.target.style.top) == parseInt(blanky)){
    let newTilex = e.target.style.left;
    e.target.style.left = blankx;
    document.getElementById('blank').style.left = newTilex;
  }
  else if (parseInt(e.target.style.top) == parseInt(blanky) + 100 && parseInt(e.target.style.left) == parseInt(blankx)){
    let newTiley = e.target.style.top;
     e.target.style.top = blanky;
    document.getElementById('blank').style.top = newTiley;
}
  else if (parseInt(e.target.style.top) == parseInt(blanky) - 100 && parseInt(e.target.style.left) == parseInt(blankx)){
    let newTiley = e.target.style.top;
    e.target.style.top  = blanky;
    document.getElementById('blank').style.top = newTiley;
}
}
