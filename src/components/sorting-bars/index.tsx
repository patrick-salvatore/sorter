import React from 'react';

const index = ({ randomArray }): JSX.Element => {
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
