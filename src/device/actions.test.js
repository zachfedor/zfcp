import { addDevice, removeDevice, showDevice } from './actions';

it('Add device action works', () => {
  expect(addDevice('test', 0)).toEqual({
    type: 'ADD_DEVICE',
    id: 4,
    device: {
      name: 'test',
      deviceType: 0,
      controls: []
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

