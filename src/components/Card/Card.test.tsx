import React from 'react';
import { Card } from './index';

import { shallow, mount } from 'enzyme';

describe('<Card/> Component', () => {
  it('should exist', () => {
    const wrapper = shallow(<Card />);

    expect(wrapper).toBeDefined();
  });

  it('contains default props', () => {
    const wrapper = mount(<Card title="mock" name="mockName" />);

    expect(wrapper.props().founder).toBe(true);
    expect(wrapper.props().title).toBe('mock');
    expect(wrapper.props().name).toBe('mockName');
  });
});
