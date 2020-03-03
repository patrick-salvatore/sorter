const animations = [];

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

  animations.push([i, j] as never);
};

const partition = (arr, start, end) => {
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

export const quickSort = (arr, low: number, high: number): any[] => {
  let index;

  if (low < high) {
    index = partition(arr, low, high);
    quickSort(arr, low, index - 1);
    quickSort(arr, index + 1, high);
  }

  return animations;
};
