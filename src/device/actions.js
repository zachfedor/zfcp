// Action Types for Devices
const ADD_DEVICE      = 'ADD_DEVICE';
const SHOW_DEVICE     = 'SHOW_DEVICE';
const SHOW_DEVICELIST = 'SHOW_DEVICELIST';

export const deviceActions = {
  ADD_DEVICE,
  SHOW_DEVICE,
  SHOW_DEVICELIST
};


// Actions for Devices
let nextDeviceID = 0;
export const addDevice = (name) => {
  return {
    type: ADD_DEVICE,
    id: nextDeviceID++,
    name
  };
};

export const showDevice = (id) => {
  return {
    type: SHOW_DEVICE,
    id: id
  };
};

export const showDeviceList = () => {
  return {
    type: SHOW_DEVICELIST,
  };
};
