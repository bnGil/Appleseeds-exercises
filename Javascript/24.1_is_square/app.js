function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  this.isSquare = function () {
    if (this.a === this.b && this.a === this.c && this.a === this.d) {
      console.log(true);
    } else {
      console.log(false);
    }
  };
}

const s = new Square(2, 3, 2, 2);
s.isSquare();
