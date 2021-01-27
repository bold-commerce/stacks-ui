import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import RadioField from './RadioField';

describe('RadioField', () => {
  const onChange = () => 'onChange';
  const onClick = () => 'onClick';

  test('RadioField renders with basic props', () => {
    const output = mount(<RadioField
      className='the-class'
      data-additional-prop='additional-prop'
      onChange={onChange}
      onClick={onClick}
      tabIndex='1'
      name='name'
      value='value'
      disabled
      checked
      messageType='alert'
      messageText='message'
    />);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('RadioField render disabled when disabled is true', () => {
    const output = shallow(<RadioField disabled />);
    expect(toJson(output)).toMatchSnapshot();
  });
});
