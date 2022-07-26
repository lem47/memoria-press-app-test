import React from 'react';
import './PeoplePage.scss';
import { useSelector } from 'react-redux';
import { PeopleTable } from '../PeopleTable/PeopleTable';
import Pagination from '../../Pagination/Pagination';
import { Spinner } from '../Spinner/Spinner';

export const PeoplePage = () => {
  const people = useSelector(state => state.data);

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
