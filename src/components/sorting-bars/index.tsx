import React, { useState, useEffect } from 'react';
// import { Container } from 'styledComponents/containers';

const generateRandomNumber = function(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateRandomIntArray = function(
  min: number,
  max: number,
  length = 100
): number[] {
  const outputArr = [];

  for (let i = 0; i < length; i++) {
    outputArr.push(generateRandomNumber(min, max) as never);
  }

  return outputArr;
};

const index = (): JSX.Element => {
  const [randomArray, setRandomArray] = useState<Array<number>>([]);

  useEffect(() => {
    setRandomArray(generateRandomIntArray(5, 700));

    return (): void => {
      setRandomArray([]);
    };
  }, []);

  return (
    // <Container>
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
      {/* </Container> */}
    </div>
  );
};

export default index;
