const sleep = ms => {
  return new Promise(res => setTimeout(res, ms));
};

const swap = (arr, i, j, animations) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, start, end, animations) => {
  const pivot = arr[end];
  let pivotIndex = start;

  animations.push([start, end]);

  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      swap(arr, i, pivotIndex, animations);
      pivotIndex++;
    }
  }

  swap(arr, pivotIndex, end, animations);

  return pivotIndex;
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

export const quickSort = (arr: number[] = []): [number[]] | number[] => {
  const animations = [];
  const auxiliaryArr = arr.slice();
  if (arr.length <= 1) return arr;

  doQuickSort(auxiliaryArr, 0, arr.length - 1, animations);

  return animations;
};
