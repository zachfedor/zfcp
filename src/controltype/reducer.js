import { ADD_CONTROLTYPE, REMOVE_CONTROLTYPE } from './actions';
import { initialControlTypeState } from '../util/state';


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

const controlTypesById = (state = initialControlTypeState, action) => {
  switch (action.type) {
    case ADD_CONTROLTYPE:
      return Object.assign({},
        state.controlTypesById,
        controlType(undefined, action)
      );

    case REMOVE_CONTROLTYPE:
      const controlTypesById = Object.assign({}, state.controlTypesById);
      delete controlTypesById[action.id];

      return controlTypesById;

    default:
      return state;
  }
}

export default controlTypesById;
