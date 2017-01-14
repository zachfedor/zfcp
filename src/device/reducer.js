import { ADD_DEVICE, REMOVE_DEVICE, SHOW_DEVICE } from './actions';
import { initialDeviceState } from '../util/state';

const device = (state = {}, action) => {
  switch (action.type) {
    case ADD_DEVICE:
      return { [action.id]: {
        ...action.device
      }};
    default:
      return state;
  }
};

const deviceReducer = (state = initialDeviceState, action) => {
  switch (action.type) {
    case ADD_DEVICE:
      return {
        ...state,
        devices: [ ...state.devices, action.id ],
        devicesById: Object.assign({},
          state.devicesById,
          device(undefined, action)
        )
      };

    case REMOVE_DEVICE:
      const devicesById = Object.assign({}, state.devicesById);
      delete devicesById[action.id];

      return {
        ...state,
        devices: state.devices.filter(i => i !== action.id),
        devicesById
      };

    case SHOW_DEVICE:
      return {
        ...state,
        showingDevice: action.id
      };

    default:
      return state;
  }
}

export default deviceReducer;
