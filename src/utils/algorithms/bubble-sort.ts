const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const doBubbleSort = arr => {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        swap(arr, i, j);
      }
    }
  }
};

export const bubbleSort = arr => {
  const animations = [];
  const auxiliaryArr = arr.slice();
  if (arr.length <= 1) return arr;

  doBubbleSort(auxiliaryArr);

  console.log(auxiliaryArr);
};
