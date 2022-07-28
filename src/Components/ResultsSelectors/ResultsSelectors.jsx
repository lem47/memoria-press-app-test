/* eslint-disable max-len */
import React from 'react';
import './ResultsSelectors.scss';

export const ResultsSelectors = () => (
  <div className="ResultsSelectors__selectors">
    <div className="ResultsSelectors__selector">
      <p className="ResultsSelectors__selectorTitle">All concepts</p>
      <svg
        width="10"
        height="5"
        viewBox="0 0 10 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ResultsSelectors__arrow"
      >
        <path d="M0.833252 0.833374L4.99992 5.00004L9.16658 0.833374H0.833252Z" fill="#5B5B5B" />
      </svg>
    </div>
    <div className="ResultsSelectors__selector">
      <p className="ResultsSelectors__selectorTitle">All score</p>
      <svg
        width="10"
        height="5"
        viewBox="0 0 10 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ResultsSelectors__arrow"
      >
        <path d="M0.833252 0.833374L4.99992 5.00004L9.16658 0.833374H0.833252Z" fill="#5B5B5B" />
      </svg>
    </div>
    <div className="ResultsSelectors__selector">
      <p className="ResultsSelectors__selectorTitle">All speed</p>
      <svg
        width="10"
        height="5"
        viewBox="0 0 10 5"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ResultsSelectors__arrow"
      >
        <path d="M0.833252 0.833374L4.99992 5.00004L9.16658 0.833374H0.833252Z" fill="#5B5B5B" />
      </svg>
    </div>
    <div className="ResultsSelectors__selectorDate">
      <p className="ResultsSelectors__selectorDateTitle">Select Period</p>
      <svg
        width="12"
        height="14"
        viewBox="0 0 12 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 6.16663H2.66667V7.49996H4V6.16663ZM6.66667 6.16663H5.33333V7.49996H6.66667V6.16663ZM9.33333 6.16663H8V7.49996H9.33333V6.16663ZM10.6667 1.49996H10V0.166626H8.66667V1.49996H3.33333V0.166626H2V1.49996H1.33333C0.979711 1.49996 0.640573 1.64043 0.390524 1.89048C0.140476 2.14053 0 2.47967 0 2.83329V12.1666C0 12.5202 0.140476 12.8594 0.390524 13.1094C0.640573 13.3595 0.979711 13.5 1.33333 13.5H10.6667C11.0203 13.5 11.3594 13.3595 11.6095 13.1094C11.8595 12.8594 12 12.5202 12 12.1666V2.83329C12 2.47967 11.8595 2.14053 11.6095 1.89048C11.3594 1.64043 11.0203 1.49996 10.6667 1.49996ZM10.6667 12.1666H1.33333V4.83329H10.6667V12.1666Z" fill="#C0C0C0" />
      </svg>
    </div>
    <svg
      width="16"
      height="11"
      viewBox="0 0 16 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ResultsSelectors__refresh"
    >
      <path d="M12.6667 2.83329L10.0001 5.49996H12.0001C12.0001 7.70663 10.2067 9.49996 8.00008 9.49996C7.32675 9.49996 6.68675 9.33329 6.13341 9.03329L5.16008 10.0066C5.98008 10.5266 6.95341 10.8333 8.00008 10.8333C10.9467 10.8333 13.3334 8.44663 13.3334 5.49996H15.3334L12.6667 2.83329ZM4.00008 5.49996C4.00008 3.29329 5.79341 1.49996 8.00008 1.49996C8.67341 1.49996 9.31341 1.66663 9.86675 1.96663L10.8401 0.993292C10.0201 0.473292 9.04675 0.166626 8.00008 0.166626C5.05341 0.166626 2.66675 2.55329 2.66675 5.49996H0.666748L3.33341 8.16663L6.00008 5.49996H4.00008Z" fill="#C0C0C0" />
    </svg>
  </div>
);
