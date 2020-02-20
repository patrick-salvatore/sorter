import 'core-js/es/map';
import 'core-js/es/set';
import 'core-js/stable';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';

import React from 'react';
import { render } from 'react-dom';
import { AppView } from './routes';
// import { SortingAlgorithms } from 'Pages/sortingAlgorithms';

import 'scss/sorting-algorithms.scss';

const appRoot = document.getElementById('app-r--root');
const app = <AppView />;

module.hot && module.hot.accept();
render(app, appRoot);
