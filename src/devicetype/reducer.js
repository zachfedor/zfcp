import { ADD_DEVICETYPE, REMOVE_DEVICETYPE } from './actions';
import { initialDeviceTypeState } from '../util/state';


const deviceType = (state = {}, action) => {
  switch (action.type) {
    case ADD_DEVICETYPE:
      return { [action.id]: {
        ...action.deviceType
      }};
    default:
      return state;
  }
};

const deviceTypeReducer = (state = initialDeviceTypeState, action) => {
  switch (action.type) {
    case ADD_DEVICETYPE:
      return {
        deviceTypes: [ ...state.deviceTypes, action.id ],
        deviceTypesById: Object.assign({},
          state.deviceTypesById,
          deviceType(undefined, action)
        )
      };

    case REMOVE_DEVICETYPE:
      const deviceTypesById = Object.assign({}, state.deviceTypesById);
      delete deviceTypesById[action.id];

      return {
        deviceTypes: state.deviceTypes.filter(i => i !== action.id),
        deviceTypesById
      };

    default:
      return state;
  }
}

export default deviceTypeReducer;
