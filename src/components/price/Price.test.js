import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Price from './Price';

/* eslint-disable no-template-curly-in-string */

describe('Price', () => {
  test('Price renders with basic props', () => {
    const output = mount(
      <Price
        className='the-class'
        amount={1222}
        amountBeforeDiscount={977}
      />
    );

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Price renders with zero amount', () => {
    const output = mount(
      <Price
        className='the-class'
        amount={0}
        amountBeforeDiscount={977}
      />
    );

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Price not renders with null amount', () => {
    const output = mount(
      <Price
        className='the-class'
        amount={null}
        amountBeforeDiscount={977}
      />
    );

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Price renders with intlMoneyFormatObj and no amount before discount', () => {
    const output = mount(
      <Price
        className='the-class'
        amount={1222}
        intlMoneyFormatObj={{
          languageTag: 'en-CA',
          currency: 'CAD',
        }}
      />
    );

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Price renders with intlMoneyFormatObj for foreign language/currency that uses no fractional unit', () => {
    const output = mount(
      <Price
        className='the-class'
        amount={127611}
        intlMoneyFormatObj={{
          languageTag: 'ja-JP',
          currency: 'JPY',
        }}
      />
    );

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Price renders with intlMoneyFormatObj and textAlign left', () => {
    const output = mount(
      <Price
        className='the-class'
        amount={1222}
        textAlign='left'
        intlMoneyFormatObj={{
          languageTag: 'en-CA',
          currency: 'CAD',
        }}
      />
    );

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Price renders with intlMoneyFormatObj and textAlign right', () => {
    const output = mount(
      <Price
        className='the-class'
        amount={1222}
        textAlign='right'
        intlMoneyFormatObj={{
          languageTag: 'en-CA',
          currency: 'CAD',
        }}
      />
    );

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Price renders with intlMoneyFormatObj and basic props', () => {
    const output = mount(
      <Price
        className='the-class'
        amount={1222}
        amountBeforeDiscount={977}
        intlMoneyFormatObj={{
          languageTag: 'en-CA',
          currency: 'CAD',
        }}
      />
    );

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Price renders with formatString and basic props', () => {
    const output = mount(
      <Price
        className='the-class'
        amount={1222}
        amountBeforeDiscount={977}
        moneyFormatString='${{amount}}'
      />
    );

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Price renders with formatString and customized currency', () => {
    const output = mount(
      <Price
        className='the-class'
        amount={149999}
        amountBeforeDiscount={175000}
        moneyFormatString='US${{amount}}'
      />
    );

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Price renders with formatString and customized currency/separators', () => {
    const output = mount(
      <Price
        className='the-class'
        amount={149999}
        amountBeforeDiscount={175000}
        moneyFormatString='€{{amount_with_comma_separator}}'
      />
    );

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Price renders with formatString and no cents', () => {
    const output = mount(
      <Price
        className='the-class'
        amount={1499}
        amountBeforeDiscount={1750}
        moneyFormatString='${{amount_no_decimals}}'
      />
    );

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Price renders with formatString and no cents + dot as thousands separator', () => {
    const output = mount(
      <Price
        className='the-class'
        amount={149999}
        amountBeforeDiscount={175000}
        moneyFormatString='€{{amount_no_decimals_with_comma_separator}}'
      />
    );

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Price renders with formatString and space separator', () => {
    const output = mount(
      <Price
        className='the-class'
        amount={149999}
        amountBeforeDiscount={175000}
        moneyFormatString='${{amount_with_space_separator}}'
      />
    );

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Price renders with formatString and apostrophe separator', () => {
    const output = mount(
      <Price
        className='the-class'
        amount={149999}
        amountBeforeDiscount={175000}
        moneyFormatString='${{amount_with_apostrophe_separator}}'
      />
    );

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Price renders with customized/accessibility props', () => {
    const output = mount(
      <Price
        className='the-class'
        amount={1222}
        amountBeforeDiscount={977}
        aria-label='product-price'
        data-additional-prop='additional-prop'
      />
    );

    expect(toJson(output)).toMatchSnapshot();
  });
});
