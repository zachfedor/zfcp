import { combineReducers } from 'redux';
import devices from './device/reducer';
import deviceTypes from './devicetype/reducer';

const rootReducer = combineReducers({
  devices,
  deviceTypes
});

export default rootReducer;
