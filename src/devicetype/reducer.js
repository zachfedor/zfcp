import * as actions from './actions';
import { initialDeviceTypeState } from '../util/state';


const deviceType = (state = {}, action) => {
  switch (action.type) {
    case actions.ADD_DEVICETYPE:
      return {
        ...action.deviceType
      };

    case actions.ADD_CONTROLTYPE:
      return {
        ...state,
        controlTypes: [ ...state.controlTypes, action.controlType]
      };

    case actions.REMOVE_CONTROLTYPE:
      const index = action.controlTypeIndex;
      return {
        ...state,
        controlTypes: [
          ...state.controlTypes.slice(0, index),
          ...state.controlTypes.slice(index + 1, state.controlTypes.length)
        ]
      };

    default:
      return state;
  }
};

const deviceTypes = (state = initialDeviceTypeState, action) => {
  switch (action.type) {
    case actions.ADD_DEVICETYPE: {
      return {
        all: [ ...state.all, action.id ],
        byId: Object.assign({},
          state.byId,
          { [action.id]: deviceType(undefined, action) }
        )
      };
    }

    case actions.REMOVE_DEVICETYPE: {
      const byId = Object.assign({}, state.byId);
      delete byId[action.id];

      return {
        all: state.all.filter(i => i !== action.id),
        byId
      };
    }

    case actions.ADD_CONTROLTYPE: {
      const newDeviceType = deviceType(
        state.byId[action.deviceTypeId],
        action
      );

      return {
        ...state,
        byId: Object.assign(
          {},
          state.byId,
          { [action.deviceTypeId]: newDeviceType }
        )
      };
    }

    case actions.REMOVE_CONTROLTYPE: {
      const newDeviceType = deviceType(
        state.byId[action.deviceTypeId],
        action
      );

      return {
        ...state,
        byId: Object.assign(
          {},
          state.byId,
          { [action.deviceTypeId]: newDeviceType }
        )
      };
    }

    case actions.SHOW_DEVICETYPE: {
      return {
        ...state,
        showingDeviceType: action.id
      };
    }

    default:
      return state;
  }
}

export default deviceTypes;
