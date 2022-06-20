import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Field from './Field';

describe('Field', () => {
  test('Field renders with basic props', () => {
    const output = mount(<Field
      className='the-class'
      data-additional-prop='additional-prop'
      messageText='Some message text'
      messageType='alert'
      helpText='Some help text'
      ariaLive='assertive'
    >
      <div>
        {'There are children'}
      </div>
    </Field>);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Field render disabled when disabled is true', () => {
    const output = shallow(<Field disabled />);
    expect(toJson(output)).toMatchSnapshot();
  });
});
