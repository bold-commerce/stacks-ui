import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Radio from './Radio';

describe('Radio', () => {
  const onChange = () => 'onChange';
  const onClick = () => 'onClick';

  test('Radio renders with basic props', () => {
    const output = mount(<Radio
      className='the-class'
      onChange={onChange}
      onClick={onClick}
      tabIndex='1'
      name='name'
      value='value'
    />);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Radio renders with checked', () => {
    const output = mount(<Radio
      className='the-class'
      onChange={onChange}
      onClick={onClick}
      tabIndex='1'
      name='name'
      value='value'
      checked
    />);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Radio renders with disabled', () => {
    const output = mount(<Radio
      className='the-class'
      onChange={onChange}
      onClick={onClick}
      tabIndex='1'
      name='name'
      value='value'
      disabled
    />);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Radio renders with messageType = alert', () => {
    const output = mount(<Radio
      className='the-class'
      onChange={onChange}
      onClick={onClick}
      tabIndex='1'
      name='name'
      value='value'
      messageType='alert'
    />);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Radio renders with additional props', () => {
    const output = mount(<Radio
      className='the-class'
      onChange={onChange}
      onClick={onClick}
      tabIndex='1'
      name='name'
      value='value'
      data-additional-prop='additional-prop'
    />);

    expect(toJson(output)).toMatchSnapshot();
  });
});
