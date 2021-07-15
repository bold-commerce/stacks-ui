import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import times from './timesIcon';

import './Message.css';

function Message(props) {
  const { className, children, dismissible, onDismiss, dismissType, title, type, dismissText, ...otherProps } = props;
  const isAlert = type === 'alert';
  const classNames = cn([
    'stx-message',
    { 'stx-message--with-alert': isAlert },
    { 'stx-message--with-warning': type === 'warning' },
    { 'stx-message--with-info': type === 'info' },
    { 'stx-message--with-success': type === 'success' },
    className,
  ]);

  const timesIcon = <span className='stx-message-icon'>
    <svg
      className='stx-message-icon__icon'
      viewBox='0 0 24 24'
    >
      <path className='stx-message-icon__path' fill='#6B6B6B' d={times} />
    </svg>
  </span>;

  return (
    <div
      className={classNames}
      role={isAlert ? 'alert' : 'status'}
      {...otherProps}
    >
      { title && <h2 className='stx-message__title'>{title}</h2> }

      { dismissible && <Button
        className='stx-message__dismiss-button'
        aria-label={dismissText}
        secondary
        onClick={onDismiss}>
        {dismissType === 'icon' ? timesIcon : dismissText}
      </Button> }

      { children }
    </div>
  );
}

Message.propTypes = {
  /** Optional className for the component */
  className: PropTypes.string,

  /** Specify a type for the message to give it additional meaning */
  type: PropTypes.oneOf(['alert', 'warning', 'success', 'info', '']),

  /** A special heading for the message */
  title: PropTypes.string,

  /** Whether or not the message is dismissible */
  dismissible: PropTypes.bool,

  /** Event called when the dismiss button is clicked */
  onDismiss: PropTypes.func,

  /** Dismiss button type */
  dismissType: PropTypes.oneOf(['string', 'icon']),

  /** Dismiss text for dismissType of string and aria label of dismiss button */
  dismissText: PropTypes.string,

  /** Child elements */
  children: PropTypes.node,
};

Message.defaultProps = {
  dismissType: 'string',
  dismissText: 'Dismiss',
};

export default Message;
