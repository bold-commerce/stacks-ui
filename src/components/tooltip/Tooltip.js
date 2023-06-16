import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import './Tooltip.css';

const Tooltip = ({ children, message, className, ...otherProps }) => (
  <div className={cns(className, 'stx-tooltip-wrapper')} {...otherProps}>
    {children}
    <div className='stx-tooltip'>
      {message}
    </div>
  </div>
);

Tooltip.defaultProps = {
  className: null,
};

Tooltip.propTypes = {
  message: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Tooltip;
