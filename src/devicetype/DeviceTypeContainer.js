import { connect } from 'react-redux';
import { showDeviceType } from './actions';
import DeviceTypeDashboard from './DeviceTypeDashboard';


const mapStateToProps = (state) => {
  const deviceTypes = state.deviceTypes.all.map(id => {
    return {
      id,
      name: state.deviceTypes.byId[id].name
    }
  });

  const id = state.deviceTypes.showingDeviceType;
  let deviceType = null;
  if (id !== null) {
    deviceType = state.deviceTypes.byId[id];
  }

  return {
    deviceTypes,
    deviceType
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onShowDeviceType: (id) => {
      dispatch(showDeviceType(id));
    }
  };
};

const DeviceTypeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeviceTypeDashboard);

export default DeviceTypeContainer;

