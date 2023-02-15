function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}

Square.prototype.isSquare = function() {
    sidesArr = [this.a, this.b, this.c, this.d];
    return sidesArr.every(side => side === sidesArr[0])
};

const goodSquare = new Square(5,5,5,5)
const badSquare = new Square(1,2,3,4)

console.log(goodSquare.isSquare())
console.log(badSquare.isSquare())