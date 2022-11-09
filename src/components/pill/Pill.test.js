/* global describe, test, expect, jest */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Pill from './Pill';

describe('Pill', () => {
  test('Pill renders with basic props', () => {
    const component = shallow(<Pill
      className='class-name'
      label='label'
    />);

    expect(toJson(component)).toMatchSnapshot();
  });

  test('Pill renders with a11y props', () => {
    const component = shallow(<Pill
      aria-label='aria-label'
    />);

    const span = component.find('span.stx-pill');
    expect(span).toHaveLength(1);
    expect(span.prop('aria-label')).toEqual('aria-label');
    expect(toJson(component)).toMatchSnapshot();
  });

  test('Pill renders with dismiss button', () => {
    const onDismissSpy = jest.fn();
    const component = shallow(<Pill
      dismissible
      dismissText='dismiss'
      onDismiss={onDismissSpy}
    />);

    const dismissButton = component.find('button.stx-pill__dismiss-button');
    expect(dismissButton.exists()).toBe(true);
    expect(dismissButton.prop('onClick')).toBe(onDismissSpy);
  });

  test('Pill renders with alert status', () => {
    const component = shallow(<Pill
      status='alert'
    />);

    const span = component.find('span.stx-pill--with-alert');
    expect(span.exists()).toBe(true);
  });

  test('Pill renders with warning status', () => {
    const component = shallow(<Pill
      status='warning'
    />);

    const span = component.find('span.stx-pill--with-warning');
    expect(span.exists()).toBe(true);
  });

  test('Pill renders with success status', () => {
    const component = shallow(<Pill
      status='success'
    />);

    const span = component.find('span.stx-pill--with-success');
    expect(span.exists()).toBe(true);
  });

  test('Pill renders with info status', () => {
    const component = shallow(<Pill
      status='info'
    />);

    const span = component.find('span.stx-pill--with-info');
    expect(span.exists()).toBe(true);
  });

  test('Pill renders as minimized', () => {
    const component = shallow(<Pill
      minimized
    />);

    const span = component.find('span.stx-pill--is-minimized');
    expect(span.exists()).toBe(true);
  });

  test('Pill renders as filled', () => {
    const component = shallow(<Pill
      filled
    />);

    const span = component.find('span.stx-pill--is-filled');
    expect(span.exists()).toBe(true);
  });

  test('Pill renders as clickable', () => {
    const onClickSpy = jest.fn();
    const component = shallow(<Pill
      onClick={onClickSpy}
    />);

    const span = component.find('span.stx-pill--is-clickable');
    expect(span.exists()).toBe(true);
    expect(span.prop('onClick')).toBe(onClickSpy);
  });
});
