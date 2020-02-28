const swap = (arr, i, j): void => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, low, high): number => {
  const pivot = Math.floor((high + low) / 2);
  let i = low;
  let j = high;

  while (i <= j) {
    while (arr[i] < arr[pivot]) {
      i++;
    }

    while (arr[j] > arr[pivot]) {
      j--;
    }

    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }

  return i;
};

export const quickSort = (arr, low, high): number[] => {
  let index;

  if (arr.length > 1) {
    index = partition(arr, low, high);

    if (low < index - 1) {
      quickSort(arr, 0, index - 1);
    }

    if (index < high) {
      quickSort(arr, index, high);
    }
  }

  return arr;
};
