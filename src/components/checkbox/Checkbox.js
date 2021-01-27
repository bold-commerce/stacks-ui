import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import './Checkbox.css';

function Checkbox(props) {
  const { className, checked, disabled, ...otherProps } = props;

  const classNames = cn([
    'stx-checkbox',
    { 'stx-checkbox--is-disabled': disabled },
    { 'stx-checkbox--is-checked': checked },
    className,
  ]);

  return (
    <span className={classNames} >
      {/* This can be hidden and styles can be applied to stx-checkbox__mount */}
      <input
        {...otherProps}
        type='checkbox'
        className='stx-checkbox__input'
        checked={checked}
        disabled={disabled}
      />

      {/* Mount point for custom checkbox styles */}
      <span className='stx-checkbox__mount' />

    </span>
  );
}

Checkbox.propTypes = {
  /** Optional className for the chekcbox component */
  className: PropTypes.string,

  /** Whether or not the checkbox is checked */
  checked: PropTypes.bool,
  /** Whether or not the checkbox is disabled */
  disabled: PropTypes.bool,
};

export default Checkbox;
