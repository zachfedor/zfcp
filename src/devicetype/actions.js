// Actions
export const ADD_DEVICETYPE    = 'ADD_DEVICETYPE';
export const REMOVE_DEVICETYPE = 'REMOVE_DEVICETYPE';
export const ADD_CONTROLTYPE    = 'ADD_CONTROLTYPE';
export const REMOVE_CONTROLTYPE = 'REMOVE_CONTROLTYPE';


// Action Creators
let nextDeviceTypeID = 5;
export const addDeviceType = (name, apiRoot) => {
  return {
    type: ADD_DEVICETYPE,
    id: nextDeviceTypeID++,
    deviceType: {
      name,
      apiRoot,
      controlTypes: []
    }
  };
};

export const removeDeviceType = (id) => {
  return {
    type: REMOVE_DEVICETYPE,
    id
  };
};

export const addControlType = (deviceTypeId, name, inputType, endpoint, values) => {
  return {
    type: ADD_CONTROLTYPE,
    deviceTypeId,
    controlType: {
      name,
      inputType,
      endpoint,
      values
    }
  };
};

export const removeControlType = (deviceTypeId, controlTypeIndex) => {
  return {
    type: REMOVE_CONTROLTYPE,
    deviceTypeId,
    controlTypeIndex
  };
};

