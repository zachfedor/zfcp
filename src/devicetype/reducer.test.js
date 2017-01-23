import deviceTypeReducer from './reducer';
import * as actions from './actions';
import { initialDeviceTypeState } from '../util/state';

describe('DeviceType Reducer', () => {

  it('creates correct initial devicetype state', () => {
    const action = { type: 'default' };

    expect(deviceTypeReducer(undefined, action))
      .toEqual(initialDeviceTypeState);
  });

  it('adds a DeviceType', () => {
    const action = actions.addDeviceType('new deviceType', 'http://myapi.com');
    const newState = deviceTypeReducer(initialDeviceTypeState, action);

    expect(newState.deviceTypes.length).toEqual(5);
    expect(newState.deviceTypesById[5])
      .toEqual({
        name: 'new deviceType',
        apiRoot: 'http://myapi.com',
        controlTypes: []
      });
  });

  it('removes a DeviceType', () => {
    const action = actions.removeDeviceType(1);
    const newState = deviceTypeReducer(initialDeviceTypeState, action);

    expect(newState.deviceTypes.length).toEqual(3);
    expect(newState.deviceTypesById[1]).toEqual(undefined);
  });

  it('adds a button ControlType', () => {
    expect(initialDeviceTypeState.deviceTypesById[1].controlTypes.length)
      .toEqual(3);

    const action = actions.addControlType(1, 'new controlType', 'BUTTON', '/endpoint');
    const newState = deviceTypeReducer(initialDeviceTypeState, action);

    expect(newState.deviceTypesById[1].controlTypes.length)
      .toEqual(4);
    expect(newState.deviceTypesById[1].controlTypes[3])
      .toEqual({
        name: 'new controlType',
        inputType: 'BUTTON',
        endpoint: '/endpoint'
      });
  });

  it('removes a ControlType', () => {
    expect(initialDeviceTypeState.deviceTypesById[1].controlTypes.length)
      .toEqual(3);

    const action = actions.removeControlType(1, 0);
    const newState = deviceTypeReducer(initialDeviceTypeState, action);

    expect(newState.deviceTypesById[1].controlTypes.length)
      .toEqual(2);
  });

});

