## Purpose
Display a price for a product. Prices should be in "cents", so a value $24.99 should be an `amount` of `2499`.
Prices for currencies that have no minor/fractional units should be ended in `00` (no cents), or they will be rounded.

## Examples
### Basic use
(Price formatted through
[Internationalization API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl), 
no customization.)
```jsx
<Price amount={2499} />
```

### Using a custom format string
The parameter moneyFormatString allows the user to change the currency symbol and also how the price is presented,
mainly affecting thousands separator, decimals separator and decimal places.

The format string should be built in the following structure:

```html
"CURRENCY_SYMBOL{{SEPARATOR_CONFIGURATION}}"
```

Valid configurations for separators are:
- `amount`
- `amount_no_decimals`
- `amount_with_comma_separator`
- `amount_no_decimals_with_comma_separator`
- `amount_with_space_separator`
- `amount_no_decimals_with_space_separator`
- `amount_with_apostrophe_separator`

#### Changing the currency symbol
```jsx
<Price amount={124999} moneyFormatString='US${{amount}}' />
```

#### Changing decimal and thousand separators
```jsx
<Price amount={124999} moneyFormatString='€{{amount_with_comma_separator}}' />
```

### Using [Internationalization API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) with language and currency parameters
(The Japanese yen doesn't use a minor/fractional unit, so the value is ended by `00` to indicate that it is an integer.)
```jsx
<Price amount={124900} intlMoneyFormatObj={{ languageTag: 'ja-JP', currency: 'JPY' }} />
```

### Showing a sale price
The current price should be the `amount` prop, while the original price should be the `amountBeforeDiscount` prop.

```jsx
<Price amount={2499} amountBeforeDiscount={2999} />
```

### Text Alignment
```jsx
<Price amount={2499} amountBeforeDiscount={2999} textAlign="left" />
<Price amount={2499} amountBeforeDiscount={2999} textAlign="center" />
<Price amount={2499} amountBeforeDiscount={2999} textAlign="right" />
```

### Accessibility
The properties `amountLabel` and `amountBeforeDiscountLabel` are not visible on screen, but they are used by
screen readers to describe the price components, complementing the money value information.

```jsx
<Price
  amount={2499}
  amountBeforeDiscount={2999}
  amountLabel='Final product price'
  amountBeforeDiscountLabel='Price before discount was applied'
/>
```
