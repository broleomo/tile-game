//

// css transform/translate property

// lay out board positions
let row = [0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4]
let col = [0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4]

let imageRow = [0,0,3,2,1,0,3,2,1,0,3,2,1,0,3,2,1,0]
let imageCol = [0,0,0,0,0,3,3,3,3,2,2,2,2,1,1,1,1]

let width = 100;

function handleTile(e){
  console.log(this.id);
}

function handleSolve(){
let outline = document.getElementById('tile-outline')
for (var i = 1; i <= 16; i++) {
  let tile = document.createElement('div');
  tile.id = 't' + i;
  tile.className = 'tile';
  tile.style.top = row[i] * 100 + "px" ;
  tile.style.left = col[i] * 100 + "px";
  tile.addEventListener("click", swapTiles);
  outline.appendChild(tile);
  if(i>15){
    tile.id = "blank";
    tile.style.backgroundColor = '#A9E4EF';
    break;
  }
  tile.style.backgroundImage = "url('img/Cat.jpg')";
  tile.style.backgroundPosition = imageRow[i] * 100 + 'px' + " " + imageCol[i] * 100 + 'px';
    }
}

function handleShuffle(){
  let outline = document.getElementById('tile-outline')
    for (var i = 1; i <= 16; i++) {
      let tile = document.createElement('div');
      tile.id = 't' + i;
      tile.className = 'tile';
      tile.style.top = row[i] * 100 + "px" ;
      tile.style.left = col[i] * 100 + "px";
      tile.addEventListener("click", swapTiles);
      outline.appendChild(tile);
    if(i>15){
      tile.id = "blank";
      break;
    }
    tile.textContent = i;
      }
}

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
