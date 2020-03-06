const sleep = ms => {
  return new Promise(res => setTimeout(res, ms));
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, start, end, animations) => {
  const pivot = arr[end];
  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }

  swap(arr, pivotIndex, end);

  return pivotIndex;
};

// function partition(auxillaryArray, startIndex, endIndex, animations): number {
//   const pivot = auxillaryArray[endIndex];
//   let pivotIndex = startIndex;
//   for (let i = startIndex; i <= endIndex - 1; i++) {
//     animations.push([i, endIndex]);
//     animations.push([i, endIndex]);
//     if (auxillaryArray[i] <= pivot) {
//       //Swap these two heights
//       animations.push([i, auxillaryArray[pivotIndex]]);
//       animations.push([pivotIndex, auxillaryArray[i]]);
//       swap(auxillaryArray, i, pivotIndex);
//       pivotIndex++;
//     } else {
//       animations.push([-1, -1]);
//       animations.push([-1, -1]);
//     }
//     animations.push([-1, -1]);
//     animations.push([-1, -1]);
//   }
//   animations.push([-1, -1]);
//   animations.push([-1, -1]);
//   animations.push([-1, -1]);
//   animations.push([-1, -1]);
//   //Swap these two heights
//   animations.push([pivotIndex, auxillaryArray[endIndex]]);
//   animations.push([endIndex, auxillaryArray[pivotIndex]]);
//   swap(auxillaryArray, pivotIndex, endIndex);
//   return pivotIndex;
// }

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
  if (arr.length <= 1) return arr;

  doQuickSort(auxiliaryArr, 0, arr.length - 1, animations);

  return [animations, auxiliaryArr];
};
