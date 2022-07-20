import React, { useEffect, useState } from 'react';
import './PeoplePage.scss';
import { getPeople } from '../api/api';
import { PeopleTable } from '../PeopleTable/PeopleTable';
import { Spinner } from '../Spinner/Spinner';

export const PeoplePage = () => {
  const [people, setPeople] = useState(null);

  useEffect(() => {
    const getPeopleFromServer = async() => {
      const result = await getPeople();

      setPeople(result);
    };

    getPeopleFromServer();
  }, []);

  return (
    <div className="PeoplePage">
      {people ? (
        <PeopleTable people={people} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};
