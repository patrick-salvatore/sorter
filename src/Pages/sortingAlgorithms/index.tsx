import React, { useState, useEffect } from 'react';
import { generateRandomIntArray } from 'utils/index';
import { quickSort, mergeSort } from 'utils/algorithms';
import SortingBars from 'components/sorting-bars';
import Toolbar from 'components/Toolbar';
// import DraggableMenu from 'components/draggable-menu';

import 'scss/sorting-algorithms.scss';

export const SortingAlgorithms = (): JSX.Element => {
  const [randomArray, setRandomArray] = useState<Array<number>>([]);

  useEffect(() => {
    setRandomArray(generateRandomIntArray(10, 550));
    return (): void => {
      setRandomArray([]);
    };
  }, []);

  const resetArray = (): void => {
    setRandomArray(generateRandomIntArray(10, 550));
  };

  const quickSortBtn = (): void => {
    const sortedArr = quickSort(randomArray, 0, randomArray.length - 1);
    setRandomArray([...sortedArr]);
  };

  const mergeSortBtn = (): void => {
    const sortedArr = mergeSort(randomArray);
    console.log(sortedArr);
    // setRandomArray([...sortedArr]);
  };

  return (
    <div className="sorting-alorigthms__wrapper">
      <SortingBars randomArray={randomArray} />
      <Toolbar
        quickSortBtn={quickSortBtn}
        mergeSortBtn={mergeSortBtn}
        resetArray={resetArray}
      />
    </div>
  );
};
