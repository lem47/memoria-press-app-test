import React from 'react';
import './PeoplePage.scss';
import { useSelector } from 'react-redux';
import { PeopleTable } from '../PeopleTable/PeopleTable';
import { Spinner } from '../Spinner/Spinner';
import Pagination from '../../Pagination/Pagination';

export const PeoplePage = () => {
  const people = useSelector(state => state.data.data);

  return (
    <div className="PeoplePage">
      {people ? (
        <>
          <PeopleTable />
          <Pagination />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};
