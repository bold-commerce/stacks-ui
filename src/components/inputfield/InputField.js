import React, { Component } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Field from '../field/Field';
import Input from '../input/Input';
import { generateUniqueId } from '../../utils/generateUniqueId';

import './InputField.css';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.forId = `stxField${generateUniqueId()}`;
  }

  render() {
    const { className, disabled, helpText, id, label, messageText, messageType, readOnly, ariaLive, ...otherProps } = this.props;
    const classNames = cn([
      'stx-field--with-input',
      className,
    ]);

    return (
      <Field
        label={label}
        htmlFor={id || this.forId}
        helpText={helpText}
        className={classNames}
        messageType={messageType}
        messageText={messageText}
        disabled={disabled}
        readOnly={readOnly}
        ariaLive={ariaLive}
      >
        <Input
          {...otherProps}
          id={id || this.forId}
          messageType={messageType}
          disabled={disabled}
          readOnly={readOnly}
        />
      </Field>
    );
  }
}

InputField.defaultProps = {};

InputField.propTypes = {
  /** HTML ID attribute for the input element */
  id: PropTypes.string,
  /** The title or name of the field */
  label: PropTypes.node,
  /** Additional helpful text to describe how to use the field */
  helpText: PropTypes.node,
  /** Optional className for the Input component */
  className: PropTypes.string,
  messageType: PropTypes.oneOf(['success', 'warning', 'alert', '']),
  /** The text that should appear as a message */
  messageText: PropTypes.string,
  /** The aria-live attribute value that will be set on the message if one is given */
  ariaLive: PropTypes.oneOf(['assertive', 'polite']),
  /** Whether or not the field is disabled */
  disabled: PropTypes.bool,
  /** Whether or not the field is read only */
  readOnly: PropTypes.bool,
};

export default InputField;
