import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import './Field.css';

function Field(props) {
  const {
    children, className, disabled, helpText, htmlFor, id, label, messageText, messageType, ...otherProps
  } = props;

  const classNames = cn([
    'stx-field',
    { 'stx-field--alert': messageType === 'alert' || messageType === 'error' },
    { 'stx-field--warning': messageType === 'warning' },
    { 'stx-field--success': messageType === 'success' },
    { 'stx-field--is-disabled': disabled },
    className,
  ]);

  const renderMessageText = () => {
    return messageText && <div className='stx-field__message'>{ messageText }</div>;
  };

  const renderHelpText = () => {
    return helpText && <div className='stx-field__help-text'>{ helpText }</div>;
  };

  return (
    <div
      {...otherProps}
      id={id}
      className={classNames}
    >
      { label && <label htmlFor={htmlFor} className='stx-field__label'> { label } </label> }

      { children }

      { renderMessageText() }

      { renderHelpText() }
    </div>
  );
};

Field.defaultProps = {};

Field.propTypes = {
  /** Text for the label element in for the field */
  label: PropTypes.node,

  /** Text for additional text that appears below the form control */
  helpText: PropTypes.node,

  /** The 'for' attribute on the label to link it to the form control via ID */
  htmlFor: PropTypes.string,

  /** The ID attribute for the field component */
  id: PropTypes.string,

  /** Optional classNames for the field component */
  className: PropTypes.string,

  /** Whether or not the field is disabled */
  disabled: PropTypes.bool,

  /** The type of message to show */
  messageType: PropTypes.oneOf(['success', 'warning', 'alert', '']),

  /** The text to display for the message */
  messageText: PropTypes.string,

  /** Child elements */
  children: PropTypes.node,
};

export default Field;
