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
  const controlTypes = [{
    name: 'button',
    inputType: 'BUTTON',
    values: [false, true],
    endpoint: '/button'
  }];
  const action = actions.addDevice('new device', 0, controlTypes);
  const newState = deviceReducer(initialDeviceState, action);

  expect(newState.all.length).toEqual(4);
  expect(newState.byId[4])
    .toEqual({
      name: 'new device',
      deviceType: 0,
      controls: [{
        name: 'button',
        value: false
      }]
    });
});

it('Removes a Device', () => {
  const action = actions.removeDevice(1);
  const newState = deviceReducer(initialDeviceState, action);

  expect(newState.all.length).toEqual(2);
  expect(newState.byId[1]).toEqual(undefined);
});
