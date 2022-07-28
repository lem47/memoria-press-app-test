import React from 'react';
import PropTypes from 'prop-types';
import './PersonResult.scss';
import { ResultsTable } from '../ResultsTable/ResultsTable';
import { ResultsSelectors } from '../../ResultsSelectors/ResultsSelectors';
import { ResultsLegends } from '../../ResultsLegends/ResultsLegends';

export const PersonResult = ({ student }) => (
  <td className="PersonResult" colSpan={6}>
    <div className="PersonResult__container">
      <div className="PersonResult__title">
        <p className="PersonResult__titleKey">Student:</p>
        <p className="PersonResult__titleValue">{student.name}</p>
        <p className="PersonResult__titleKey">ID:</p>
        <p className="PersonResult__titleValue">{student.id}</p>
      </div>
      <ResultsSelectors />
      <div className="PersonResult__devider" />
      <ResultsLegends />
      <ResultsTable student={student} />
      <div className="PersonResult__devider" style={{ height: 2 }} />
      <div className="PersonResult__average">
        <p>Average</p>
        <div className="PersonResult__averageScore">
          {student.score.slice(0, -1) >= 90
          && <p style={{ color: '#4285F4' }}>{student.score}</p>}
          {student.score.slice(0, -1) >= 80 && student.score.slice(0, -1) <= 89
          && <p style={{ color: '#0F9D58' }}>{student.score}</p>}
          {student.score.slice(0, -1) >= 50 && student.score.slice(0, -1) <= 79
          && <p style={{ color: '#E2B534' }}>{student.score}</p>}
          {student.score.slice(0, -1) <= 49
          && <p style={{ color: '#DB4437' }}>{student.score}</p>}
        </div>
        <div className="PersonResult__averageSpeed">
          {student.speed === 'Above Expected'
          && <p style={{ color: '#4285F4' }}>Above Expected</p>}
          {student.speed === 'As Expected'
          && <p style={{ color: '#0F9D58' }}>As Expected</p>}
          {student.speed === 'Below Expected'
          && <p style={{ color: '#DB4437' }}>Below Expected</p>}
        </div>
      </div>
    </div>
  </td>
);

PersonResult.propTypes = {
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

PersonResult.defaultProps = {
  student: {},
};
