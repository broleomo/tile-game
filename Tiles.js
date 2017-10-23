//

// css transform/translate property

// lay out board positions
let row = [0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4]
let col = [0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4]
// let pos = this.tile.
let width = 100;

function handleTile(e){
  console.log(this.id);
}

// create function for checking blank with clicked tile
function swapTiles(e){
  // let tiley = document.getElementById("t12").style.top;
  // let tilex = document.getElementById("t12").style.left;
  let blanky = document.getElementById("blank").style.top;
  let blankx = document.getElementById("blank").style.left;
  if(parseInt(e.target.style.left) == parseInt(blankx) - 100  && parseInt(e.target.style.top) == parseInt(blanky)){
    let newTilex = e.target.style.left;
    e.target.style.left = blankx;
    blankx = newTilex;

  }
  else if (parseInt(e.target.style.top) == parseInt(blanky) + 100 && parseInt(e.target.style.left) == parseInt(blankx)){
    let newTilex = e.target.style.left;
    e.target.style.left = blankx;
    blankx = newTilex;
// }
// console.log(tiley);
console.log("Clicked");
}
else {
  
}
}
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

// document.getElementById('t12').addEventListener("click", swapTiles);


// onClick handlers:


// class move up right left or down


// need auxiliary structure for the whole board that will tell you which tile is at which location

// write an arithmetic method for the x and y
