/* global describe, test, expect */
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import React from 'react';
import CheckboxField from './CheckboxField';

describe('CheckboxField', () => {
  test('CheckboxField renders with basic props', () => {
    const onChange = () => 'onChange';
    const onClick = () => 'onClick';

    const output = shallow(<CheckboxField
      id='test-id'
      className='html-class'
      name='name'
      value='test-string'
      label='checkboxfield-label'
      onChange={onChange}
      onClick={onClick}
    />);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('CheckboxField renders without any props', () => {
    const output = shallow(<CheckboxField />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('CheckboxField renders checked', () => {
    const output = shallow(<CheckboxField checked />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('CheckboxField renders with helpText', () => {
    const output = shallow(<CheckboxField helpText='help-text' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('CheckboxField renders with a success messageText', () => {
    const output = shallow(<CheckboxField
      messageText='message-text'
      messageType='success'
    />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('CheckboxField renders with a warning messageText', () => {
    const output = shallow(<CheckboxField
      messageText='message-text'
      messageType='warning'
    />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('CheckboxField renders with an alert messageText', () => {
    const output = shallow(<CheckboxField
      messageText='message-text'
      messageType='alert'
    />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('CheckboxField render disabled when disabled is true', () => {
    const output = shallow(<CheckboxField disabled />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('CheckboxField render additional props', () => {
    const output = shallow(<CheckboxField data-additional-prop='additional-prop' />);
    expect(toJson(output)).toMatchSnapshot();
  });
});
