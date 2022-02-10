import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import times from './timesIcon';

import './Pill.css';

function Pill(props) {
  const {
    label, status, dismissible, minimized, filled, onClick, onDismiss, dismissType, dismissText, className, ...otherProps
  } = props;
  const classNames = cn([
    'stx-pill',
    { 'stx-pill--with-info': status === 'info' },
    { 'stx-pill--with-warning': status === 'warning' },
    { 'stx-pill--with-success': status === 'success' },
    { 'stx-pill--with-alert': status === 'alert' },
    { 'stx-pill--is-filled': filled },
    { 'stx-pill--is-minimized': minimized },
    { 'stx-pill--is-clickable': onClick },
    className,
  ]);

  const timesIcon = <span className='stx-pill__icon'>
  <svg
    className='stx-pill-icon__icon'
    viewBox='0 0 24 24'
  >
    <path className='stx-pill-icon__path' fill='#6B6B6B' d={times} />
  </svg>
</span>;

  return (
    <span
      {...otherProps}
      className={classNames}
      onClick={onClick}
    >
      <span className="stx-pill__label">
        { label }
      </span>
      { dismissible && <button
        className='stx-pill__dismiss-button'
        aria-label={dismissText}
        onClick={onDismiss}>
        {dismissType === 'icon' ? timesIcon : dismissText}
      </button> }
    </span>
  );
}

Pill.propTypes = {
  /** Label for the pill */
  label: PropTypes.string,
  /** Status modifier to change the color */
  status: PropTypes.oneOf(['alert', 'warning', 'success', 'info', '']),
  /** Show the dismiss button */
  dismissible: PropTypes.bool,
  /** Show the pill as a minimized indicator */
  minimized: PropTypes.bool,
  /** Show the pill as a solid colour instead of an outline */
  filled: PropTypes.bool,
  /** Event that fires when you click on the pill */
  onClick: PropTypes.func,
  /** Event that fires when you click on the dismiss button */
  onDismiss: PropTypes.func,
  /** Dismiss button type */
  dismissType: PropTypes.oneOf(['string', 'icon']),
  /** Dismiss text for dismissType of string and aria label of dismiss button */
  dismissText: PropTypes.string,
  /** Additional classname(s) */
  className: PropTypes.string,
};

export default Pill;
