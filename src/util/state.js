export const initialDeviceState = {
  devices: [1, 2, 3],
  devicesById: {
    1: {
      name: 'Bedroom Apple TV',
      deviceType: 3,
      controls: [1, 2, 3]
    },
    2: {
      name: 'Livingroom Player',
      deviceType: 1,
      controls: [4, 5, 6]
    },
    3: {
      name: 'Livingroom Lights',
      deviceType: 4,
      controls: [7]
    }
  },
  showingDevice: null
};

export const initialDeviceTypeState = {
  deviceTypes: [1, 2, 3, 4],
  deviceTypesById: {
    1: {
      name: 'Samsung Audio',
      apiRoot: 'https://samsungapi.com/audio',
      controlTypes: [1, 2, 3]
    },
    2: {
      name: 'Sony Audio',
      apiRoot: 'https://sony.com/api/audio',
      controlTypes: [4, 5, 6]
    },
    3: {
      name: 'Apple TV',
      apiRoot: 'https://api.apple.com/tv',
      controlTypes: [7, 8, 9]
    },
    4: {
      name: 'CitrusLights',
      apiRoot: '',
      controlTypes: [10]
    }
  }
};

export const initialControlTypeState = {
  1: {
    name: 'Power',
    type: 'BUTTON',
    endpoint: '/power'
  },
  2: {
    name: 'Volume',
    type: 'SLIDER',
    values: [0, 100],
    endpoint: '/volume?val='
  },
  3: {
    name: 'Playlist',
    type: 'SELECT',
    values: ['wake up tunes', 'coffeeshop', 'workout playlist'],
    endpoint: '/playlist?val='
  },
  4: {
    name: 'Power',
    type: 'BUTTON',
    endpoint: '/power'
  },
  5: {
    name: 'Volume',
    type: 'SLIDER',
    values: [0, 100],
    endpoint: '/volume?val='
  },
  6: {
    name: 'Playlist',
    type: 'SELECT',
    values: ['hard rock', 'classic rock', 'jazz'],
    endpoint: '/playlist?val='
  },
  7: {
    name: 'Power',
    type: 'BUTTON',
    endpoint: '/power'
  },
  8: {
    name: 'Volume',
    type: 'SLIDER',
    values: [0, 100],
    endpoint: '/volume?val='
  },
  9: {
    name: 'Brightness',
    type: 'SLIDER',
    values: [0, 100],
    endpoint: '/brightness?val='
  },
  10: {
    name: 'Power',
    type: 'BUTTON',
    endpoint: '/power'
  }
};

export const initialControlState = {
  1: {
    name: 'Bedroom TV Power',
    type: 7,
    value: false
  },
  2: {
    name: 'Bedroom TV Volume',
    type: 8,
    value: 50
  },
  3: {
    name: 'Bedroom TV Brightness',
    type: 9,
    value: 75
  },
  4: {
    name: 'Livingroom Audio Power',
    type: 1,
    value: true
  },
  5: {
    name: 'Livingroom Audio Volume',
    type: 2,
    value: 33
  },
  6: {
    name: 'Livingroom Audio Playlist',
    type: 3,
    value: 'coffeeshop'
  },
  7: {
    name: 'Livingroom Lights',
    type: 10,
    value: true
  }
};

const initialState = {
  deviceTypeReducer: initialDeviceTypeState,
  deviceReducer: initialDeviceState,
  controlTypesById: initialControlTypeState,
  controlsById: initialControlState
};

export default initialState;
