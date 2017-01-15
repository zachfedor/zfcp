import controlTypeReducer from './reducer';
import * as actions from './actions';
import { initialControlTypeState } from '../util/state';

const countProps = Object.getOwnPropertyNames;

it('Creates correct initial controlType state', () => {
  const action = { type: 'default' };

  expect(controlTypeReducer(undefined, action))
    .toEqual(initialControlTypeState);
});

it('Adds a Button ControlType', () => {
  expect(countProps(initialControlTypeState).length).toEqual(10);

  const action = actions.addControlType('new controlType', 'BUTTON', '/endpoint');
  const newState = controlTypeReducer(initialControlTypeState, action);

  expect(countProps(newState).length).toEqual(11);
  expect(newState[11])
    .toEqual({
      name: 'new controlType',
      type: 'BUTTON',
      endpoint: '/endpoint'
    });
});

it('Removes a ControlType', () => {
  expect(countProps(initialControlTypeState).length).toEqual(10);

  const action = actions.removeControlType(1);
  const newState = controlTypeReducer(initialControlTypeState, action);

  expect(countProps(newState).length).toEqual(9);
  expect(newState[1]).toEqual(undefined);
});

