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
  let x = e.target.style.left
  let y = e.target.style.top

  if(x == parseInt(blankx) - 100  && parseInt(y) == parseInt(blanky)){
    let newTilex = x;
    x = blankx;
    document.getElementById('blank').style.left = newTilex;
  }
  else if (x == parseInt(blankx) + 100  && parseInt(y) == parseInt(blanky)){
    let newTilex = x;
    x = blankx;
    document.getElementById('blank').style.left = newTilex;
  }
  else if (parseInt(y) == parseInt(blanky) + 100 && parseInt(x) == parseInt(blankx)){
    let newTiley = y;
     y = blanky;
    document.getElementById('blank').style.top = newTiley;
// }
// console.log(tiley);
console.log("Clicked");
}
  else if (parseInt(y) == parseInt(blanky) - 100 && parseInt(x) == parseInt(blanky)){
    let newTiley = y;
    y  = blanky;
    document.getElementById('blank').style.top = newTiley;
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
