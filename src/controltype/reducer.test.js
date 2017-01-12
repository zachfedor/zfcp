import controlTypeReducer, { initialState } from './reducer';
import * as actions from './actions';

it('Creates correct initial controlType state', () => {
  const action = { type: 'default' };

  expect(controlTypeReducer(undefined, action))
    .toEqual(initialState);
});

it('Adds a Button ControlType', () => {
  const action = actions.addControlType('new controlType', 'BUTTON', '/endpoint');

  expect(controlTypeReducer(initialState, action))
    .toEqual({
      controlTypes: [0],
      controlTypesById: {
        0: {
          name: 'new controlType',
          type: 'BUTTON',
          endpoint: '/endpoint'
        }
      }
    });
});

it('Removes a ControlType', () => {
  const oldState = {
    controlTypes: [0, 1],
    controlTypesById: {
      0: { name: 'zero' },
      1: { name: 'one' }
    }
  };
  const action = actions.removeControlType(0);

  expect(controlTypeReducer(oldState, action))
    .toEqual({
      controlTypes: [1],
      controlTypesById: { 1: { name: 'one' }}
    });
});

