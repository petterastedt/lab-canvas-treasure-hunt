class Treasure {
    constructor(maxCol, maxRow, src) {
        this.maxCol = maxCol
        this.maxRow = maxRow
        this.setRandomPosition() // to set thos.col and this.row

        this.img = new Image()
        this.img.src = src
    }
    setRandomPosition() {
        this.col = Math.floor(Math.random()*maxCol)
        this.row = Math.floor(Math.random()*maxrow)
    }
}