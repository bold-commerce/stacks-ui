import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './ProgressBar.css';

function ProgressBar(props) {
  const { size, className, percentCompleted, prefix, suffix, ...extraProps } = props;
  const classNames = cn([
    'stx-progress-bar',
    { 'stx-progress-bar--small': size === 'small' },
    { 'stx-progress-bar--large': size === 'large' },
    className,
  ]);
  const progressStyle = {
    width: `${percentCompleted}%`,
  };

  return (
    <div className={classNames} {...extraProps} role='progressbar' aria-valuenow={percentCompleted} aria-valuemin='0' aria-valuemax='100' >
      <div className='stx-progress-bar__prefix'>
        {prefix}
      </div>
      <div className='stx-progress-bar__container'>
        <div className='stx-progress-bar__fill' style={progressStyle} />
      </div>
      <div className='stx-progress-bar__suffix'>
        {suffix}
      </div>
    </div>
  );
};

ProgressBar.defaultProps = {
  percentCompleted: 0,
};

ProgressBar.propTypes = {
  className: PropTypes.string,
  percentCompleted: PropTypes.number,
  size: PropTypes.oneOf(['small', 'large', '']),
  prefix: PropTypes.node,
  suffix: PropTypes.node,
};

export default ProgressBar;
