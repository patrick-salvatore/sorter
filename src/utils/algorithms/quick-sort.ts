const swap = (arr, i, j): void => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, start, end, animations): number => {
  const pivot = start;
  let left = start + 1;
  let right = end;

  while (right >= left) {
    if (arr[right] < arr[pivot] && arr[left] > arr[pivot]) {
      // animations.push([])
      swap(arr, right, left);
    }

    if (arr[right] >= arr[pivot]) {
      right--;
    }

    if (arr[left] <= arr[pivot]) {
      left++;
    }
  }

  if (pivot !== right) {
    swap(arr, right, pivot);
  }

  return right;
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
