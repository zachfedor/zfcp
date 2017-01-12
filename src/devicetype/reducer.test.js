import deviceTypeReducer, { initialState } from './reducer';
import * as actions from './actions';

it('Creates correct initial devicetype state', () => {
  const action = { type: 'default' };

  expect(deviceTypeReducer(undefined, action))
    .toEqual(initialState);
});

it('Adds a DeviceType', () => {
  const action = actions.addDeviceType('new devicetype', 'http://myapi.com');

  expect(deviceTypeReducer(initialState, action))
    .toEqual({
      deviceTypes: [0],
      deviceTypesById: {
        0: { name: 'new devicetype', apiUrl: 'http://myapi.com' }
      }
    });
});

it('Removes a DeviceType', () => {
  const oldState = {
    deviceTypes: [0, 1],
    deviceTypesById: {
      0: { name: 'zero', apiUrl: 'http://zeroapi.com' },
      1: { name: 'one', apiUrl: 'http://oneapi.com' }
    }
  };
  const action = actions.removeDeviceType(0);

  expect(deviceTypeReducer(oldState, action))
    .toEqual({
      deviceTypes: [1],
      deviceTypesById: { 1: { name: 'one', apiUrl: 'http://oneapi.com' }}
    });
});

