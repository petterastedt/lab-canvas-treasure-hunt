class Character {
    constructor (initialCol, initialRow, imgPaths) {
        this.col = initialCol
        this.row = initialRow
        this.position = "down"
        this.imgs = []
        for (let i = 0; i < imgPaths; i++) {
            var img = new Image()
            
            this.imgs.push()
        }
        }
    }
    moveUp() {
        this.col--
        console.log(player.col, player.row)
    }
    moveRight() {
        this.row++
        console.log(player.col, player.row)
    }
    moveDown() {
        this.col++
        console.log(player.col, player.row)
    }
    moveLeft() {
        this.row--
        console.log(player.col, player.row)
    }
}