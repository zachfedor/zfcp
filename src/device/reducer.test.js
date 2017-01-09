import deviceReducer from './reducer';

it('Reducer creates correct initial device state', () => {
  expect(deviceReducer(undefined, { type: 'default' })).toEqual({});
});
