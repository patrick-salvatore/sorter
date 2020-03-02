export const mergeSort = (arr: number[] = []): number[] => {
  if (arr.length > 1) {
    const mid = Math.floor(arr.length / 2);
    const low = arr.slice(0, mid);
    const high = arr.slice(mid + 1, arr.length - 1);
    const auxArray = arr.slice();
    const output = [];
    mergeSort(low);
    mergeSort(high);

    let i = 0;
    let j = 0;
    let k = 0;

    while (i < low.length && j < high.length) {
      if (low[i] < high[i]) {
        arr[k] = low[i];
        i++;
      } else {
        arr[k] = high[j];
        j++;
      }
      k++;
    }

    while (i < low.length) {
      arr[k] = low[i];
      i++;
      k++;
    }

    while (j < high.length) {
      arr[k] = high[i];
      j++;
      k++;
    }
  }

  return arr;
};
