function soal1a(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const inputArray = [1, 2, 4, 3, 5, 3, 2, 1];
const sortedArray = soal1a(inputArray);
console.log(sortedArray);
