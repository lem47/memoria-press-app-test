import React, { useState } from 'react';
import './SearchBar.scss';

export const SearchBar = () => {
  const [value, setValue] = useState('');

  return (
    <div className="SearchBar">
      <h1 className="SearchBar__title">
        Students
      </h1>
      <form className="SearchBar__form">
        <input
          className="SearchBar__input"
          placeholder="Enter Student Name, Parent or ID here"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="SearchBar__search"
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
      </form>
      <div className="SearchBar__export">
        <svg
          width="10"
          height="12"
          viewBox="0 0 10 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.99992 0.5L0.333252 5.16667H2.99992V9.16667H6.99992V5.
            16667H9.66659L4.99992 0.5ZM5.66659 3.83333V7.83333H4.33325V3.
            83333H3.55325L4.99992 2.38667L6.44659 3.83333H5.66659ZM0.333252
            10.5H9.66659V11.8333H0.333252V10.5Z"
            fill="#C0C0C0"
          />
        </svg>
        <p>
          Export CSV
        </p>
      </div>
    </div>
  );
};
