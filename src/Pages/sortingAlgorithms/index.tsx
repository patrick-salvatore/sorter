import React, { useState, useEffect } from 'react';
import SortingBars from 'components/sorting-bars';
import 'scss/sorting-algorithms.scss';

export const SortingAlgorithms = (): JSX.Element => {
  return (
    <div className="sorting-alorigthms__wrapper">
      <SortingBars />
    </div>
  );
};
