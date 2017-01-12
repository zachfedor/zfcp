import { addDeviceType, removeDeviceType } from './actions';

it('Add devicetype action works', () => {
  expect(addDeviceType('test', 'http://myapi.com')).toEqual({
    type: 'ADD_DEVICETYPE',
    id: 0,
    name: 'test',
    apiUrl: 'http://myapi.com'
  });
});

it('Remove devicetype action works', () => {
  expect(removeDeviceType(0)).toEqual({
    type: 'REMOVE_DEVICETYPE',
    id: 0
  });
});

