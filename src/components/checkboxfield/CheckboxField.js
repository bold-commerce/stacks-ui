import React, { Component } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Field from '../field/Field';
import Checkbox from '../checkbox/Checkbox';

import './CheckboxField.css';

class CheckboxField extends Component {
  constructor(props) {
    super(props);
    window.stxFieldCount = window.stxFieldCount ? window.stxFieldCount + 1 : 1;
    this.forId = `stxField${window.stxFieldCount}`;
  }

  render() {
    const { id, className, helpText, messageType, messageText, label, ...remainingProps } = this.props;
    const classNames = cn([
      'stx-checkbox-field__field',
      className,
    ]);

    return (
      <Field
        className={classNames}
        helpText={helpText}
        messageType={messageType}
        messageText={messageText}
      >
        <div className='stx-checkbox-field__div'>
          <Checkbox
            id={id || this.forId}
            className='stx-checkbox-field__checkbox'
            {...remainingProps}
          />

          <label htmlFor={id || this.forId} className='stx-checkbox-field__label'>
            {label}
          </label>
        </div>
      </Field>
    );
  }
}

CheckboxField.propTypes = {
  /** HTML ID attribute for the checkbox element */
  id: PropTypes.string,
  /** Optional className for the field component */
  className: PropTypes.string,

  /** The name or title of the form control */
  label: PropTypes.node,
  /** Helpful text that describes how to use the form control */
  helpText: PropTypes.node,
  /** The text for the message to display */
  messageText: PropTypes.string,
  /** The type of message to display */
  messageType: PropTypes.oneOf(['alert', 'warning', 'success', '']),
  /** Whether or not the checkbox is disabled */
  disabled: PropTypes.bool,
};

export default CheckboxField;
