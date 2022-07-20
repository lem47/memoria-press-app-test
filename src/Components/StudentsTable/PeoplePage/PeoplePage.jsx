import React, { useEffect, useState } from 'react';
import './PeoplePage.scss';
import { getPeople } from '../api/api';
import { PeopleTable } from '../PeopleTable/PeopleTable';
import { Spinner } from '../Spinner/Spinner';
import Pagination from '../../Pagination/Pagination';

export const PeoplePage = () => {
  const [people, setPeople] = useState(null);
  const [page, setPageNumber] = useState(1);
  const [size, setPageSize] = useState(10);

  const changePage = (newPage) => {
    setPageNumber(newPage);
  };

  const changeSize = (newSize) => {
    setPageSize(newSize);
  };

  useEffect(() => {
    const getPeopleFromServer = async() => {
      const result = await getPeople(page, size);

      setPeople(result);
    };

    getPeopleFromServer();
  }, [page, size]);

  return (
    <div className="PeoplePage">
      {people ? (
        <>
          <PeopleTable people={people} />
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