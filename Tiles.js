//

// css transform/translate property

// lay out board positions
let row = [0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4]
let col = [0,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4]
// let pos = this.tile.


function handleTile(e){
  console.log(this.id);
}

// create function for checking blank with clicked tile
function swapTiles(x,y){

}

let outline = document.getElementById('tile-outline')
for (var i = 1; i <= 16; i++) {
  let tile = document.createElement('div');
  tile.id = 't' + i;
  tile.className = 'tile';
  tile.style.top = row[i] * 100 + "px" ;
  tile.style.left = col[i] * 100 + "px";

  outline.appendChild(tile);
  if(i>15){
    tile.id = "blank";
    break;
  }
  tile.textContent = i;
  tile.onclick = handleTile;
  console.log(tile.row);
}


// onClick handlers:


// class move up right left or down


// need auxiliary structure for the whole board that will tell you which tile is at which location

// write an arithmetic method for the x and y
