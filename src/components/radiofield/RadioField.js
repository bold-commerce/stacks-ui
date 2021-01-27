import React, { Component } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Field from '../field/Field';
import Radio from '../radio/Radio';

import './RadioField.css';

class RadioField extends Component {
  constructor(props) {
    super(props);
    window.stxFieldCount = window.stxFieldCount ? window.stxFieldCount + 1 : 1;
    this.forId = `stxField${window.stxFieldCount}`;
  }

  render() {
    const { className, disabled, helpText, id, label, messageType, messageText, value, ...otherProps } = this.props;

    const classNames = cn([
      'stx-field--with-radio-field',
      className,
    ]);

    return (
      <Field
        className={classNames}
        helpText={helpText}
        messageType={messageType}
        messageText={messageText}
        disabled={disabled}
      >
        <div className='stx-radio-field'>
          <Radio
            {...otherProps}
            id={id || this.forId}
            className='stx-radio-field__radio'
            disabled={disabled}
            value={value}
          />

          <label htmlFor={id || this.forId} className='stx-radio-field__label'>
            {label}
          </label>
        </div>
      </Field>
    );
  }
}

RadioField.defaultProps = {};

RadioField.propTypes = {

  /** Optional className for the chekcbox component */
  className: PropTypes.string,

  /** Whether or not the checkbox is disabled */
  disabled: PropTypes.bool,

  /** Helpful text that describes how to use the form control */
  helpText: PropTypes.node,

  /** HTML ID attribute for the checkbox element */
  id: PropTypes.string,

  /** The name or title of the form control */
  label: PropTypes.node,

  /** The message to display */
  messageText: PropTypes.string,

  /** The type of message to display */
  messageType: PropTypes.oneOf(['success', 'warning', 'alert', '']),

  /** The value of the checkbox component */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default RadioField;
