import { ADD_DEVICE, REMOVE_DEVICE, SHOW_DEVICE } from './actions';

export const initialState = {
  devices: [],
  devicesById: {}
};

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

const deviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DEVICE:
      return {
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
        devices: state.devices.filter(i => i !== action.id),
        devicesById
      };

    case SHOW_DEVICE:
      return {
        showingDevice: action.id,
        ...state
      };

    default:
      return state;
  }
}

export default deviceReducer;
