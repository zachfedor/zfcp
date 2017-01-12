import { addDeviceType, removeDeviceType } from './actions';

it('Add deviceType action works', () => {
  expect(addDeviceType('test', 'http://myapi.com')).toEqual({
    type: 'ADD_DEVICETYPE',
    id: 0,
    deviceType: {
      name: 'test',
      apiUrl: 'http://myapi.com'
    }
  });
});

it('Remove deviceType action works', () => {
  expect(removeDeviceType(0)).toEqual({
    type: 'REMOVE_DEVICETYPE',
    id: 0
  });
});

