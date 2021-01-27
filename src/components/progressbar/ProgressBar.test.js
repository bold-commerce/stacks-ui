import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  test('ProgressBar renders with basic props', () => {
    const output = mount(<ProgressBar
      className='the-class'
      percentCompleted={33}
    />);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('ProgressBar renders with render before', () => {
    const output = mount(<ProgressBar
      className='the-class'
      percentCompleted={33}
      prefix={<React.Fragment>
        {'The render before content'}
      </React.Fragment>}
    />);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('ProgressBar renders with render after', () => {
    const output = mount(<ProgressBar
      className='the-class'
      percentCompleted={33}
      suffix={<React.Fragment>
        {'The render before content'}
      </React.Fragment>}
    />);

    expect(toJson(output)).toMatchSnapshot();
  });
});
