import controlReducer from './reducer';
import * as actions from './actions';
import { initialControlState } from '../util/state';


it('Creates correct initial control state', () => {
  const action = { type: 'default' };

  expect(controlReducer(undefined, action))
    .toEqual(initialControlState);
});

it('Adds a Button Control', () => {
  const action = actions.addControl('new control', 0);
  const emptyState = {
    0: { name: 'test', controlType: 0, value: 'old' }
  };

  expect(controlReducer(emptyState, action))
    .toEqual({
      0: { name: 'test', controlType: 0, value: 'old' },
      8: {
        name: 'new control',
        controlType: 0,
        value: null
      }
    });
});

it('Changes a Control', () => {
  const oldState = {
    0: { name: 'test', controlType: 0, value: 'old' }
  };
  const action = actions.changeControl(0, 'new');

  expect(controlReducer(oldState, action))
    .toEqual({
      0: { name: 'test', controlType: 0, value: 'new' }
    });
});

it('Removes a Control', () => {
  const oldState = {
    0: { name: 'zero' },
    1: { name: 'one' }
  };
  const action = actions.removeControl(0);

  expect(controlReducer(oldState, action))
    .toEqual({
      1: { name: 'one' }
    });
});

