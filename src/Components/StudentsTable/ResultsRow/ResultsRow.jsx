/* eslint-disable max-len */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ResultsRow.scss';

export const ResultsRow = ({ test, index }) => {
  const [selectedRow, setSelectedRow] = useState(false);

  return (
    <tr
      onClick={() => setSelectedRow(!selectedRow)}
      className={selectedRow ? 'ResultsRow active' : 'ResultsRow'}
    >
      <td className="ResultsRow">
        {`${index}.`}
      </td>
      <td className="ResultsRow">
        {test.label}
      </td>
      <td className="ResultsRow">
        {test.score ? test.score : 'NIL'}
      </td>
      <td className="ResultsRow">
        {test.speed ? test.speed : 'NIL'}
      </td>
      <td className="ResultsRow">
        {test.total}
      </td>
      <td className="ResultsRow">
        {test.expSpeed}
      </td>
      <td className="ResultsRow">
        {test.concept}
      </td>
      <td className="ResultsRow">
        {test.date}
      </td>
      <td className="ResultsRow">
        {test.absent
          ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: 50 }}
            >
              <path d="M13.8333 0.5H2.16667C1.25 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.25 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V2.16667C15.5 1.25 14.75 0.5 13.8333 0.5ZM13.8333 13.8333H2.16667V2.16667H13.8333V13.8333ZM12.9917 5.5L11.8167 4.31667L6.325 9.80833L4.175 7.66667L2.99167 8.84167L6.325 12.1667L12.9917 5.5Z" fill="#323232" />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: 50 }}
            >
              <path d="M13.8333 2.16667V13.8333H2.16667V2.16667H13.8333ZM13.8333 0.5H2.16667C1.25 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.75 1.25 15.5 2.16667 15.5H13.8333C14.75 15.5 15.5 14.75 15.5 13.8333V2.16667C15.5 1.25 14.75 0.5 13.8333 0.5Z" fill="#777777" />
            </svg>
          )}
      </td>
    </tr>
  );
};

ResultsRow.propTypes = {
  test: PropTypes.shape({
    label: PropTypes.string,
    score: PropTypes.number,
    speed: PropTypes.string,
    total: PropTypes.number,
    expSpeed: PropTypes.string,
    concept: PropTypes.string,
    date: PropTypes.string,
    absent: PropTypes.bool,
  }),
  index: PropTypes.number,
};

ResultsRow.defaultProps = {
  test: {},
  index: 0,
};
