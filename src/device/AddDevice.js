import React from 'react';
import { connect } from 'react-redux';
import { addDevice } from './actions';

let AddDevice = ({ dispatch }) => {
  let input;
  let handleSubmit = (e) => {
    e.preventDefault();
    if(!input.value.trim()) {
      return;
    }
    dispatch(addDevice(input.value));
    input.value = '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={node => {
          input = node;
        }} />
        <input type="submit" value="Add Device" />
      </form>
    </div>
  )
}

AddDevice = connect()(AddDevice);

export default AddDevice;
