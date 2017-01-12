import { ADD_CONTROLTYPE, REMOVE_CONTROLTYPE } from './actions';

export const initialState = {
  controlTypes: [],
  controlTypesById: {}
};

const controlType = (state = {}, action) => {
  switch (action.type) {
    case ADD_CONTROLTYPE:
      return { [action.id]: {
        ...action.controlType
      }};
    default:
      return state;
  }
};

const controlTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTROLTYPE:
      return {
        controlTypes: [ ...state.controlTypes, action.id ],
        controlTypesById: Object.assign({},
          state.controlTypesById,
          controlType(undefined, action)
        )
      };

    case REMOVE_CONTROLTYPE:
      const controlTypesById = Object.assign({}, state.controlTypesById);
      delete controlTypesById[action.id];

      return {
        controlTypes: state.controlTypes.filter(i => i !== action.id),
        controlTypesById
      };

    default:
      return state;
  }
}

export default controlTypeReducer;
