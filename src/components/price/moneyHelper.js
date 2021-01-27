const applyDefaultIfUndefined = function (parameter, defaultValue) {
  return typeof parameter === 'undefined' ? defaultValue : parameter;
};

const injectThousandsSeparator = function (integerValue, thousandsSeparator) {
  return integerValue.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, `$1${thousandsSeparator}`);
};

const formatPrice = function (priceValue, fractionDigits, thousandsSeparator, decimalSeparator) {
  if (isNaN(priceValue) || priceValue == null) {
    return 0;
  }

  fractionDigits = applyDefaultIfUndefined(fractionDigits, 2);
  thousandsSeparator = applyDefaultIfUndefined(thousandsSeparator, ',');
  decimalSeparator = applyDefaultIfUndefined(decimalSeparator, '.');

  priceValue = (priceValue / 100).toFixed(fractionDigits);

  let [ integerPart, fractionPart ] = priceValue.split('.');
  integerPart = injectThousandsSeparator(integerPart, thousandsSeparator);
  fractionPart = fractionPart ? decimalSeparator + fractionPart : '';

  return integerPart + fractionPart;
};

export const formatMoneyCustomized = function (money, moneyFormatString) {
  if (typeof money === 'string') {
    money = money.replace('.', '');
  }

  /*
   * The money format string should be something similar to: "${{amount}}".
   * The inner part defines how thousands and decimal separators will behave.
   */
  const priceFormatPattern = /\{\{\s*(\w+)\s*\}\}/;
  let formattedPrice = '';
  const priceFormat = moneyFormatString.match(priceFormatPattern)[1];

  switch (priceFormat) {
    case 'amount':
      formattedPrice = formatPrice(money, 2, ',', '.');
      break;
    case 'amount_no_decimals':
      formattedPrice = formatPrice(money, 0, ',', '.');
      break;
    case 'amount_with_comma_separator':
      formattedPrice = formatPrice(money, 2, '.', ',');
      break;
    case 'amount_no_decimals_with_comma_separator':
      formattedPrice = formatPrice(money, 0, '.', ',');
      break;
    case 'amount_with_space_separator':
      formattedPrice = formatPrice(money, 2, ' ', ',');
      break;
    case 'amount_no_decimals_with_space_separator':
      formattedPrice = formatPrice(money, 0, ' ', ',');
      break;
    case 'amount_with_apostrophe_separator':
      formattedPrice = formatPrice(money, 2, '\'', '.');
      break;
  }

  return moneyFormatString.replace(priceFormatPattern, formattedPrice);
};

export const formatMoneyByInternationalizationStandard = function (price, intlMoneyFormatObj) {
  const priceAsDollars = price / 100;

  return new Intl.NumberFormat(intlMoneyFormatObj.languageTag, {
    style: 'currency',
    currencyDisplay: 'symbol',
    currency: intlMoneyFormatObj.currency,
  }).format(priceAsDollars);
};
