/* global describe, test, expect */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Tooltip from './Tooltip';

describe('Tooltip', () => {
  test('Tooltip renders with available and extra props', () => {
    const component = shallow(
      <Tooltip
        className='custom-class-name'
        message='Count of created orders in the last 30 days.'
        tabIndex={0}
      >
        <h3>30 Orders</h3>
      </Tooltip>
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
