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

const deviceTypeReducer = (state = initialDeviceTypeState, action) => {
  switch (action.type) {
    case actions.ADD_DEVICETYPE: {
      return {
        deviceTypes: [ ...state.deviceTypes, action.id ],
        deviceTypesById: Object.assign({},
          state.deviceTypesById,
          { [action.id]: deviceType(undefined, action) }
        )
      };
    }

    case actions.REMOVE_DEVICETYPE: {
      const deviceTypesById = Object.assign({}, state.deviceTypesById);
      delete deviceTypesById[action.id];

      return {
        deviceTypes: state.deviceTypes.filter(i => i !== action.id),
        deviceTypesById
      };
    }

    case actions.ADD_CONTROLTYPE: {
      const newDeviceType = deviceType(
        state.deviceTypesById[action.deviceTypeId],
        action
      );

      return {
        ...state,
        deviceTypesById: Object.assign(
          {},
          state.deviceTypesById,
          { [action.deviceTypeId]: newDeviceType }
        )
      };
    }

    case actions.REMOVE_CONTROLTYPE: {
      const newDeviceType = deviceType(
        state.deviceTypesById[action.deviceTypeId],
        action
      );

      return {
        ...state,
        deviceTypesById: Object.assign(
          {},
          state.deviceTypesById,
          { [action.deviceTypeId]: newDeviceType }
        )
      };
    }

    default:
      return state;
  }
}

export default deviceTypeReducer;
