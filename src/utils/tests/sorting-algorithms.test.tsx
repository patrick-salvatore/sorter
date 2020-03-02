import { quickSort, mergeSort } from '../algorithms';
import { generateRandomIntArray } from '../index';

const testArr = generateRandomIntArray(0, 200);

describe('SORTING ALGORITHMS', () => {
  it('QUICK SORT', () => {
    const qs = quickSort(testArr, 0, testArr.length - 1);
    const gen = testArr.sort((a, b) => a - b);

    expect(qs).toEqual(gen);
  });

  it('MERGE SORT', () => {
    const qs = mergeSort(testArr);
    const gen = testArr.sort((a, b) => a - b);

    expect(qs).toEqual(gen);
  });
});
