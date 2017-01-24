import * as actions from './actions';

it('Add device action works', () => {
  const controlTypes = [{
    name: 'button',
    inputType: 'BUTTON',
    values: [0, 1],
    endpoint: '/button'
  }];
  expect(actions.addDevice('test', 0, controlTypes)).toEqual({
    type: 'ADD_DEVICE',
    id: 4,
    device: {
      name: 'test',
      deviceType: 0,
      controls: [{
        name: 'button',
        value: 0
      }]
    }
  });
});

it('Remove device action works', () => {
  expect(actions.removeDevice(0)).toEqual({
    type: 'REMOVE_DEVICE',
    id: 0
  });
});

it('Show device action works', () => {
  expect(actions.showDevice(0)).toEqual({
    type: 'SHOW_DEVICE',
    id: 0
  });
});

it('Change control action works', () => {
  expect(actions.changeControl(1, 0, 'test')).toEqual({
    type: 'CHANGE_CONTROL',
    deviceId: 1,
    controlIndex: 0,
    value: 'test'
  });
});

it('Rename control action works', () => {
  expect(actions.renameControl(1, 0, 'test')).toEqual({
    type: 'RENAME_CONTROL',
    deviceId: 1,
    controlIndex: 0,
    controlName: 'test'
  });
});

