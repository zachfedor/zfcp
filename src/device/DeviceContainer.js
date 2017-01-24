import { connect } from 'react-redux';
import { showDevice } from './actions';
import DeviceDashboard from './DeviceDashboard';


const mapStateToProps = (state) => {
  const devices = state.devices.all.map(id => {
    return {
      id,
      name: state.devices.byId[id].name
    }
  });

  const id = state.devices.showingDevice;
  let device = null;
  if (id !== null) {
    const deviceObject = state.devices.byId[id];
    const deviceTypeObject = state.deviceTypes.byId[deviceObject.deviceType];

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

