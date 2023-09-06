function soal1b(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

// Contoh input yang diberikan
console.log(soal1b([100, 200, 300, 400], 2)); // Output: 700
console.log(soal1b([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // Output: 39
console.log(soal1b([-3, 4, 0, -2, 6, -1], 2)); // Output: 5
