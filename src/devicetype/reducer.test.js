import deviceTypes from './reducer';
import * as actions from './actions';
import { initialDeviceTypeState } from '../util/state';

describe('DeviceType Reducer', () => {

  it('creates correct initial devicetype state', () => {
    const action = { type: 'default' };

    expect(deviceTypes(undefined, action))
      .toEqual(initialDeviceTypeState);
  });

  it('adds a DeviceType', () => {
    const action = actions.addDeviceType('new deviceType', 'http://myapi.com');
    const newState = deviceTypes(initialDeviceTypeState, action);

    expect(newState.all.length).toEqual(5);
    expect(newState.byId[5])
      .toEqual({
        name: 'new deviceType',
        apiRoot: 'http://myapi.com',
        controlTypes: []
      });
  });

  it('removes a DeviceType', () => {
    const action = actions.removeDeviceType(1);
    const newState = deviceTypes(initialDeviceTypeState, action);

    expect(newState.all.length).toEqual(3);
    expect(newState.byId[1]).toEqual(undefined);
  });

  it('adds a button ControlType', () => {
    expect(initialDeviceTypeState.byId[1].controlTypes.length)
      .toEqual(3);

    const action = actions.addControlType(1, 'new controlType', 'BUTTON', '/endpoint');
    const newState = deviceTypes(initialDeviceTypeState, action);

    expect(newState.byId[1].controlTypes.length)
      .toEqual(4);
    expect(newState.byId[1].controlTypes[3])
      .toEqual({
        name: 'new controlType',
        inputType: 'BUTTON',
        endpoint: '/endpoint'
      });
  });

  it('removes a ControlType', () => {
    expect(initialDeviceTypeState.byId[1].controlTypes.length)
      .toEqual(3);

    const action = actions.removeControlType(1, 0);
    const newState = deviceTypes(initialDeviceTypeState, action);

    expect(newState.byId[1].controlTypes.length)
      .toEqual(2);
  });

});

