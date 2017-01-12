import { connect } from 'react-redux';
import { showDevice } from './actions';
import DeviceList from './DeviceList';


const mapStateToProps = (state) => {
  const devices = state.deviceReducer.devices.map(device => {
    return {
      ...state.deviceReducer.devicesById[device],
      id: device
    }
  });

  return {
    devices
  }
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

