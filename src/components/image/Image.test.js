import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Image from './Image';

describe('Image', () => {
  test('Image renders with basic props', () => {
    const output = mount(<Image
      className='the-class'
      src='https://animage.jpg'
    />);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Image renders with a message', () => {
    const output = mount(<Image
      className='the-class'
      src='https://animage.jpg'
      message='Added'
    />);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Image renders with custom/accessibility properties', () => {
    const output = mount(<Image
      className='the-class'
      src='https://animage.jpg'
      message='Added'
      aria-label='Complementary information'
      data-additional-prop='additional-prop'
    />);

    expect(toJson(output)).toMatchSnapshot();
  });
});
