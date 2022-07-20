import React from 'react';
import PropTypes from 'prop-types';
import './PeopleTable.scss';
import { PersonRow } from '../PersonRow/PersonRow';

export const PeopleTable = ({ people }) => (
  <table className="PeopleTable">
    <th className="PeopleTable__headers">
      <div className="PeopleTable__header">
        <div>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="PeopleTable__checkbox"
          >
            <path
              d="M10.6667 1.33333V10.6667H1.33333V1.33333H10.6667ZM10.6667
              0H1.33333C0.6 0 0 0.6 0 1.33333V10.6667C0 11.4 0.6 12 1.33333
              12H10.6667C11.4 12 12 11.4 12 10.6667V1.33333C12
              0.6 11.4 0 10.6667 0Z"
              fill="#777777"
            />
          </svg>
          <p className="PeopleTable__name">Name</p>
        </div>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="PeopleTable__az"
        >
          <path
            d="M8.95998 2.10666L7.38665 0.533325L5.81332
            2.10666H8.95998ZM5.92665 10.82H7.15332L4.15998
            3.17999H3.06665L0.0666504 10.82H1.29332L1.90665
            9.18666H5.31332L5.92665 10.82ZM2.31332 8.09333L3.60665
            4.63999L4.89998 8.09333H2.31332ZM7.38665 13.4667L8.93998
            11.9133H5.83332L7.38665 13.4667ZM13.44 4.02666V3.18666H7.
            90665V4.25333H11.8267L7.87998 9.95999V10.82H13.5667V9.
            75999H9.48665L13.44 4.02666Z"
            fill="#C0C0C0"
          />
        </svg>
      </div>
    </th>
    <th className="PeopleTable__headers">
      <div className="PeopleTable__header">
        <p className="PeopleTable__name">ID</p>
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="PeopleTable__arrows"
        >
          <path
            d="M4.00006 1.88667L6.1134 4L7.0534 3.06L4.00006 0L0.940063
            3.06L1.88673 4L4.00006 1.88667ZM4.00006 10.1133L1.88673 8L0.94673
            8.94L4.00006 12L7.06006 8.94L6.1134 8L4.00006 10.1133Z"
            fill="#C0C0C0"
          />
        </svg>
      </div>
    </th>
    <th className="PeopleTable__headers">Class</th>
    <th className="PeopleTable__headers">
      <div className="PeopleTable__header">
        <p className="PeopleTable__name">Av. Score, %</p>
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="PeopleTable__arrows"
        >
          <path
            d="M4.00006 1.88667L6.1134 4L7.0534 3.06L4.00006 0L0.940063
            3.06L1.88673 4L4.00006 1.88667ZM4.00006 10.1133L1.88673 8L0.94673
            8.94L4.00006 12L7.06006 8.94L6.1134 8L4.00006 10.1133Z"
            fill="#C0C0C0"
          />
        </svg>
      </div>
    </th>
    <th className="PeopleTable__headers">
      <div className="PeopleTable__header">
        <p className="PeopleTable__name">Av. Speed</p>
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="PeopleTable__arrows"
        >
          <path
            d="M4.00006 1.88667L6.1134 4L7.0534 3.06L4.00006 0L0.940063
            3.06L1.88673 4L4.00006 1.88667ZM4.00006 10.1133L1.88673 8L0.94673
            8.94L4.00006 12L7.06006 8.94L6.1134 8L4.00006 10.1133Z"
            fill="#C0C0C0"
          />
        </svg>
      </div>
    </th>
    <th className="PeopleTable__headers">Parents</th>

    <tbody className="PeopleTable__content">
      {people.data.map(person => (
        <PersonRow person={person} key={person.slug} />
      ))}
    </tbody>
  </table>
);

PeopleTable.propTypes = {
  people: PropTypes.element.isRequired,
};
