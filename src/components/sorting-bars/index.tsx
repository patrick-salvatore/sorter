import React, { useState, useEffect } from 'react';
import { generateRandomIntArray } from 'utils';
import { quickSort } from 'utils/algorithms/quickSort';

const test = generateRandomIntArray(5, 690);
console.log(quickSort(test, 0, test.length - 1));

const index = (): JSX.Element => {
  const [randomArray, setRandomArray] = useState<Array<number>>([]);

  useEffect(() => {
    setRandomArray(generateRandomIntArray(5, 690));
    return (): void => {
      setRandomArray([]);
    };
  }, []);

  return (
    <div className="sorting-bars__wrapper">
      {randomArray.map((el, i) => (
        <div
          key={i}
          style={{
            height: `${el}px`,
            width: '10px',
            margin: '0 1px',
            backgroundColor: 'red',
          }}
        ></div>
      ))}
    </div>
  );
};

export default index;
