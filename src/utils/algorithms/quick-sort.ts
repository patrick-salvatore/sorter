const swap = (arr, i, j): void => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, low, high, animations): number => {
  const pivot = low;
  let i = low;
  let j = high;

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
    animations.push([pivot, arr[j]]);
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
    const midPoint = partition(arr, low, high, animations);

    doQuickSort(arr, low, midPoint - 1, animations);
    doQuickSort(arr, midPoint + 1, high, animations);
  }
};

export const quickSort = (
  arr: number[] = []
): { auxiliaryArr: number[]; animations: any[] } => {
  const animations = [];
  const auxiliaryArr = arr.slice();
  if (auxiliaryArr.length <= 1) return { auxiliaryArr, animations };

  doQuickSort(auxiliaryArr, 0, auxiliaryArr.length - 1, animations);

  return { auxiliaryArr, animations };
};
