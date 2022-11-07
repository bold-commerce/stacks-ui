import React, { Component } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Field from '../field/Field';
import Checkbox from '../checkbox/Checkbox';
import { generateUniqueId } from '../../utils/generateUniqueId';

import './CheckboxField.css';

class CheckboxField extends Component {
  constructor(props) {
    super(props);
    this.forId = `stxField${generateUniqueId()}`;
    this.messageId = `stxFieldMessage${generateUniqueId()}`;
  }

  render() {
    const { id, className, helpText, messageType, messageText, messageId, label, ...remainingProps } = this.props;
    const classNames = cn([
      'stx-checkbox-field__field',
      className,
    ]);

    const hasValidationError = messageType === 'alert' || messageType === 'error';

    return (
      <Field
        className={classNames}
        helpText={helpText}
        messageType={messageType}
        messageText={messageText}
        messageId={this.messageId}
      >
        <div className='stx-checkbox-field__div'>
          <Checkbox
            id={id || this.forId}
            className='stx-checkbox-field__checkbox'
            aria-invalid={hasValidationError ? 'true' : undefined}
            aria-describedby={messageId || this.messageId}
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
  /** The ID of the associated message element (automatically generated if not provided) */
  messageId: PropTypes.oneOf([PropTypes.string, PropTypes.undefined]),
  /** Whether or not the checkbox is disabled */
  disabled: PropTypes.bool,
};

export default CheckboxField;
