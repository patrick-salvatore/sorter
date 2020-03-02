const swap = (arr, i, j): void => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, start, end): number => {
  const pivot = end;

  let i = start - 1;
  let j = start;

  while (j < pivot) {
    if (arr[j] > arr[pivot]) {
      j++;
    } else {
      i++;
      swap(arr, j, i);
      j++;
    }
  }

  swap(arr, i + 1, pivot);

  return i + 1;
};

export const quickSort = (arr, low, high): number[] => {
  let index;

  if (low < high) {
    index = partition(arr, low, high);

    quickSort(arr, low, index - 1);

    quickSort(arr, index + 1, high);
  }

  return arr;
};
