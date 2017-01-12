import React from 'react';
import { shallow, mount } from 'enzyme';
import DeviceList from './DeviceList';

it('should render without crashing', () => {
  const component = shallow(<DeviceList devices={[]} />);

  expect(component.find('h2').text()).toEqual('Devices');
  expect(component.find('ul').length).toEqual(1);
  expect(component.find('li').length).toEqual(0);
});

it('should render a list of devices', () => {
  const devices = [{id:1, name:'one'}, {id:2, name:'two'}];
  const component = mount(<DeviceList devices={devices} />);

  expect(component.find('ul').length).toEqual(1);
  expect(component.find('li').length).toEqual(2);
});
