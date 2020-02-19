import React, { useEffect, useState } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { PathFinder } from 'Pages/pathFinder';
import { SortingAlgorithms } from 'Pages/sortingAlgorithms';
import Navigation from 'components/NavigationTop';

export const AppView: React.FC = (): JSX.Element => {
  const [component, setComponent] = useState();

  return (
    <>
      <Navigation />
    </>
  );
};
