import React, { useState, useEffect } from 'react';
import { generateRandomIntArray } from 'utils/index';
import { quickSort, mergeSort, bubbleSort, heapSort } from 'utils/algorithms';
import SortingBars from 'components/sorting-bars';
import Toolbar from 'components/toolbar';

import 'scss/sorting-algorithms.scss';

export const SortingAlgorithms = (): JSX.Element => {
  const [randomArray, setRandomArray] = useState<Array<number>>([]);

  const ANIMATION_DELAY = 12; //ms
  const SECONDARY_COLOR = 'red'; //ms
  const PRIMARY_COLOR = 'purple'; //ms
  // const arrayBars = Array.from(
  //   document.getElementsByClassName('array-bar') as HTMLCollectionOf<
  //     HTMLElement
  //   >
  // ); //Array Bars

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
    console.log(animations);

    for (let i = 0; i < animations.length; i++) {
      const color = i % 3 === 0 ? 'red' : 'purple';
      const isColorChange = i % 3 === 0 && i !== 0;

      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_DELAY);
      } else {
        const [barIndex, newHeight] = animations[i];
        const barStyle = arrayBars[barIndex] && arrayBars[barIndex].style;

        console.log(barIndex, newHeight);
        setTimeout(() => {
          if (barStyle) barStyle.height = `${newHeight}px`;
        }, i * ANIMATION_DELAY);
      }
    }
  };

  const mergeSortBtn = (): void => {
    const animations = mergeSort(randomArray);
    const arrayBars = Array.from(
      document.getElementsByClassName('array-bar') as HTMLCollectionOf<
        HTMLElement
      >
    ); //Array Bars

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
    const arrayBars = Array.from(
      document.getElementsByClassName('array-bar') as HTMLCollectionOf<
        HTMLElement
      >
    ); //Array Bars

    toggleButtons('disable');

    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 4 === 0 || i % 4 === 1;
      const [barOneIndex, barTwoIndex] = animations[i];
      const barOneStyle =
        arrayBars[barOneIndex] && arrayBars[barOneIndex].style;
      const barTwoStyle =
        arrayBars[barTwoIndex] && arrayBars[barTwoIndex].style;
      const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

      if (isColorChange === true) {
        setTimeout(() => {
          if (barOneStyle) barOneStyle.backgroundColor = color;
          if (barTwoStyle) barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_DELAY);
      } else {
        const [barIndex, newHeight] = animations[i];
        const barStyle = arrayBars[barIndex] && arrayBars[barIndex].style;
        if (barIndex === -1) {
          continue;
        }
        setTimeout(() => {
          barStyle.height = `${newHeight}px`;
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
