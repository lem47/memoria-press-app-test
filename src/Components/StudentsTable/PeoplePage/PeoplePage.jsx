import React, { useEffect, useState } from 'react';
import './PeoplePage.scss';
import { getStudents, getSortedStudents } from '../api/api';
import { PeopleTable } from '../PeopleTable/PeopleTable';
import { Spinner } from '../Spinner/Spinner';
import Pagination from '../../Pagination/Pagination';

export const PeoplePage = () => {
  const [people, setPeople] = useState(null);
  const [page, setPageNumber] = useState(1);
  const [size, setPageSize] = useState(10);
  const [sortBy, setSortBy] = useState('');
  const [dir, setDir] = useState(1);

  const changePage = (newPage) => {
    setPageNumber(newPage);
  };

  const changeSize = (newSize) => {
    setPageSize(newSize);
  };

  useEffect(() => {
    const getStudentsFromServer = async() => {
      const result = await getStudents(page, size);

      setPeople(result);
    };

    getStudentsFromServer();
  }, [page, size]);

  useEffect(() => {
    const getSortedStudentsFromServer = async() => {
      const result = await getSortedStudents(page, size, sortBy, dir);

      setPeople(result);
    };

    getSortedStudentsFromServer();
  }, [sortBy, dir]);

  const changeSortBy = (value) => {
    setSortBy(value);
    setDir(dir * -1);
  };

  return (
    <div className="PeoplePage">
      {people ? (
        <>
          <PeopleTable
            people={people}
            changeSortBy={changeSortBy}
          />
          <Pagination
            people={people}
            changePage={changePage}
            changeSize={changeSize}
          />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};
