let ar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ar2 = [];

for (var i = 0; i < ar.length; i++) {
  if (!(ar[i] % 2 === 0)) {
    ar2.push(i);
  }
}

console.log(ar2);
