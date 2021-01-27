import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import WidgetFrame from './WidgetFrame';

describe('WidgetFrame', () => {
  test('WidgetFrame renders with basic props', () => {
    const output = mount(<WidgetFrame
      className='the-class'
    >
      <div>Hello world!</div>
    </WidgetFrame>);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('WidgetFrame renders with scoped prop', () => {
    const output = mount(<WidgetFrame
      className='the-class'
      scoped
    >
      <div>Hello world!</div>
    </WidgetFrame>);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('WidgetFrame renders other props', () => {
    const output = mount(<WidgetFrame
      className='the-class'
      scoped
      data-other-prop='other prop value'
    >
      <div>Hello world!</div>
    </WidgetFrame>);

    expect(toJson(output)).toMatchSnapshot();
  });
});
