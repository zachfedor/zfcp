import { addDevice, removeDevice, showDevice } from './actions';

it('Add device action works', () => {
  expect(addDevice('test')).toEqual({
    type: 'ADD_DEVICE',
    id: 0,
    device: {
      name: 'test'
    }
  });
});

it('Remove device action works', () => {
  expect(removeDevice(0)).toEqual({
    type: 'REMOVE_DEVICE',
    id: 0
  });
});

it('Show device action works', () => {
  expect(showDevice(0)).toEqual({
    type: 'SHOW_DEVICE',
    id: 0
  });
});

