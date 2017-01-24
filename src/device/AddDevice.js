import React from 'react';
import { connect } from 'react-redux';
import { addDevice } from './actions';
import './AddDevice.css';

const mapStateToProps = (state) => {
  return {
    deviceTypes: state.deviceTypes
  };
};

let AddDevice = ({ deviceTypes, dispatch }) => {
  let deviceNameNode, deviceTypeNode;
  let handleSubmit = (e) => {
    e.preventDefault();
    if(!deviceNameNode.value.trim()) {
      return;
    }

    const deviceTypeId = deviceTypeNode.value;
    const controlTypes = deviceTypes.byId[deviceTypeId].controlTypes;

    dispatch(addDevice(deviceNameNode.value, deviceTypeId, controlTypes));

    deviceNameNode.value = '';
    deviceTypeNode.value = '';
  };

  const options = deviceTypes.all.map(id => {
    const name = deviceTypes.byId[id].name;

    return (
      <option key={id} value={id}>{name}</option>
    );
  });

  return (
    <section className="AddDevice">
      <h3>Add Another Device</h3>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input ref={node => {
            deviceNameNode = node;
          }} />
        </label>

        <label>
          Device Type:
          <select ref={node => {
            deviceTypeNode = node;
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
