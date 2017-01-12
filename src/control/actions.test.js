import { addControl, removeControl } from './actions';

it('Add control action works', () => {
  expect(addControl('test', 0)).toEqual({
    type: 'ADD_CONTROL',
    id: 0,
    control: {
      name: 'test',
      controlType: 0,
      value: null
    }
  });
});

it('Remove control action works', () => {
  expect(removeControl(0)).toEqual({
    type: 'REMOVE_CONTROL',
    id: 0
  });
});

