import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Message from './Message';

describe('Message', () => {
  const onDismiss = () => 'onDismiss';

  test('Message renders with basic props', () => {
    const output = mount(<Message
      id='the-id'
      className='the-class'
    >
      Hello World
    </Message>);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Message renders with title', () => {
    const output = mount(<Message
      id='the-id'
      className='the-class'
      title='title'
    >
      Hello World
    </Message>);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Message renders with dismiss button', () => {
    const output = mount(<Message
      id='the-id'
      className='the-class'
      dismissible
      onDismiss={onDismiss}
    >
      Hello World
    </Message>);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Message renders with type = alert', () => {
    const output = mount(<Message
      id='the-id'
      className='the-class'
      type='alert'
    >
      Hello World
    </Message>);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Message renders with type = warning', () => {
    const output = mount(<Message
      id='the-id'
      className='the-class'
      type='warning'
    >
      Hello World
    </Message>);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Message renders with type = info', () => {
    const output = mount(<Message
      id='the-id'
      className='the-class'
      type='info'
    >
      Hello World
    </Message>);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Message renders with type = success', () => {
    const output = mount(<Message
      id='the-id'
      className='the-class'
      type='success'
    >
      Hello World
    </Message>);

    expect(toJson(output)).toMatchSnapshot();
  });

  test('Message renders additional data props', () => {
    const output = mount(<Message
      id='the-id'
      className='the-class'
      data-additional-prop='additional-prop'
    >
      Hello World
    </Message>);

    expect(toJson(output)).toMatchSnapshot();
  });
});
