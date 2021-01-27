/* global describe, test, expect */
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import React from 'react';
import InputField from './InputField';

describe('InputField', () => {
  test('InputField renders with basic props', () => {
    const onFocus = () => 'onFocus';
    const onBlur = () => 'onBlur';
    const onChange = () => 'onChange';
    const onKeyUp = () => 'onKeyUp';
    const onKeyDown = () => 'onKeyDown';

    const output = shallow(<InputField
      id='test-id'
      className='html-class'
      name='name'
      value='test-string'
      placeholder='placeholder'
      data-additional-prop='additional-prop-test'
      type='text'
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      onKeyUp={onKeyUp}
      onKeyDown={onKeyDown}
      selectOnFocus
    />);

    expect(toJson(output)).toMatchSnapshot();
    expect(output.props().children.props.onChange).toEqual(onChange);
    expect(output.props().children.props.onKeyUp).toEqual(onKeyUp);
    expect(output.props().children.props.onKeyDown).toEqual(onKeyDown);
  });

  test('InputField renders without any props', () => {
    const output = shallow(<InputField />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('InputField renders with a prefix', () => {
    const output = shallow(<InputField prefix='-' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('InputField renders with a suffix', () => {
    const output = shallow(<InputField suffix='px' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('InputField renders with type text', () => {
    const output = shallow(<InputField type='text' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('InputField renders with type date', () => {
    const output = shallow(<InputField type='date' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('InputField renders with type datetime-local', () => {
    const output = shallow(<InputField type='datetime-local' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('InputField renders with type time', () => {
    const output = shallow(<InputField type='time' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('InputField renders with type search', () => {
    const output = shallow(<InputField type='search' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('InputField renders with type number', () => {
    const output = shallow(<InputField type='number' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('InputField renders with type tel', () => {
    const output = shallow(<InputField type='tel' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('InputField renders with type email', () => {
    const output = shallow(<InputField type='email' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('InputField renders with type url', () => {
    const output = shallow(<InputField type='url' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('InputField renders with type password', () => {
    const output = shallow(<InputField type='password' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('InputField renders with type file', () => {
    const output = shallow(<InputField type='file' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('InputField renders with size small', () => {
    const output = shallow(<InputField size='small' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('InputField renders with a message type of alert', () => {
    const output = shallow(<InputField messageType='alert' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('InputField renders with a message type of warning', () => {
    const output = shallow(<InputField messageType='warning' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('InputField renders with a message type of success', () => {
    const output = shallow(<InputField messageType='success' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('InputField renders with a min and max value', () => {
    const output = shallow(<InputField min={1} max={5} />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('InputField renders with a min and max length', () => {
    const output = shallow(<InputField minLength={1} maxLength={5} />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('InputField renders with a step value', () => {
    const output = shallow(<InputField step={5} />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('InputField renders with a tabIndex value', () => {
    const output = shallow(<InputField tabIndex={-5} />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('InputField renders with a autoComplete value', () => {
    const output = shallow(<InputField autoComplete='off' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('InputField render disabled when disabled is true', () => {
    const output = shallow(<InputField disabled />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('InputField render readOnly when readOnly is true', () => {
    const output = shallow(<InputField readOnly />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('InputField render with a loading spinner when loading is true', () => {
    const output = shallow(<InputField loading />);
    expect(toJson(output)).toMatchSnapshot();
  });
});
