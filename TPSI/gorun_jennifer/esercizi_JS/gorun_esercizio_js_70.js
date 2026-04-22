class calcolatrice {
    
    piu(a, b) { return a + b; }
    meno(a, b) { return a - b; }
    per(a, b) { return a * b; }
    diviso(a, b) { return a / b; }

    calcola(testo) {
        let pezzi = testo.split(" ");
        let res = Number(pezzi[0]); 
        
        for (let i = 1; i < pezzi.length; i = i + 2) {
            let op = pezzi[i];
            let num = Number(pezzi[i+1]);

            if (op == "+") res = res + num;
            if (op == "-") res = res - num;
            if (op == "*") res = res * num;
            if (op == "/") res = res / num;
        }
        return res;
    }
}
let calc = new calcolatrice();

let es1 = "6 - 2 * 5 + 8 / 4";
let es2 = "11 * 3 + 5 - 5 / 11";
let es3 = "29 + 2 - 7 / 3 / 2 + 1 * 2";

console.log(es1, "=", calc.calcola(es1));
console.log(es2, "=", calc.calcola(es2));
console.log(es3, "=", calc.calcola(es3));