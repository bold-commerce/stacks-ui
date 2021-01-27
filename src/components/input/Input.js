import React, { Component } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import LoadingSpinner from '../loadingspinner/LoadingSpinner';

import './Input.css';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasFocus: false,
    };

    this.fieldWrapperHandleClick = this.fieldWrapperHandleClick.bind(this);
    this.fieldWrapperHandleDoubleClick = this.fieldWrapperHandleDoubleClick.bind(this);

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onFocus(evt) {
    this.setState({ hasFocus: true });

    if (this.props.onFocus) {
      this.props.onFocus(evt);
    }

    if (this.props.selectOnFocus === true) {
      this.inputRef.select();
    }
  }

  onBlur(evt) {
    this.setState({ hasFocus: false });

    if (this.props.onBlur) {
      this.props.onBlur(evt);
    }
  }

  fieldWrapperHandleClick() {
    this.inputRef.focus();
  }

  fieldWrapperHandleDoubleClick() {
    this.inputRef.select();
  }

  render() {
    const {
      className, disabled, loading, messageType, prefix, readOnly, selectOnFocus, size, suffix, type, ...otherProps
    } = this.props;

    const classNames = cn([
      'stx-input',
      { 'stx-input--is-disabled': disabled },
      { 'stx-input--is-loading': loading },
      { 'stx-input--is-read-only': readOnly },
      { 'stx-input--has-focus': this.state.hasFocus },
      { 'stx-input--alert': messageType === 'alert' || messageType === 'error' },
      { 'stx-input--warning': messageType === 'warning' },
      { 'stx-input--success': messageType === 'success' },
      { 'stx-input--small': size === 'small' },
      this.props.className,
    ]);

    return (
      <div
        className={classNames}
        onClick={this.fieldWrapperHandleClick}
        onDoubleClick={this.fieldWrapperHandleDoubleClick}
      >
        { prefix && <div className='stx-input__prefix'>{prefix}</div> }

        <input
          {...otherProps}
          ref={(input) => {
            this.inputRef = input;
          }}
          type={type}
          className='stx-input__input-element'
          disabled={disabled}
          readOnly={readOnly}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          aria-disabled={disabled}
          aria-readonly={readOnly}
        />

        { suffix && <div className='stx-input__suffix'>{suffix}</div> }

        { loading && <LoadingSpinner className='stx-input__spinner' /> }
      </div>
    );
  }
}

Input.defaultProps = {
  selectOnFocus: false,
  type: 'text',
};

Input.propTypes = {
  /** Optional className for the Input component */
  className: PropTypes.string,

  /** A node for placing read only content before the input element */
  prefix: PropTypes.node,
  /** A node for placing read only content after the input element */
  suffix: PropTypes.node,

  /** The input field type */
  type: PropTypes.oneOf([
    'text',
    'date',
    'datetime-local',
    'time',
    'search',
    'number',
    'tel',
    'email',
    'url',
    'password',
    'file',
  ]),

  /** Size modifier */
  size: PropTypes.oneOf(['small', '']),

  /** The type of message to display */
  messageType: PropTypes.oneOf(['alert', 'warning', 'success', '']),

  /** Whether or not the field is disabled */
  disabled: PropTypes.bool,

  /** Whether or not the field is read only */
  readOnly: PropTypes.bool,

  /** Whether or not the input field is in a loading state */
  loading: PropTypes.bool,

  /** Whether or not the value of the field should be selected when the field receives focus */
  selectOnFocus: PropTypes.bool,

  /** Event fires when the input receives focus */
  onFocus: PropTypes.func,

  /** Event fires when the input loses focus */
  onBlur: PropTypes.func,
};

export default Input;
