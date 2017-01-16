import deviceReducer from './reducer';
import * as actions from './actions';
import { initialDeviceState } from '../util/state';

it('Creates correct initial device state', () => {
  const action = { type: 'default' };

  expect(deviceReducer(undefined, action))
    .toEqual(initialDeviceState);
});

it('Shows Device', () => {
  const action = actions.showDevice(1);
  const newState = deviceReducer(initialDeviceState, action);

  expect(newState.showingDevice).toEqual(1);
});

it('Adds a Device', () => {
  const action = actions.addDevice('new device', 0);
  const newState = deviceReducer(initialDeviceState, action);

  expect(newState.devices.length).toEqual(4);
  expect(newState.devicesById[4])
    .toEqual({
      name: 'new device',
      deviceType: 0,
      controls: []
    });
});

it('Removes a Device', () => {
  const action = actions.removeDevice(1);
  const newState = deviceReducer(initialDeviceState, action);

  expect(newState.devices.length).toEqual(2);
  expect(newState.devicesById[1]).toEqual(undefined);
});
