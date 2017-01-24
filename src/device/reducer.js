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

const devices = (state = initialDeviceState, action) => {
  switch (action.type) {
    case actions.ADD_DEVICE:
      return {
        ...state,
        all: [ ...state.all, action.id ],
        byId: Object.assign({},
          state.byId,
          { [action.id]: action.device }
        )
      };

    case actions.REMOVE_DEVICE:
      const byId = Object.assign({}, state.byId);
      delete byId[action.id];

      return {
        ...state,
        all: state.all.filter(i => i !== action.id),
        byId
      };

    case actions.SHOW_DEVICE:
      return {
        ...state,
        showingDevice: action.id
      };

    case actions.CHANGE_CONTROL:
      return {
        ...state,
        byId: Object.assign(
          {},
          state.byId,
          { [action.id]: device(state.byId[action.deviceId], action) }
        )
      };

    case actions.RENAME_CONTROL:
      return {
        ...state,
        byId: Object.assign(
          {},
          state.byId,
          { [action.id]: device(state.byId[action.deviceId], action) }
        )
      };

    default:
      return state;
  }
}

export default devices;
