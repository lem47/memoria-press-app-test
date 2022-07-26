import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './redux/dataSlice';
import './App.scss';

import { Header } from './Components/Header/Header';
import { FilterBar } from './Components/FilterBar/FilterBar';
import { SearchBar } from './Components/SearchBar/SearchBar';
import { PeoplePage } from './Components/StudentsTable/PeoplePage/PeoplePage';

export const App = () => {
  const dispatch = useDispatch();
  const {
    page,
    size,
    search,
    sortBy,
    sortDir,
  } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchData({
      page,
      size,
      search,
      sortBy,
      sortDir,
    }));
  }, [
    page,
    size,
    search,
    sortBy,
    sortDir,
  ]);

  return (
    <div className="App">
      <Header />
      <FilterBar />
      <SearchBar />
      <PeoplePage />
    </div>
  );
};
