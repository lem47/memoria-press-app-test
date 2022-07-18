import React from 'react';
import './FilterBar.scss';

export const FilterBar = () => (
  <div className="FilterBar">
    <div className="FilterBar__params">
      <div className="FilterBar__param">
        <p>
          Show all
        </p>
        <svg
          width="10"
          height="5"
          viewBox="0 0 10 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0L5 5L10 0H0Z" fill="#C0C0C0" />
        </svg>
      </div>
      <div className="FilterBar__param">
        <p>
          All grades
        </p>
        <svg
          width="10"
          height="5"
          viewBox="0 0 10 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0L5 5L10 0H0Z" fill="#C0C0C0" />
        </svg>
      </div>
      <div className="FilterBar__param">
        <p>
          All classes
        </p>
        <svg
          width="10"
          height="5"
          viewBox="0 0 10 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0L5 5L10 0H0Z" fill="#C0C0C0" />
        </svg>
      </div>
      <div className="FilterBar__param">
        <p>
          Av.Score
        </p>
        <svg
          width="10"
          height="5"
          viewBox="0 0 10 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0L5 5L10 0H0Z" fill="#C0C0C0" />
        </svg>
      </div>
      <div className="FilterBar__param">
        <p>
          Av.Speed
        </p>
        <svg
          width="10"
          height="5"
          viewBox="0 0 10 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0L5 5L10 0H0Z" fill="#C0C0C0" />
        </svg>
      </div>
      <div className="FilterBar__param">
        <p>
          All Classes
        </p>
        <svg
          width="10"
          height="5"
          viewBox="0 0 10 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0L5 5L10 0H0Z" fill="#C0C0C0" />
        </svg>
      </div>
    </div>
    <div className="FilterBar__clear">
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.1666 1.27337L9.22659 0.333374L5.49992 4.06004L1.77325
          0.333374L0.833252 1.27337L4.55992 5.00004L0.833252 8.72671L1.77325
          9.66671L5.49992 5.94004L9.22659 9.66671L10.1666 8.72671L6.43992
          5.00004L10.1666 1.27337Z"
          fill="#C0C0C0"
        />
      </svg>
      <p>
        Clear all
      </p>
    </div>
  </div>
);
