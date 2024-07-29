Number = [3, 7, 1, 9, 2]
let n = Number.length;
let s = Number[0];
for (i = 0; i < n; i++) {
    if (Number[i] < s) {
       s = Number[i];
    }
}
console.log(s);