// Actions
export const ADD_CONTROL    = 'ADD_CONTROL';
export const CHANGE_CONTROL    = 'CHANGE_CONTROL';
export const REMOVE_CONTROL = 'REMOVE_CONTROL';


// Action Creators
let nextControlID = 0;
export const addControl = (name, controlType) => {
  return {
    type: ADD_CONTROL,
    id: nextControlID++,
    control: {
      name,
      controlType,
      value: null
    }
  };
};

export const changeControl = (id, value) => {
  return {
    type: CHANGE_CONTROL,
    id,
    value
  };
};

export const removeControl = (id) => {
  return {
    type: REMOVE_CONTROL,
    id
  };
};

