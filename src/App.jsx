import React from 'react';
import './App.scss';

import { Header } from './Components/Header/Header';
import { FilterBar } from './Components/FilterBar/FilterBar';
import { SearchBar } from './Components/SearchBar/SearchBar';
import { PeoplePage } from './Components/StudentsTable/PeoplePage/PeoplePage';

export const App = () => (
  <div className="App">
    <Header />
    <FilterBar />
    <SearchBar />
    <PeoplePage />
  </div>
);
