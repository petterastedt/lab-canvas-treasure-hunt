var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')
var width = canvas.width
var height = canvas.height

var NB_OF_TILES = 10
var TILE_SIZE = width / NB_OF_TILES

var player = new Character(0,0)

var treasure = new Treasure(NB_OF_TILES,NB_OF_TILES,'images/treasure.png')

function drawGrid() {
    ctx.lineWidth = 3

    //Draw vertical lines
    for (var x = 0; x <= height; x+=TILE_SIZE){
        ctx.beginPath()
        ctx.moveTo(x,0)
        ctx.lineTo()

    }

}

// function drawBoard(){
//     for (var x = 0; x <= width; x += 48.9) {
//         ctx.moveTo(0.5 + x + p, p);
//         ctx.lineTo(0.5 + x + p, height + p);
//     }

//     for (var x = 0; x <= height; x += 48.9) {
//         ctx.moveTo(p, 0.5 + x + p);
//         ctx.lineTo(width + p, 0.5 + x + p);
//     }

//     ctx.strokeStyle = "black";
//     ctx.stroke();
// }

drawBoard();


function drawPlayer(){
    ctx.drawImage(
        imgs[3],
        player.col*TILE_SIZE,
        player.row*TILE_SIZE,
        TILE_SIZE, // Todo: find the right ratio
        TILE_SIZE)
}

