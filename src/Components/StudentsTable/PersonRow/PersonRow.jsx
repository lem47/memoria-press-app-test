import React from 'react';
import PropTypes from 'prop-types';
import './PersonRow.scss';

export const PersonRow = ({ person }) => (
  <tr className="PersonRow">
    <td className="PersonRow__value">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="PersonRow__checkbox"
      >
        <path
          d="M10.6667 1.33333V10.6667H1.33333V1.33333H10.6667ZM10.6667
          0H1.33333C0.6 0 0 0.6 0 1.33333V10.6667C0 11.4 0.6 12 1.33333
          12H10.6667C11.4 12 12 11.4 12 10.6667V1.33333C12
          0.6 11.4 0 10.6667 0Z"
          fill="#777777"
        />
      </svg>
      {person.name}
    </td>
    <td className="PersonRow__value">{person.id}</td>
    <td className="PersonRow__value">{person.class}</td>
    <td className="PersonRow__value">
      {person.score.slice(0, -1) >= 90
      && <p style={{ color: '#4285F4' }}>{person.score}</p>}
      {person.score.slice(0, -1) >= 80 && person.score.slice(0, -1) <= 89
      && <p style={{ color: '#0F9D58' }}>{person.score}</p>}
      {person.score.slice(0, -1) >= 50 && person.score.slice(0, -1) <= 79
      && <p style={{ color: '#E2B534' }}>{person.score}</p>}
      {person.score.slice(0, -1) <= 49
      && <p style={{ color: '#DB4437' }}>{person.score}</p>}
    </td>
    <td className="PersonRow__value">
      {person.speed === 'Above Expected'
      && <p style={{ color: '#4285F4' }}>Above Expected</p>}
      {person.speed === 'As Expected'
      && <p style={{ color: '#0F9D58' }}>As Expected</p>}
      {person.speed === 'Below Expected'
      && <p style={{ color: '#DB4437' }}>Below Expected</p>}
    </td>
    <td className="PersonRow__value">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="PersonRow__info"
      >
        <path
          d="M6.33325 10.3334H7.66659V6.33337H6.33325V10.3334ZM6.99992
          0.333374C3.31992 0.333374 0.333252 3.32004 0.333252 7.00004C0.333252
          10.68 3.31992 13.6667 6.99992 13.6667C10.6799 13.6667 13.6666 10.68
          13.6666 7.00004C13.6666 3.32004 10.6799 0.333374 6.99992
          0.333374ZM6.99992 12.3334C4.05992 12.3334 1.66659 9.94004 1.66659
          7.00004C1.66659 4.06004 4.05992 1.66671 6.99992 1.66671C9.93992
          1.66671 12.3333 4.06004 12.3333 7.00004C12.3333 9.94004 9.93992
          12.3334 6.99992 12.3334ZM6.33325 5.00004H7
          .66659V3.66671H6.33325V5.00004Z"
          fill="#C0C0C0"
        />
      </svg>
      {person.parents[0]}
      {', '}
      {person.parents[1]}
    </td>
  </tr>
);

PersonRow.propTypes = {
  person: PropTypes.element.isRequired,
};
