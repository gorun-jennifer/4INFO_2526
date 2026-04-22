class Poligono {
    constructor(n, l) {
        this.n = n;
        this.l = l; }

    Perimetro() {
        let p = this.n * this.l;
        console.log(p);}
    Area() {
        let f = 0;
        if (this.n == 3) f = 0.433;
        if (this.n == 4) f = 1.0;
        if (this.n == 5) f = 1.72;
        if (this.n == 6) f = 2.598;
        if (this.n == 7) f = 3.634;
        if (this.n == 8) f = 4.828;

        let a = this.l * this.l * f;
        console.log(a);}
}
console.log("triangolo");
let p1 = new Poligono(3, 15);
p1.Perimetro();
p1.Area();

console.log("quadrato");
let p2 = new Poligono(4, 10);
p2.Perimetro();
p2.Area();

console.log("pentagono");
let p3 = new Poligono(5, 21);
p3.Perimetro();
p3.Area();

console.log("esagono");
let p4 = new Poligono(6, 18);
p4.Perimetro();
p4.Area();

console.log("ettagono");
let p5 = new Poligono(7, 9);
p5.Perimetro();
p5.Area();

console.log("ottagono");
let p6 = new Poligono(8, 12);
p6.Perimetro();
p6.Area();