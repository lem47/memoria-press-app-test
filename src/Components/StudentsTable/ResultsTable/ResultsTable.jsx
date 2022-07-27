import React from 'react';
import PropTypes from 'prop-types';
import './ResultsTable.scss';
import { v4 as uuidv4 } from 'uuid';
import { ResultsRow } from '../ResultsRow/ResultsRow';

export const ResultsTable = ({ student }) => (
  <table className="ResultsTable">
    <thead>
      <tr>
        <th className="ResultsTable__header">
          #
        </th>
        <th className="ResultsTable__header">
          Test Label
        </th>
        <th className="ResultsTable__header">
          Score
        </th>
        <th className="ResultsTable__header">
          Speed
        </th>
        <th className="ResultsTable__header">
          Total Q-ns
        </th>
        <th className="ResultsTable__header">
          Exp. Speed
        </th>
        <th className="ResultsTable__header">
          Concept
        </th>
        <th className="ResultsTable__header">
          Date
        </th>
        <th className="ResultsTable__header" style={{ width: 50 }}>
          Absent
        </th>
      </tr>
    </thead>
    <tbody className="ResultsTable__content">
      {student.tests.map((test, index) => (
        <ResultsRow
          key={uuidv4()}
          test={test}
          index={index + 1}
        />
      ))}
    </tbody>
  </table>
);

ResultsTable.propTypes = {
  student: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    class: PropTypes.string,
    score: PropTypes.string,
    speed: PropTypes.string,
    parents: PropTypes.arrayOf(PropTypes.string),
    tests: PropTypes.arrayOf(PropTypes.object),
  }),
};

ResultsTable.defaultProps = {
  student: {},
};
