// Actions
export const ADD_CONTROL    = 'ADD_CONTROL';
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

export const removeControl = (id) => {
  return {
    type: REMOVE_CONTROL,
    id
  };
};

