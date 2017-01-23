import * as actions from './actions';

it('Add deviceType action works', () => {
  expect(actions.addDeviceType('test', 'http://myapi.com')).toEqual({
    type: 'ADD_DEVICETYPE',
    id: 5,
    deviceType: {
      name: 'test',
      apiRoot: 'http://myapi.com',
      controlTypes: []
    }
  });
});

it('Remove deviceType action works', () => {
  expect(actions.removeDeviceType(0)).toEqual({
    type: 'REMOVE_DEVICETYPE',
    id: 0
  });
});

it('Add controlType action works for buttons', () => {
  expect(actions.addControlType(1, 'test', 'BUTTON', '/endpoint')).toEqual({
    type: 'ADD_CONTROLTYPE',
    deviceTypeId: 1,
    controlType: {
      name: 'test',
      inputType: 'BUTTON',
      endpoint: '/endpoint'
    }
  });
});

it('Add controlType action works for sliders', () => {
  expect(actions.addControlType(1, 'test', 'SLIDER', '/endpoint', [0, 100])).toEqual({
    type: 'ADD_CONTROLTYPE',
    deviceTypeId: 1,
    controlType: {
      name: 'test',
      inputType: 'SLIDER',
      endpoint: '/endpoint',
      values: [0, 100]
    }
  });
});

it('Add controlType action works for selects', () => {
  expect(actions.addControlType(1, 'test', 'SELECT', '/endpoint', ['one', 'two', 'three'])).toEqual({
    type: 'ADD_CONTROLTYPE',
    deviceTypeId: 1,
    controlType: {
      name: 'test',
      inputType: 'SELECT',
      endpoint: '/endpoint',
      values: ['one', 'two', 'three']
    }
  });
});

it('Remove controlType action works', () => {
  expect(actions.removeControlType(1, 0)).toEqual({
    type: 'REMOVE_CONTROLTYPE',
    deviceTypeId: 1,
    controlTypeIndex: 0
  });
});

