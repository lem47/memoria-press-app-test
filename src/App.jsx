import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from './toolkitRedux/services/studentsApi';
import './App.scss';

import { Header } from './Components/Header/Header';
import { FilterBar } from './Components/FilterBar/FilterBar';
import { SearchBar } from './Components/SearchBar/SearchBar';
import { PeoplePage } from './Components/StudentsTable/PeoplePage/PeoplePage';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="App">
      <Header />
      <FilterBar />
      <SearchBar />
      <PeoplePage />
    </div>
  );
};
