import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import './Radio.css';

function Radio(props) {
  const { className, checked, disabled, messageType, value, ...otherProps } = props;

  const classNames = cn([
    'stx-radio',
    { 'stx-radio--is-disabled': disabled },
    { 'stx-radio--is-checked': checked },
    { 'stx-radio--alert': messageType === 'alert' || messageType === 'error' },
    { 'stx-radio--warning': messageType === 'warning' },
    { 'stx-radio--success': messageType === 'success' },
    className,
  ]);

  return (
    <span
      className={classNames}
    >
      <input
        {...otherProps}
        role='radio'
        type='radio'
        value={value}
        className='stx-radio__input'
        checked={checked}
        disabled={disabled}
        aria-checked={checked}
        aria-disabled={disabled}
      />
      <span className='stx-radio__box' />
    </span>
  );
}

Radio.defaultProps = {};

Radio.propTypes = {
  /** Optional className for the chekcbox component */
  className: PropTypes.string,

  /** Whether or not the radio component is checked */
  checked: PropTypes.bool,

  /** Whether or not the radio component is disabled */
  disabled: PropTypes.bool,

  /** The type of message to display */
  messageType: PropTypes.oneOf(['success', 'warning', 'alert', '']),

  /** The value of the radio component */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Radio;
