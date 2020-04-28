// let arr = [0, 9, 1, 8, 2, 7, 3, 6, 4, 5];
let arr = [1, 7, 2, 0, 5];
let temp;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j + 1]) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);
