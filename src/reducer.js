import { combineReducers } from 'redux';
import deviceReducer from './device/reducer';
import deviceTypeReducer from './devicetype/reducer';

const rootReducer = combineReducers({
  deviceReducer,
  deviceTypeReducer
});

export default rootReducer;
