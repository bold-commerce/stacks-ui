import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Button from '../button/Button';

import './Message.css';

function Message(props) {
  const { className, children, dismissible, onDismiss, title, type, ...otherProps } = props;
  const isAlert = type === 'alert';
  const classNames = cn([
    'stx-message',
    { 'stx-message--with-alert': isAlert },
    { 'stx-message--with-warning': type === 'warning' },
    { 'stx-message--with-info': type === 'info' },
    { 'stx-message--with-success': type === 'success' },
    className,
  ]);

  return (
    <div
      className={classNames}
      role={isAlert ? 'alert' : 'status'}
      {...otherProps}
    >
      { title && <h2 className='stx-message__title'>{title}</h2> }

      { dismissible && <Button
        className='stx-message__dismiss-button'
        secondary
        onClick={onDismiss}>
        Dismiss
      </Button> }

      { children }
    </div>
  );
}

Message.defaultProps = {};

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

  /** Child elements */
  children: PropTypes.node,
};

export default Message;
