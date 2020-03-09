const swap = (arr, i, j): void => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, start, end, animations): number => {
  const pivot = start;
  let i = start + 1;
  let j = end;

  while (j >= i) {
    if (arr[j] < arr[pivot] && arr[i] > arr[pivot]) {
      animations.push([i, j]);
      animations.push([j, arr[i]]);
      animations.push([i, arr[j]]);
      swap(arr, j, i);
    }

    if (arr[j] >= arr[pivot]) {
      j--;
    }

    if (arr[i] <= arr[pivot]) {
      i++;
    }
  }

  if (pivot !== j) {
    animations.push([j, pivot]);
    animations.push([j, arr[pivot]]);
    animations.push([i, arr[pivot]]);
    swap(arr, j, pivot);
  }

  return j;
};

const doQuickSort = (
  arr: number[],
  low: number,
  high: number,
  animations: any[]
): void => {
  if (low < high) {
    const index = partition(arr, low, high, animations);

    doQuickSort(arr, low, index - 1, animations);
    doQuickSort(arr, index + 1, high, animations);
  }
};

export const quickSort = (arr: number[] = []): any[] => {
  const animations = [];
  const auxiliaryArr = arr.slice();
  if (arr.length <= 1) return [animations, arr];

  doQuickSort(auxiliaryArr, 0, arr.length - 1, animations);

  return [animations, auxiliaryArr];
};
