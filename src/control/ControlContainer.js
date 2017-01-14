import React from 'react';
import { connect } from 'react-redux';
import { changeControl } from './actions';
import Control from './Control';

const mapStateToProps = (state) => {
  const id = state.deviceReducer.showingDevice;
  const device = state.deviceReducer.devicesById[id];
  const controls = device.controls.map(id => {
    const control = state.controlsById[id];
    return {
      id,
      ...control,
      controlType: state.controlTypesById[control.controlType]
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
    console.log('control', control);
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

