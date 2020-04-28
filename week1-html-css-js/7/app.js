let ar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeEven(num) {
  if (!(num % 2) == 0) {
    return num;
  }
}
let arOdd = ar.filter(removeEven);

console.log(arOdd);
