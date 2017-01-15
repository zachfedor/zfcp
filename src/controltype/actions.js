// Actions
export const ADD_CONTROLTYPE    = 'ADD_CONTROLTYPE';
export const REMOVE_CONTROLTYPE = 'REMOVE_CONTROLTYPE';


// Action Creators
let nextControlTypeID = 11;
export const addControlType = (name, type, endpoint, values) => {
  return {
    type: ADD_CONTROLTYPE,
    id: nextControlTypeID++,
    controlType: {
      name,
      type,
      endpoint,
      values
    }
  };
};

export const removeControlType = (id) => {
  return {
    type: REMOVE_CONTROLTYPE,
    id
  };
};

