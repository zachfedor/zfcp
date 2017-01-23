import * as actions from './actions';
import { initialDeviceState } from '../util/state';


const device = (state = {}, action) => {
  switch (action.type) {
    case actions.CHANGE_CONTROL: {
      const controls = [...state.controls];
      controls[action.controlId] = Object.assign(
        {},
        state.controls[action.controlId],
        { value: action.value }
      );

      return {
        ...state,
        controls
      };
    }

    case actions.RENAME_CONTROL: {
      const controls = [...state.controls];
      controls[action.controlId] = Object.assign(
        {},
        state.controls[action.controlId],
        { name: action.controlName }
      );

      return {
        ...state,
        controls
      };
    }

    default:
      return state;
  }
};

const deviceReducer = (state = initialDeviceState, action) => {
  switch (action.type) {
    case actions.ADD_DEVICE:
      return {
        ...state,
        devices: [ ...state.devices, action.id ],
        devicesById: Object.assign({},
          state.devicesById,
          { [action.id]: action.device }
        )
      };

    case actions.REMOVE_DEVICE:
      const devicesById = Object.assign({}, state.devicesById);
      delete devicesById[action.id];

      return {
        ...state,
        devices: state.devices.filter(i => i !== action.id),
        devicesById
      };

    case actions.SHOW_DEVICE:
      return {
        ...state,
        showingDevice: action.id
      };

    case actions.CHANGE_CONTROL:
      return {
        ...state,
        devicesById: Object.assign(
          {},
          state.devicesById,
          { [action.id]: device(state.devicesById[action.deviceId], action) }
        )
      };

    case actions.RENAME_CONTROL:
      return {
        ...state,
        devicesById: Object.assign(
          {},
          state.devicesById,
          { [action.id]: device(state.devicesById[action.deviceId], action) }
        )
      };

    default:
      return state;
  }
}

export default deviceReducer;
