import React, { useState, useEffect } from 'react';
import { generateRandomIntArray } from 'utils/index';
import { quickSort } from 'utils/algorithms/quickSort';
import SortingBars from 'components/sorting-bars';
// import DraggableMenu from 'components/draggable-menu';
import Toolbar from 'components/Toolbar';
import 'scss/sorting-algorithms.scss';

export const SortingAlgorithms = (): JSX.Element => {
  const [randomArray, setRandomArray] = useState<Array<number>>([]);

  useEffect(() => {
    setRandomArray(generateRandomIntArray(10, 550));
    return (): void => {
      setRandomArray([]);
    };
  }, []);

  const sortBtn = (): void => {
    const sortedArr = quickSort(randomArray, 0, randomArray.length - 1);
    setRandomArray([...sortedArr]);
  };

  return (
    <div className="sorting-alorigthms__wrapper">
      <SortingBars randomArray={randomArray} />
      <Toolbar />
    </div>
  );
};
