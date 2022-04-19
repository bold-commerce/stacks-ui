import React, { Component } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import chevrondown from './chevronIcon';

import './Select.css';

class Select extends Component {
  constructor(props) {
    super(props);

    this.PLACEHOLDER_VALUE = props.placeholderValue;

    this.state = {
      hasFocus: false,
      hasValue: props.value || false,
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const {
      className,
      size,
      disabled,
      messageType,
      placeholder,
      hasValue,
      loading,
      readOnly,
      value,
      options,
      children,
      placeholderValue,
      ...otherProps
    } = this.props;

    const classNames = cn([
      'stx-select',
      { 'stx-select--is-disabled': disabled },
      { 'stx-select--is-read-only': readOnly },
      { 'stx-select--is-loading': loading },
      { 'stx-select--has-focus': this.state.hasFocus },
      { 'stx-select--has-value': hasValue },
      { 'stx-select--with-placeholder': placeholder },
      { 'stx-select--alert': messageType === 'alert' || messageType === 'error' },
      { 'stx-select--warning': messageType === 'warning' },
      { 'stx-select--success': messageType === 'success' },
      { 'stx-select--small': size === 'small' },
      className,
    ]);

    return (
      <div className={classNames}>
        <select
          {...otherProps}
          ref={(select) => {
            this.selectRef = select;
          }}
          className='stx-select__select-element'
          disabled={disabled || loading}
          aria-disabled={disabled}
          readOnly={readOnly}
          aria-readonly={readOnly}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          value={
            placeholder && !value
              ? this.PLACEHOLDER_VALUE
              : value
          }
        >

          {this.renderPlaceholderOption()}

          {this.renderOptions()}

          {children}

        </select>
        <span className='stx-select__icon'>
          <svg
            className='stx-select-icon__icon'
            viewBox='0 0 24 24'
          >

            <path className='stx-select-icon__path' fill='#6B6B6B' d={chevrondown} />
          </svg>
        </span>

      </div>
    );
  }

  renderPlaceholderOption() {
    if (this.props.placeholder) {
      return (
        <option value={this.PLACEHOLDER_VALUE} hidden>
          {this.props.placeholder}
        </option>
      );
    }
    return null;
  }

  renderOptions() {
    if (this.props.options) {
      if (this.props.options.length > 0) {
        return this.props.options.map(option => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ));
      }
    }

    return null;
  }

  handleFocus(evt) {
    this.setState({ hasFocus: true });

    if (this.props.onFocus) {
      this.props.onFocus(evt);
    }
  }

  handleBlur(evt) {
    this.setState({ hasFocus: false });

    if (this.props.onBlur) {
      this.props.onBlur(evt);
    }
  }

  handleChange(evt) {
    if (this.selectRef.value !== this.PLACEHOLDER_VALUE) {
      this.setState({ hasValue: true });
    }

    if (this.props.onChange) {
      this.props.onChange(evt);
    }
  }
}

Select.defaultProps = {
  placeholderValue: '___PLACEHOLDER___',
};

Select.propTypes = {
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
  /** The value for the option that is used as a placeholder */
  placeholderValue: PropTypes.string,

  /** If the component has a value */
  hasValue: PropTypes.bool,

  /** The type of message to display */
  messageType: PropTypes.oneOf(['alert', 'warning', 'success', '']),
  /** Size modifier */
  size: PropTypes.oneOf(['small', '']),
  /** The order in which fields should gain focus when pressing Tab */
  tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /** Whether or not the field is disabled */
  disabled: PropTypes.bool,
  /** Whether or not the field is read only */
  readOnly: PropTypes.bool,
  /** Whether or not the field is loading */
  loading: PropTypes.bool,

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

export default Select;
