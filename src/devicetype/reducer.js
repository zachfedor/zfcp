import { ADD_DEVICETYPE, REMOVE_DEVICETYPE } from './actions';

export const initialState = {
  deviceTypes: [],
  deviceTypesById: {}
};

const deviceType = (state = {}, action) => {
  switch (action.type) {
    case ADD_DEVICETYPE:
      return { [action.id]: {
        name: action.name,
        apiUrl: action.apiUrl
      }};
    default:
      return state;
  }
};

const deviceTypeReducer = (state = initialState, action) => {
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
