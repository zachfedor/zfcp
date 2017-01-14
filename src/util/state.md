# Redux State

- list of devices
- list of device types
- list of control types

```
{
  deviceTypes: [1, 2, 3],
  deviceTypesById: {
    1: {
      name: 'Sony Audio',
      apiRoot: 'https://myapi.com/v1/my_device',
      controlTypes: [1, 2, 3]
    },
    2: { ... },
    3: { ... }
  },
  devices: [1, 2, 3],
  devicesById: {
    1: {
      name: 'Livingroom Audio',
      type: 1,
      controls: [1, 2, 3]
    },
    2: { ... },
    3: { ... }
  },
  controlTypesById: {
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
      values: ['one', 'two'],
      endpoint: '/playlist?val='
    }
  },
  controlsById: {
    1: {
      name: 'Power',
      type: 1,
      value: true
    },
    2: {
      name: 'Volume',
      type: 2,
      value: 50,
    },
    3: {
      name: 'Playlist',
      type: 3,
      value: 'one',
    }
  }
}
```
