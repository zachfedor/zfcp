import deviceTypeReducer from './reducer';
import * as actions from './actions';
import { initialDeviceTypeState } from '../util/state';

it('Creates correct initial devicetype state', () => {
  const action = { type: 'default' };

  expect(deviceTypeReducer(undefined, action))
    .toEqual(initialDeviceTypeState);
});

it('Adds a DeviceType', () => {
  const action = actions.addDeviceType('new deviceType', 'http://myapi.com');
  const newState = deviceTypeReducer(initialDeviceTypeState, action);

  expect(newState.deviceTypes.length).toEqual(5);
  expect(newState.deviceTypesById[5])
    .toEqual({
      name: 'new deviceType',
      apiUrl: 'http://myapi.com'
    });
});

it('Removes a DeviceType', () => {
  const action = actions.removeDeviceType(1);
  const newState = deviceTypeReducer(initialDeviceTypeState, action);

  expect(newState.deviceTypes.length).toEqual(3);
  expect(newState.deviceTypesById[1]).toEqual(undefined);
});

