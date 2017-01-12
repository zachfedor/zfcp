import deviceReducer, { initialState } from './reducer';
import * as actions from './actions';

it('Creates correct initial device state', () => {
  const action = { type: 'default' };
  expect(deviceReducer(undefined, action))
    .toEqual(initialState);
});

it('Shows Device', () => {
  const action = actions.showDevice(0);
  expect(deviceReducer(initialState, action))
    .toEqual({
      showingDevice: 0,
      ...initialState
    });
});

it('Adds a Device', () => {
  const action = actions.addDevice('new device');
  expect(deviceReducer(initialState, action))
    .toEqual({
      devices: [0],
      devicesById: {
        0: { name: 'new device' }
      }
    });
});

it('Removes a Device', () => {
  console.log('thing');
  console.warn('thing');
  console.error('thing');
  const oldState = {
    devices: [0, 1],
    devicesById: {
      0: { name: 'zero' },
      1: { name: 'one' }
    }
  };
  const action = actions.removeDevice(0);
  expect(deviceReducer(oldState, action))
    .toEqual({
      devices: [1],
      devicesById: { 1: { name: 'one' }}
    });
});
