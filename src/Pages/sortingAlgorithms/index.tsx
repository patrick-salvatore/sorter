import React, { useState, useEffect } from 'react';
import { generateRandomIntArray } from 'utils/index';
import { quickSort, mergeSort, bubbleSort, heapSort } from 'utils/algorithms';
import SortingBars from 'components/sorting-bars';
import Toolbar from 'components/Toolbar';

import 'scss/sorting-algorithms.scss';

export const SortingAlgorithms = (): JSX.Element => {
  const [randomArray, setRandomArray] = useState<Array<number>>([]);

  const ANIMATION_DELAY = 15; //ms
  const SECONDARY_COLOR = 'red'; //ms
  const PRIMARY_COLOR = 'purple'; //ms

  useEffect(() => {
    setRandomArray(generateRandomIntArray(10, 550));
    return (): void => {
      setRandomArray([]);
    };
  }, []);

  const disableAllButtons = (): void => {
    const buttons = document.getElementsByClassName('js-toolbar-button');
    const resetButton = document.getElementById(
      'js-toolbar-reset-button'
    ) as HTMLButtonElement;

    for (let i = 0; i < buttons.length; i++) {
      const btn = buttons[i] as HTMLButtonElement;
      btn.disabled = true;
    }

    resetButton.disabled = true;
  };

  const enableAllButtons = (): void => {
    const buttons = document.getElementsByClassName('js-toolbar-button');

    for (let i = 0; i < buttons.length; i++) {
      const btn = buttons[i] as HTMLButtonElement;
      btn.disabled = false;
    }
  };

  const enableResetButton = (): void => {
    const resetButton = document.getElementById(
      'js-toolbar-reset-button'
    ) as HTMLButtonElement;

    resetButton.disabled = false;
  };

  const toggleButtons = (operator: string): void => {
    switch (true) {
      case operator === 'disable':
        disableAllButtons();
        return;
      case operator === 'enable':
        enableAllButtons();
        return;
      case operator === 'enable-reset':
        enableResetButton();
        return;
      default:
        return;
    }
  };

  const resetArray = (): void => {
    const arrayBars = Array.from(
      document.getElementsByClassName('array-bar') as HTMLCollectionOf<
        HTMLElement
      >
    );

    for (let i = 0; i < arrayBars.length; i++) {
      arrayBars[i].style.backgroundColor = 'grey';
    }

    setRandomArray(generateRandomIntArray(10, 550));
    toggleButtons('enable');
  };

  const quickSortBtn = (): void => {
    const [animations, sortedArr] = quickSort(randomArray);
    const arrayBars = Array.from(
      document.getElementsByClassName('array-bar') as HTMLCollectionOf<
        HTMLElement
      >
    );
  };

  const mergeSortBtn = (): void => {
    const animations = mergeSort(randomArray);
    const arrayBars = Array.from(
      document.getElementsByClassName('array-bar') as HTMLCollectionOf<
        HTMLElement
      >
    );
    toggleButtons('disable');

    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? 'red' : 'purple';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_DELAY);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_DELAY);
      }
    }

    setTimeout(() => {
      for (let i = 0; i < arrayBars.length; i++) {
        arrayBars[i].style.backgroundColor = 'lime';
      }
      toggleButtons('enable-reset');
    }, animations.length * ANIMATION_DELAY);
  };

  const bubbleSortBtn = (): void => {
    const animations = bubbleSort(randomArray);
  };

  const heapSortBtn = (): void => {
    const animations = heapSort(randomArray);
    alert('HEAP SORT');
  };

  return (
    <div className="sorting-algorithms__wrapper">
      <SortingBars randomArray={randomArray} />
      <Toolbar
        quickSortBtn={quickSortBtn}
        mergeSortBtn={mergeSortBtn}
        bubbleSortBtn={bubbleSortBtn}
        heapSortBtn={heapSortBtn}
        resetArray={resetArray}
      />
    </div>
  );
};
