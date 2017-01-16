import React from 'react';
import { connect } from 'react-redux';
import { addDevice } from './actions';
import './AddDevice.css';

const mapStateToProps = (state) => {
  return {
    deviceTypes: state.deviceTypeReducer.deviceTypes.map(id => {
      return {
        id,
        name: state.deviceTypeReducer.deviceTypesById[id].name
      };
    })
  }
};

let AddDevice = ({ deviceTypes, dispatch }) => {
  let deviceName, deviceType;
  let handleSubmit = (e) => {
    e.preventDefault();
    if(!deviceName.value.trim()) {
      return;
    }

    dispatch(addDevice(deviceName.value, deviceType.value));

    deviceName.value = '';
    deviceType.value = '';
  };

  const options = deviceTypes.map(dT => {
    return (
      <option key={dT.id} value={dT.id}>{dT.name}</option>
    );
  });

  return (
    <section className="AddDevice">
      <h3>Add Another Device</h3>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input ref={node => {
            deviceName = node;
          }} />
        </label>

        <label>
          Device Type:
          <select ref={node => {
            deviceType = node;
          }} defaultValue="">
            <option value="" disabled>Select one</option>
            {options}
          </select>
        </label>

        <input className="submit" type="submit" value="Add Device" />
      </form>
    </section>
  )
}

AddDevice = connect(mapStateToProps)(AddDevice);

export default AddDevice;
