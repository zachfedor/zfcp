export const initialDeviceState = {
  all: [1, 2, 3],
  byId: {
    1: {
      name: 'Bedroom Apple TV',
      deviceType: 3,
      controls: [{
        name: 'Bedroom TV Power',
        value: false
      }, {
        name: 'Bedroom TV Volume',
        value: 50
      }, {
        name: 'Bedroom TV Brightness',
        value: 75
      }]
    },
    2: {
      name: 'Livingroom Player',
      deviceType: 1,
      controls: [{
        name: 'Livingroom Audio Power',
        value: false
      }, {
        name: 'Livingroom Audio Volume',
        value: 33
      }, {
        name: 'Livingroom Audio Playlist',
        value: 'coffeeshop'
      }]
    },
    3: {
      name: 'Livingroom Lights',
      deviceType: 4,
      controls: [{
        name: 'Livingroom Lights',
        value: false
      }]
    }
  },
  showingDevice: null
};

export const initialDeviceTypeState = {
  all: [1, 2, 3, 4],
  byId: {
    1: {
      name: 'Samsung Audio',
      apiRoot: 'https://samsungapi.com/audio',
      controlTypes: [{
        name: 'Power',
        inputType: 'BUTTON',
        values: [false, true],
        endpoint: '/power'
      }, {
        name: 'Volume',
        inputType: 'SLIDER',
        values: [0, 100],
        endpoint: '/volume?val='
      }, {
        name: 'Playlist',
        inputType: 'SELECT',
        values: ['wake up tunes', 'coffeeshop', 'workout playlist'],
        endpoint: '/playlist?val='
      }]
    },
    2: {
      name: 'Sony Audio',
      apiRoot: 'https://sony.com/api/audio',
      controlTypes: [{
        name: 'Power',
        inputType: 'BUTTON',
        values: [false, true],
        endpoint: '/power'
      }, {
        name: 'Volume',
        inputType: 'SLIDER',
        values: [0, 100],
        endpoint: '/volume?val='
      }, {
        name: 'Playlist',
        inputType: 'SELECT',
        values: ['hard rock', 'classic rock', 'jazz'],
        endpoint: '/playlist?val='
      }]
    },
    3: {
      name: 'Apple TV',
      apiRoot: 'https://api.apple.com/tv',
      controlTypes: [{
        name: 'Power',
        inputType: 'BUTTON',
        values: [false, true],
        endpoint: '/power'
      }, {
        name: 'Volume',
        inputType: 'SLIDER',
        values: [0, 100],
        endpoint: '/volume?val='
      }, {
        name: 'Brightness',
        inputType: 'SLIDER',
        values: [0, 100],
        endpoint: '/brightness?val='
      }]
    },
    4: {
      name: 'CitrusLights',
      apiRoot: '',
      controlTypes: [{
        name: 'Power',
        inputType: 'BUTTON',
        values: [false, true],
        endpoint: '/power'
      }]
    }
  }
};

const initialState = {
  deviceTypes: initialDeviceTypeState,
  devices: initialDeviceState
};

export default initialState;
