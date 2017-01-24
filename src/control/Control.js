import React, { Component, PropTypes } from 'react';
import Slider from 'rc-slider';
import '../../node_modules/rc-slider/assets/index.css';
import './Control.css';

class Control extends Component {
  render() {
    const controlType = this.props.controlType;
    const label = this.props.name === null ? controlType.name : this.props.name;
    // TODO: control the value and handle change

    let input;
    switch (controlType.inputType) {
      case 'SELECT':
        // make select element
        // iterate over controltype values as options
        // TODO: set control value as selected option
        input = (
          <label>
            {label}
            <select>
              {controlType.values.map((val, index) => (
                <option key={index} value={val}>{val}</option>
              ))}
            </select>
          </label>
        );
        break;
      case 'SLIDER':
        // TODO: make slider element?
        // TODO: range is controltype values
        // TODO: set value according to control value
        input = (
          <label>
            {label}
            <Slider
              value={this.props.value}
              min={controlType.values[0]}
              max={controlType.values[1]}
              onChange={console.log}
            />
          </label>
        );
        break;
      case 'BUTTON':
      default:
        input = <input type="button" value={label}/>
        break;
    }

    return (
      <div className="Control" >
        {input}
      </div>
    );
  }
}


Control.propTypes = {
  name: PropTypes.string,
  controlType: PropTypes.shape({
    name: PropTypes.string.isRequired,
    inputType: PropTypes.oneOf(['BUTTON', 'SLIDER', 'SELECT']).isRequired,
    values: PropTypes.array,
    endpoint: PropTypes.string.isRequired,
  }),
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.number
  ]).isRequired
}

export default Control;
