function soal1c(obj) {
  return Object.values(obj).reduce((sum, value) => {
    if (typeof value === "object") {
      return sum + soal1c(value);
    } else if (typeof value === "number" && value % 2 === 0) {
      return sum + value;
    }
    return sum;
  }, 0);
}

const input1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

const input2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 4 }, ee: "car" },
};

console.log(soal1c(input1)); // Output: 6
console.log(soal1c(input2)); // Output: 12
