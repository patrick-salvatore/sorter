import React, { useState, useEffect } from 'react';
import { generateRandomIntArray } from 'utils/index';
import { quickSort, mergeSort } from 'utils/algorithms';
import SortingBars from 'components/sorting-bars';
import Toolbar from 'components/Toolbar';
// import DraggableMenu from 'components/draggable-menu';

import 'scss/sorting-algorithms.scss';

export const SortingAlgorithms = (): JSX.Element => {
  const [randomArray, setRandomArray] = useState<Array<number>>([]);

  const ANIMATION_DELAY = 15; //ms

  useEffect(() => {
    setRandomArray(generateRandomIntArray(10, 550));
    return (): void => {
      setRandomArray([]);
    };
  }, []);

  const disableAllButtons = (): void => {
    const buttons = document.getElementsByClassName('js-toolbar-button');

    for (let i = 0; i < buttons.length; i++) {
      const btn = buttons[i] as HTMLButtonElement;
      btn.disabled = true;
    }
  };

  const enableAllButtons = (): void => {
    const buttons = document.getElementsByClassName('js-toolbar-button');

    for (let i = 0; i < buttons.length; i++) {
      const btn = buttons[i] as HTMLButtonElement;
      btn.disabled = false;
    }
  };

  const toggleButtons = (operator: string): void => {
    switch (true) {
      case operator === 'disable':
        disableAllButtons();
        return;
      case operator === 'enable':
        enableAllButtons();
        return;
      default:
        return;
    }
  };

  const resetArray = (): void => {
    setRandomArray(generateRandomIntArray(10, 550));
    toggleButtons('enable');
  };

  const quickSortBtn = (): void => {
    const animations = quickSort(randomArray);
    console.log(animations);
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
    }, animations.length * ANIMATION_DELAY);
  };

  return (
    <div className="sorting-algorithms__wrapper">
      <SortingBars randomArray={randomArray} />
      <Toolbar
        quickSortBtn={quickSortBtn}
        mergeSortBtn={mergeSortBtn}
        resetArray={resetArray}
      />
    </div>
  );
};
