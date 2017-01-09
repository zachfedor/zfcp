import { connect } from 'react-redux';
import { showDevice } from './actions';
import DeviceList from './DeviceList';

const getDevices = (devices) => {
  // TODO:
  // if (devices === null) {
  //   get from localstorage
  // }
  return devices;
};

const mapStateToProps = (state) => {
  return {
    devices: getDevices(state.devices)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeviceClick: (id) => {
      dispatch(showDevice(id));
    }
  };
};

const DeviceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeviceList);

export default DeviceContainer;

