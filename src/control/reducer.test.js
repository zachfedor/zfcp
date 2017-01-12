import controlReducer, { initialState } from './reducer';
import * as actions from './actions';

it('Creates correct initial control state', () => {
  const action = { type: 'default' };

  expect(controlReducer(undefined, action))
    .toEqual(initialState);
});

it('Adds a Button Control', () => {
  const action = actions.addControl('new control', 0);

  expect(controlReducer(initialState, action))
    .toEqual({
      controls: [0],
      controlsById: {
        0: {
          name: 'new control',
          controlType: 0,
          value: null
        }
      }
    });
});

it('Removes a Control', () => {
  const oldState = {
    controls: [0, 1],
    controlsById: {
      0: { name: 'zero' },
      1: { name: 'one' }
    }
  };
  const action = actions.removeControl(0);

  expect(controlReducer(oldState, action))
    .toEqual({
      controls: [1],
      controlsById: { 1: { name: 'one' }}
    });
});

