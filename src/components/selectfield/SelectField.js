import React, { Component } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Field from '../field/Field';
import Select from '../select/Select';
import { generateUniqueId } from '../../utils/generateUniqueId';

import './SelectField.css';

class SelectField extends Component {
  constructor(props) {
    super(props);
    this.forId = `stxField${generateUniqueId()}`;
    this.messageId = `stxFieldMessage${generateUniqueId()}`;
  }

  render() {
    const { id, label, className, disabled, readOnly, messageType, messageText, messageId, helpText, ariaLive, ...otherProps } = this.props;
    const classNames = cn([
      'stx-field--with-select',
      className,
    ]);

    const hasValidationError = messageType === 'alert' || messageType === 'error';

    return (
      <Field
        label={label}
        htmlFor={id || this.forId}
        helpText={helpText}
        className={classNames}
        messageType={messageType}
        messageText={messageText}
        messageId={messageId || this.messageId}
        disabled={disabled}
        readOnly={readOnly}
        ariaLive={ariaLive}
      >
        <Select
          {...otherProps}
          id={id || this.forId}
          messageType={messageType}
          disabled={disabled}
          readOnly={readOnly}
          aria-invalid={hasValidationError ? 'true' : undefined}
          aria-describedby={messageId || this.messageId}
        />
      </Field>
    );
  }
}

SelectField.defaultProps = {};

SelectField.propTypes = {
  /** The name or the title of the field */
  label: PropTypes.node,
  /** Helpful text that describes how to use the field */
  helpText: PropTypes.node,
  /** HTML ID attribute for the select element */
  id: PropTypes.string,
  /** Name for the select component */
  name: PropTypes.string,
  /** The value for the select component */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /** Optional className for the select component */
  className: PropTypes.string,
  /** Placeholder for the select component */
  placeholder: PropTypes.string,
  /** The text for the message */
  messageText: PropTypes.string,

  /** The type of message to display */
  messageType: PropTypes.oneOf(['alert', 'warning', 'success', '']),

  /** The ID of the associated message element (automatically generated if not provided) */
  messageId: PropTypes.oneOf([PropTypes.string, PropTypes.undefined]),

  /** The aria-live attribute value that will be set on the message if one is given */
  ariaLive: PropTypes.oneOf(['assertive', 'polite']),

  /** The order in which fields should gain focus when pressing Tab */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Whether or not the field is disabled */
  disabled: PropTypes.bool,
  /** Whether or not the field is loading */
  loading: PropTypes.bool,
  /** Whether or not the field is read only */
  readOnly: PropTypes.bool,

  /** An array of objects that can be used to build the option set */
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  })),

  /** Event fires when the field gains focus */
  onFocus: PropTypes.func,
  /** Event fires when the field loses focus */
  onBlur: PropTypes.func,
  /** Event fires when the field's value changes */
  onChange: PropTypes.func,
  /** Child elements */
  children: PropTypes.node,
};

export default SelectField;
