import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeSearch } from '../../redux/dataSlice';
import ExportCSV from './ExportCSV/ExportCSV';
import './SearchBar.scss';

export const SearchBar = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  return (
    <div className="SearchBar">
      <h1 className="SearchBar__title">
        Students
      </h1>
      <form
        className="SearchBar__form"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(changeSearch(value));
        }}
      >
        <input
          className="SearchBar__input"
          placeholder="Enter Student Name, Parent or ID here"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        {value.length === 0 ? (
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="SearchBar__search"
            onClick={() => {
              dispatch(changeSearch(value));
            }}
          >
            <path
              d="M8.33333 7.33333H7.80667L7.62 7.15333C8.27333 6.39333
              8.66667 5.40667 8.66667 4.33333C8.66667 1.94 6.72667 0
              4.33333 0C1.94 0 0 1.94 0 4.33333C0 6.72667 1.94 8.66667
              4.33333 8.66667C5.40667 8.66667 6.39333 8.27333 7.15333
              7.62L7.33333 7.80667V8.33333L10.6667 11.66L11.66 10.6667L8.33333
              7.33333ZM4.33333 7.33333C2.67333 7.33333 1.33333 5.99333 1.33333
              4.33333C1.33333 2.67333 2.67333 1.33333 4.33333 1.33333C5.99333
              1.33333 7.33333 2.67333 7.33333 4.33333C7.33333 5.99333 5.99333
              7.33333 4.33333 7.33333Z"
              fill="#C0C0C0"
            />
          </svg>
        ) : (
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="SearchBar__search"
            onClick={() => {
              dispatch(changeSearch(''));
              setValue('');
            }}
          >
            <path
              d="M10.1666 1.27337L9.22659 0.333374L5.49992 4.06004L1.77325
              0.333374L0.833252 1.27337L4.55992 5.00004L0.833252 8.72671L1.77325
              9.66671L5.49992 5.94004L9.22659 9.66671L10.1666 8.72671L6.43992
              5.00004L10.1666 1.27337Z"
              fill="#C0C0C0"
            />
          </svg>
        )}
      </form>
      <ExportCSV />
    </div>
  );
};
