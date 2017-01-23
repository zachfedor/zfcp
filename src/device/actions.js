// Actions
export const ADD_DEVICE     = 'ADD_DEVICE';
export const REMOVE_DEVICE  = 'REMOVE_DEVICE';
export const SHOW_DEVICE    = 'SHOW_DEVICE';
export const CHANGE_CONTROL = 'CHANGE_CONTROL';
export const RENAME_CONTROL = 'RENAME_CONTROL';


// Action Creators
let nextDeviceID = 4;
export const addDevice = (name, deviceType) => {
  return {
    type: ADD_DEVICE,
    id: nextDeviceID++,
    device: {
      name,
      deviceType,
      controls: []
    }
  };
};

export const removeDevice = (id) => {
  return {
    type: REMOVE_DEVICE,
    id
  };
};

export const showDevice = (id) => {
  return {
    type: SHOW_DEVICE,
    id
  };
};

let nextControlID = 8;
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

export const changeControl = (deviceId, controlIndex, value) => {
  return {
    type: CHANGE_CONTROL,
    deviceId,
    controlIndex,
    value
  };
};

export const renameControl = (deviceId, controlIndex, controlName) => {
  return {
    type: RENAME_CONTROL,
    deviceId,
    controlIndex,
    controlName
  };
};

