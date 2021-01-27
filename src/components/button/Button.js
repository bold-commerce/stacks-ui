import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import LoadingSpinner from '../loadingspinner/LoadingSpinner';

import './Button.css';

function Button(props) {
  const { block, children, className, disabled, href, loading, primary, secondary, size, target, title, type,
    ...otherProps } = props;

  const classNames = cn([
    'stx-button',
    { 'stx-button--primary': primary },
    { 'stx-button--secondary': secondary && !primary },
    { 'stx-button--block': block },
    { 'stx-button--small': size === 'small' },
    { 'stx-button--large': size === 'large' },
    { 'stx-button--is-disabled': disabled },
    { 'stx-button--is-loading': loading },
    className,
  ]);

  const ButtonTag = href && !disabled ? 'a' : 'button';
  const buttonType = (ButtonTag === 'button' && type) ? { type } : {};

  return (
    <ButtonTag
      title={title}
      className={classNames}
      href={href}
      target={target}
      disabled={disabled}
      aria-disabled={disabled}
      aria-busy={loading}
      {...buttonType}
      {...otherProps}
    >
      <span className='stx-button__text'>{children}</span>
      <LoadingSpinner className='stx-button__spinner' />
    </ButtonTag>
  );
}

Button.defaultProps = {
  title: null,
  className: '',
  href: null,
  target: null,
  size: null,
  type: null,

  primary: false,
  disabled: false,
  loading: false,
  block: false,
};

Button.propTypes = {
  /** Value given to the title attribute */
  title: PropTypes.string,
  /** Value appended to the class attribute */
  className: PropTypes.string,
  /**
   * Value given to the href attribute
   * Note: The Button will render as an <a> tag if this is provided
   */
  href: PropTypes.string,
  /** Value given to the target attribute */
  target: PropTypes.string,
  /** Sets the size of the generated button */
  size: PropTypes.oneOf(['', 'small', 'large']),
  /** Sets the type of the generated button */
  type: PropTypes.oneOf(['submit', 'reset', 'button']),

  /** Boolean indicating whether the button should render as primary */
  primary: PropTypes.bool,
  /** Boolean indicating whether the button should render as secondary */
  secondary: PropTypes.bool,
  /** Boolean indicating whether the button should render as disabled */
  disabled: PropTypes.bool,
  /** Boolean indicating whether the button should render a loading spinner */
  loading: PropTypes.bool,
  /** Boolean indicating whether the button should render a block button */
  block: PropTypes.bool,

  /** Child elements */
  children: PropTypes.node,
};

export default Button;
