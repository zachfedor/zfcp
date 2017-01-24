import React from 'react';
import { connect } from 'react-redux';
import { changeControl } from '../device/actions';
import Control from './Control';

const mapStateToProps = (state) => {
  const id = state.devices.showingDevice;
  const device = state.devices.byId[id];
  const deviceType = state.deviceTypes.byId[device.deviceType];
  const controls = device.controls.map((control, index) => {
    return {
      ...control,
      id: index,
      controlType: deviceType.controlTypes[index]
    };
  });

  return {
    controls
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeControl: (id, value) => {
      dispatch(changeControl(id, value));
    }
  }
};

const ControlList = (props) => {
  const controlElements = props.controls.map(control => {
    return (
      <Control
        key={control.id}
        name={control.name}
        controlType={control.controlType}
        value={control.value}
      />
    );
  });

  return (
    <div className="ControlList">
      {controlElements}
    </div>
  );
}

const ControlContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlList);

export default ControlContainer;

