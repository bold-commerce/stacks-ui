import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './WidgetFrame.css';

function WidgetFrame(props) {
  const { className, children, scoped, ...otherProps } = props;
  const classNames = cn([
    'stx-widget-frame',
    { 'stx-widget-frame--scoped': scoped },
    className,
  ]);

  return (
    <div
      {...otherProps}
      className={classNames}
    >
      {children}
    </div>
  );
}

WidgetFrame.defaults = {};

WidgetFrame.propTypes = {
  /** Optional className for the WidgetFrame component */
  className: PropTypes.string,
  /** Child elements */
  children: PropTypes.node,
  /** Applies a scoped class so that reset styles can be applied */
  scoped: PropTypes.bool,
};

export default WidgetFrame;
