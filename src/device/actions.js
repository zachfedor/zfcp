// Actions
export const ADD_DEVICE    = 'ADD_DEVICE';
export const REMOVE_DEVICE = 'REMOVE_DEVICE';
export const SHOW_DEVICE   = 'SHOW_DEVICE';


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
