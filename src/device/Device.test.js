import React from 'react';
import { shallow } from 'enzyme';
import Device from './Device';

it('should render without crashing', () => {
  const component = shallow(<Device name='test' />);

  expect(component.equals(<li>test</li>)).toEqual(true);
});
