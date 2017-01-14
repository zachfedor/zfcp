import { combineReducers } from 'redux';
import deviceReducer from './device/reducer';
import deviceTypeReducer from './devicetype/reducer';
import controlsById from './control/reducer';
import controlTypesById from './control/reducer';

const rootReducer = combineReducers({
  deviceReducer,
  deviceTypeReducer,
  controlsById,
  controlTypesById
});

export default rootReducer;
