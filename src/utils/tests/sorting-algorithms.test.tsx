import { quickSort, mergeSort, bubbleSort } from '../algorithms';
import { generateRandomIntArray } from '../index';

const testArr = generateRandomIntArray(0, 200);
const gen = testArr.sort((a, b) => a - b);

describe('SORTING ALGORITHMS', () => {
  it('QUICK SORT', () => {
    const { auxiliaryArr } = quickSort(testArr);
    expect(auxiliaryArr).toEqual(gen);
  });

  it('MERGE SORT', () => {
    const { auxiliaryArr } = mergeSort(testArr);
    expect(auxiliaryArr).toEqual(gen);
  });

  it('BUBBLE SORT', () => {
    const { auxiliaryArr } = bubbleSort(testArr);
    expect(auxiliaryArr).toEqual(gen);
  });
});
