// Create NxN multiplication table, of size provided in parameter.
// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9

// For given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function (size) {
  const result = [];
  for (let i = 1; i <= size; i++) {
    const temp = [];
    for (let j = 1; j <= size; j++) {
      temp.push(i * j);
    }
    result.push(temp);
  }
  return result;
};
