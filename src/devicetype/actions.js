// Actions
export const ADD_DEVICETYPE    = 'ADD_DEVICETYPE';
export const REMOVE_DEVICETYPE = 'REMOVE_DEVICETYPE';


// Action Creators
let nextDeviceTypeID = 0;
export const addDeviceType = (name, apiUrl) => {
  return {
    type: ADD_DEVICETYPE,
    id: nextDeviceTypeID++,
    deviceType: {
      name,
      apiUrl
    }
  };
};

export const removeDeviceType = (id) => {
  return {
    type: REMOVE_DEVICETYPE,
    id
  };
};

