import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Details.css';

function Details(props) {
  const { className, textAlign, title, description, ...otherProps } = props;
  const classNames = cn([
    'stx-details',
    className,
    { 'stx-details--left': textAlign === 'left' },
    { 'stx-details--center': textAlign === 'center' },
    { 'stx-details--right': textAlign === 'right' },
  ]);

  return (
    <div
      className={classNames}
      {...otherProps}
    >
      <div
        className='stx-details__title'
      >
        {title}
      </div>
      <div
        className='stx-details__description'
      >
        {description}
      </div>
    </div>
  );
}

Details.defaultProps = {
  textAlign: 'left',
};

Details.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
};

export default Details;
