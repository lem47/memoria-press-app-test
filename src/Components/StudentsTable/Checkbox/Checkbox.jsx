import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ type, name, id, handleClick, isChecked }) => (
  <input
    type={type}
    name={name}
    id={id}
    onChange={handleClick}
    checked={isChecked}
    style={{ cursor: 'pointer' }}
  />
);

export default Checkbox;

Checkbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
  handleClick: PropTypes.func,
  isChecked: PropTypes.bool,
};

Checkbox.defaultProps = {
  type: 'checkbox',
  name: '',
  id: 100,
  handleClick: () => {},
  isChecked: false,
};
