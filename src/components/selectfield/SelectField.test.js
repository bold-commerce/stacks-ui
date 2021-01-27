import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import SelectField from './SelectField';

describe('SelectField', () => {
  const onFocus = () => 'onFocus';
  const onBlur = () => 'onBlur';
  const onChange = () => 'onChange';

  test('SelectField renders with basic props', () => {
    const output = mount(<SelectField
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
    </SelectField>);

    expect(toJson(output)).toMatchSnapshot();
  });
});
