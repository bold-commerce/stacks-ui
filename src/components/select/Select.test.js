import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Select from './Select';

describe('Select', () => {
  const onFocus = () => 'onFocus';
  const onBlur = () => 'onBlur';
  const onChange = () => 'onChange';

  test('Select renders with basic props', () => {
    const output = mount(<Select
      className='the-class'
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      tabIndex='1'
      placeholder='Select something'
      placeholderValue='placeholder value'
    >
      <option value='one'>One</option>
      <option value='two'>Two</option>
      <option value='three'>Three</option>
    </Select>);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Select renders with options array', () => {
    const output = mount(<Select
      className='the-class'
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      tabIndex='1'
      options={[
        { name: 'One', value: 'one' },
        { name: 'Two', value: 'two' },
        { name: 'Three', value: 'three' },
      ]}
    />);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Select renders with disabled', () => {
    const output = mount(<Select
      className='the-class'
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      tabIndex='1'
      options={[
        { name: 'One', value: 'one' },
        { name: 'Two', value: 'two' },
        { name: 'Three', value: 'three' },
      ]}
      disabled
    />);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Select renders with messageType = alert', () => {
    const output = mount(<Select
      className='the-class'
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      tabIndex='1'
      options={[
        { name: 'One', value: 'one' },
        { name: 'Two', value: 'two' },
        { name: 'Three', value: 'three' },
      ]}
      messageType='alert'
    />);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Select renders with readOnly', () => {
    const output = mount(<Select
      className='the-class'
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      tabIndex='1'
      options={[
        { name: 'One', value: 'one' },
        { name: 'Two', value: 'two' },
        { name: 'Three', value: 'three' },
      ]}
      readOnly
    />);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Select renders with loading', () => {
    const output = mount(<Select
      className='the-class'
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      tabIndex='1'
      options={[
        { name: 'One', value: 'one' },
        { name: 'Two', value: 'two' },
        { name: 'Three', value: 'three' },
      ]}
      loading
    />);

    expect(toJson(output)).toMatchSnapshot();
  });
});
