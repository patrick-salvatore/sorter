const swap = (arr, i, j): void => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const doBubbleSort = (arr, animations): void => {
  let end = arr.length;
  let sorted;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < end; i++) {
      animations.push([i, i + 1]);
      animations.push([i, i + 1]);
      if (arr[i] > arr[i + 1]) {
        animations.push([i, arr[i + 1]]);
        animations.push([i + 1, arr[i]]);
        swap(arr, i, i + 1);
        sorted = false;
      } else {
        animations.push([-1, -1]);
        animations.push([-1, -1]);
      }
    }

    end--;
  }
};

export const bubbleSort = (
  arr
): { auxiliaryArr: number[]; animations: any[] } => {
  const animations = [];
  const auxiliaryArr = arr.slice();
  if (arr.length <= 1) return arr;

  doBubbleSort(auxiliaryArr, animations);

  return { auxiliaryArr, animations };
};
