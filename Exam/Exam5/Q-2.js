Number = [3, 7, 9, 1, 2]
let n = Number.length;
let lar = Number[0];
for (i = 0; i < n; i++) {
    if (Number[i] > lar) {
        lar = Number[i];
    }
}
console.log(lar);



