import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { formatMoneyCustomized, formatMoneyByInternationalizationStandard } from './moneyHelper';

import './Price.css';

function Price(props) {
  const { amount, amountBeforeDiscount, amountLabel, amountBeforeDiscountLabel, className, intlMoneyFormatObj,
    moneyFormatString, textAlign, ...otherProps } = props;

  const getFormattedPrice = function (price) {
    if (moneyFormatString) {
      return formatMoneyCustomized(price, moneyFormatString);
    } else {
      return formatMoneyByInternationalizationStandard(price, intlMoneyFormatObj);
    }
  };

  if (amount !== null) {
    const priceClassNames = cn([
      'stx-price',
      className,
      { 'stx-price--alight-left': textAlign === 'left' },
      { 'stx-price--alight-center': textAlign === 'center' },
      { 'stx-price--alight-right': textAlign === 'right' },
    ]);

    const amountClassNames = cn([
      'stx-price__amount',
      { 'stx-price__amount--inactive': amountBeforeDiscount !== null },
    ]);

    return (
      <div
        className={priceClassNames}
        {...otherProps}
      >
        { amountBeforeDiscount !== null &&
          <p className={amountClassNames} aria-label={amountBeforeDiscountLabel}>
            { getFormattedPrice(amountBeforeDiscount) }
          </p>
        }
        <p className='stx-price__amount' aria-label={amountLabel}>
          { getFormattedPrice(amount) }
        </p>
      </div>
    );
  }
  return null;
}

Price.defaultProps = {
  className: '',
  textAlign: 'center',
  amount: null,
  amountBeforeDiscount: null,
  amountLabel: 'Product price',
  amountBeforeDiscountLabel: 'Price before discount',
  moneyFormatString: null,
  intlMoneyFormatObj: { languageTag: 'en-CA', currency: 'CAD' },
};

Price.propTypes = {
  /** Value appended to the class attribute */
  className: PropTypes.string,

  /** How the price text should be aligned */
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),

  /** Value of the price amount (cents), for example: $24.99 would be 2499. */
  amount: PropTypes.number,

  /** Description for the price component, used by screen readers (accessibility purposes). */
  amountLabel: PropTypes.string,

  /** Value of the discounted price amount (cents), for example: $24.99 should be passed as 2499. */
  amountBeforeDiscount: PropTypes.number,

  /** Description for the component that shows price before discount, used by screen readers (accessibility purposes). */
  amountBeforeDiscountLabel: PropTypes.string,

  /** A formatting string, examples: 'CA${{amount}}', '€{{amount_with_comma_separator}}' */
  moneyFormatString: PropTypes.string,

  /** The formatting object */
  intlMoneyFormatObj: PropTypes.object,
};

export default Price;
