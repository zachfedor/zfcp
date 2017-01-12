import { ADD_CONTROL, REMOVE_CONTROL } from './actions';

export const initialState = {
  controls: [],
  controlsById: {}
};

const control = (state = {}, action) => {
  switch (action.type) {
    case ADD_CONTROL:
      return { [action.id]: {
        ...action.control
      }};
    default:
      return state;
  }
};

const controlReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTROL:
      return {
        controls: [ ...state.controls, action.id ],
        controlsById: Object.assign({},
          state.controlsById,
          control(undefined, action)
        )
      };

    case REMOVE_CONTROL:
      const controlsById = Object.assign({}, state.controlsById);
      delete controlsById[action.id];

      return {
        controls: state.controls.filter(i => i !== action.id),
        controlsById
      };

    default:
      return state;
  }
}

export default controlReducer;
