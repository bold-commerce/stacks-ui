import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { deprecated } from 'prop-types-extra';

import './Image.css';

function Image(props) {
  const { alt, className, imgStyle, message, src, style, ...otherProps } = props;

  const classNames = cn([ 'stx-image', className ]);

  const styleValue = style || imgStyle;

  return (
    <div className={classNames}>
      <div className='stx-image--content'>
        <div className='stx-image--holder'>
          <img
            alt={alt}
            className='stx-image--image'
            src={src}
            style={styleValue}
            {...otherProps}
          />
        </div>
        { message && <div className='stx-image--message'>{ message }</div> }
      </div>
    </div>
  );
}

Image.defaultProps = {
  /*
   * This property should be mandatory, since "alt" is an essential image attribute for accessibility.
   * However, making it required through PropTypes could impact existing code that is currently using Stacks UI.
   */
  alt: 'no-name-provided',
};

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  imgStyle: deprecated(PropTypes.object, 'Use the style prop instead'),
  message: PropTypes.string,
  src: PropTypes.string,
  style: PropTypes.string,
};

export default Image;
