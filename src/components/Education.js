import { Component } from "react";

class Education extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="educationInfo">
          <label>
            Level:
            <input type="text" id="level"></input>
          </label>
          <label>
            Institution:
            <input type="text" id="institution"></input>
          </label>
      </div>
    );
  }
}

export default Education;