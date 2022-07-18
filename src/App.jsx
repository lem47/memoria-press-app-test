import React from 'react';
import './App.scss';

import { Header } from './Components/Header/Header';
import { FilterBar } from './Components/FilterBar/FilterBar';

export const App = () => (
  <div className="App">
    <Header />
    <FilterBar />
  </div>
);
