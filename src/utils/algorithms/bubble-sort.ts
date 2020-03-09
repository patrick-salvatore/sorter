const swap = (arr, i, j): void => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const doBubbleSort = (arr): void => {
  let end = arr.length;
  let sorted;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        sorted = false;
      }
    }

    end--;
  }
};

export const bubbleSort = (arr): any[] => {
  const animations = [];
  const auxiliaryArr = arr.slice();
  if (arr.length <= 1) return arr;

  doBubbleSort(auxiliaryArr);

  console.log(auxiliaryArr);

  return animations;
};
