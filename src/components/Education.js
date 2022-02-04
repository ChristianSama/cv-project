import { Component } from "react";
import SwitchText from "./SwitchText";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="educationInfo">
          <label>
            Level:
            <SwitchText edit={this.props.edit}/>
          </label>
          <label>
            Institution:
            <SwitchText edit={this.props.edit}/>
          </label>
      </div>
    );
  }
}

export default Education;