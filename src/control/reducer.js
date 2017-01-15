import { ADD_CONTROL, CHANGE_CONTROL, REMOVE_CONTROL } from './actions';
import { initialControlState } from '../util/state';


const control = (state = {}, action) => {
  switch (action.type) {
    case ADD_CONTROL:
      return { [action.id]: {
        ...action.control
      }};

    case CHANGE_CONTROL:
      return {
        [action.id]: Object.assign({}, state, { value: action.value })
      };

    default:
      return state;
  }
};

const controlsById = (state = initialControlState, action) => {
  switch (action.type) {
    case ADD_CONTROL:
      return Object.assign({},
        state,
        control(undefined, action)
      );

    case CHANGE_CONTROL:
      return Object.assign({},
        state,
        control(state[action.id], action)
      );

    case REMOVE_CONTROL:
      const controlsById = Object.assign({}, state);
      delete controlsById[action.id];

      return controlsById;

    default:
      return state;
  }
}

export default controlsById;
