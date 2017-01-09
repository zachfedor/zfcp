import { addDevice, showDevice, showDeviceList } from './actions';

it('Add device action works', () => {
  expect(addDevice('test')).toEqual({
    type: 'ADD_DEVICE',
    id: 0,
    name: 'test'
  });
});

it('Show device action works', () => {
  expect(showDevice(0)).toEqual({
    type: 'SHOW_DEVICE',
    id: 0
  });
});


it('Show devicelist action works', () => {
  expect(showDeviceList()).toEqual({
    type: 'SHOW_DEVICELIST'
  });
});

