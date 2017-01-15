import { addControlType, removeControlType } from './actions';

it('Add controlType action works for buttons', () => {
  expect(addControlType('test', 'BUTTON', '/endpoint')).toEqual({
    type: 'ADD_CONTROLTYPE',
    id: 11,
    controlType: {
      name: 'test',
      type: 'BUTTON',
      endpoint: '/endpoint'
    }
  });
});

it('Add controlType action works for sliders', () => {
  expect(addControlType('test', 'SLIDER', '/endpoint', [0, 100])).toEqual({
    type: 'ADD_CONTROLTYPE',
    id: 12,
    controlType: {
      name: 'test',
      type: 'SLIDER',
      endpoint: '/endpoint',
      values: [0, 100]
    }
  });
});

it('Add controlType action works for selects', () => {
  expect(addControlType('test', 'SELECT', '/endpoint', ['one', 'two', 'three'])).toEqual({
    type: 'ADD_CONTROLTYPE',
    id: 13,
    controlType: {
      name: 'test',
      type: 'SELECT',
      endpoint: '/endpoint',
      values: ['one', 'two', 'three']
    }
  });
});

it('Remove controlType action works', () => {
  expect(removeControlType(0)).toEqual({
    type: 'REMOVE_CONTROLTYPE',
    id: 0
  });
});

