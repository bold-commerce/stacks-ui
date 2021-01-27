import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Details from './Details';

describe('Details', () => {
  test('Details renders with basic props', () => {
    const output = mount(<Details
      className='the-class'
      description='The description in the widget'
      title='The widget title'
    />);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Details renders with text align center', () => {
    const output = mount(<Details
      className='the-class'
      description='The description in the widget'
      title='The widget title'
      textAlign='center'
    />);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Details renders with text align right', () => {
    const output = mount(<Details
      className='the-class'
      description='The description in the widget'
      title='The widget title'
      textAlign='right'
    />);

    expect(toJson(output)).toMatchSnapshot();
  });
});
