import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import LoadingSpinner from './LoadingSpinner';

describe('LoadingSpinner', () => {
  test('LoadingSpinner renders with basic props', () => {
    const output = mount(<LoadingSpinner
      className='the-class'
      data-additional-prop='additional-prop'
    />);

    expect(toJson(output)).toMatchSnapshot();
  });
});
