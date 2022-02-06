import { Component } from "react";
import SwitchText from "./SwitchText";

class General extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="generalInfo">
        <label>
          First name:
          <SwitchText edit={this.props.edit}/>
        </label>
        <label>
          Last name:
          <SwitchText edit={this.props.edit}/>
        </label>
        <label>
          Phone Number:
          <SwitchText edit={this.props.edit}/>
        </label>
        <label>
          E-mail:
          <SwitchText edit={this.props.edit}/>
        </label>
      </div>
    );
  }
}

export default General;