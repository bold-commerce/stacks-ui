import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from './Button';

describe('Button', () => {
  const onClick = () => 'onClick';
  const onFocus = () => 'onFocus';
  const onBlur = () => 'onBlur';
  const onMouseEnter = () => 'onMouseEnter';
  const onMouseLeave = () => 'onMouseLeave';
  const onTouchEnd = () => 'onTouchEnd';

  test('Button renders with basic props', () => {
    const output = mount(
      <Button
        className='something'
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onTouchEnd={onTouchEnd}
      >
        {'Button text'}
      </Button>
    );

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Button renders secondary', () => {
    const output = mount(
      <Button secondary>
        {'Button text'}
      </Button>
    );

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Button renders primary', () => {
    const output = mount(
      <Button primary>
        {'Button text'}
      </Button>
    );

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Button renders disabled', () => {
    const output = mount(
      <Button disabled>
        {'Button text'}
      </Button>
    );

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Button renders loading', () => {
    const output = mount(
      <Button loading>
        {'Button text'}
      </Button>
    );

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Button renders with additional accessibility/custom props', () => {
    const output = mount(
      <Button
        className='something'
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onTouchEnd={onTouchEnd}
        role='button'
        aria-invalid={false}
        data-additional-prop='additional-prop-test'
      >
        {'Button text'}
      </Button>
    );

    expect(toJson(output)).toMatchSnapshot();
  });
});
