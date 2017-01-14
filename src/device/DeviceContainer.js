import { connect } from 'react-redux';
import { showDevice } from './actions';
import DeviceDashboard from './DeviceDashboard';


const mapStateToProps = (state) => {
  const devices = state.deviceReducer.devices.map(id => {
    return {
      id,
      name: state.deviceReducer.devicesById[id].name
    }
  });

  const id = state.deviceReducer.showingDevice;
  let device = null;
  if (id !== null) {
    const deviceObject = state.deviceReducer.devicesById[id];
    const deviceTypeObject = state.deviceTypeReducer.deviceTypesById[deviceObject.deviceType];

    device = {
      name: deviceObject.name,
      deviceTypeName: deviceTypeObject.name,
      controls: deviceObject.controls
    };
  }

  return {
    devices,
    device
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onShowDevice: (id) => {
      dispatch(showDevice(id));
    }
  };
};

const DeviceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeviceDashboard);

export default DeviceContainer;

