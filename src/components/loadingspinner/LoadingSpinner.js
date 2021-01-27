import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './LoadingSpinner.css';

function LoadingSpinner(props) {
  const { className, ...otherProps } = props;

  const classNames = cn([
    'stx-loading-spinner',
    className,
  ]);

  return (
    <span
      className={classNames}
      {...otherProps}
    />
  );
}

LoadingSpinner.propTypes = {
  /** Optional className for the component */
  className: PropTypes.string,
};

export default LoadingSpinner;
