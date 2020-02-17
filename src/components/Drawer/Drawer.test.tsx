import React from 'react';

import Drawer from './index';

// import { render, cleanup } from '@testing-library/react';
import { shallow } from 'enzyme';

describe('<Drawer/> component', () => {
  it('should be defined', () => {
    const wrapper = shallow(<Drawer />);

    expect(wrapper).toBeDefined();
  });
});
