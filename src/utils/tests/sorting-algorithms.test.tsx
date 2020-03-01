import { quickSort } from '../algorithms/quickSort';
import { generateRandomIntArray } from '../index';

const testArr = generateRandomIntArray(0, 200);

describe('SORTING ALGORITHMS', () => {
  it('QUICK SORT', () => {
    const qs = quickSort(testArr, 0, testArr.length - 1);
    const gen = testArr.sort((a, b) => a - b);

    expect(qs).toEqual(gen);
  });
});
