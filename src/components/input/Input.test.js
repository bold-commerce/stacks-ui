/* global describe, test, expect */
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import React from 'react';
import Input from './Input';

describe('Input', () => {
  test('Input renders with basic props', () => {
    const onFocus = () => 'onFocus';
    const onBlur = () => 'onBlur';
    const onChange = () => 'onChange';
    const onKeyUp = () => 'onKeyUp';
    const onKeyDown = () => 'onKeyDown';

    const output = shallow(<Input
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
    expect(output.find('input').prop('onChange')).toEqual(onChange);
    expect(output.find('input').prop('onKeyUp')).toEqual(onKeyUp);
    expect(output.find('input').prop('onKeyDown')).toEqual(onKeyDown);
  });

  test('Input renders without any props', () => {
    const output = shallow(<Input />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('Input renders with a prefix', () => {
    const output = shallow(<Input prefix='-' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('Input renders with a suffix', () => {
    const output = shallow(<Input suffix='px' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('Input renders with type text', () => {
    const output = shallow(<Input type='text' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('Input renders with type date', () => {
    const output = shallow(<Input type='date' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('Input renders with type datetime-local', () => {
    const output = shallow(<Input type='datetime-local' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('Input renders with type time', () => {
    const output = shallow(<Input type='time' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('Input renders with type search', () => {
    const output = shallow(<Input type='search' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('Input renders with type number', () => {
    const output = shallow(<Input type='number' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('Input renders with type tel', () => {
    const output = shallow(<Input type='tel' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('Input renders with type email', () => {
    const output = shallow(<Input type='email' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('Input renders with type url', () => {
    const output = shallow(<Input type='url' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('Input renders with type password', () => {
    const output = shallow(<Input type='password' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('Input renders with type file', () => {
    const output = shallow(<Input type='file' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('Input renders with size small', () => {
    const output = shallow(<Input size='small' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('Input renders with a message type of alert', () => {
    const output = shallow(<Input messageType='alert' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('Input renders with a message type of warning', () => {
    const output = shallow(<Input messageType='warning' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('Input renders with a message type of success', () => {
    const output = shallow(<Input messageType='success' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('Input renders with a min and max value', () => {
    const output = shallow(<Input min={1} max={5} />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('Input renders with a min and max length', () => {
    const output = shallow(<Input minLength={1} maxLength={5} />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('Input renders with a step value', () => {
    const output = shallow(<Input step={5} />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('Input renders with a tabIndex value', () => {
    const output = shallow(<Input tabIndex={-5} />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('Input renders with a autoComplete value', () => {
    const output = shallow(<Input autoComplete='off' />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('Input render disabled when disabled is true', () => {
    const output = shallow(<Input disabled />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('Input render readOnly when readOnly is true', () => {
    const output = shallow(<Input readOnly />);
    expect(toJson(output)).toMatchSnapshot();
  });

  test('Input render with a loading spinner when loading is true', () => {
    const output = shallow(<Input loading />);
    expect(toJson(output)).toMatchSnapshot();
  });
});
